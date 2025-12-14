// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// --- FUNÇÕES AUXILIARES ---

// Injeta script a partir de URL, prometendo que carregou
function injectScriptFromUrl(url, target = 'head') {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = url;
        s.async = false; // Tenta carregar de forma síncrona
        s.onload = () => {
             console.log(`[Eclipse] Injected: ${url}`);
             resolve();
        };
        s.onerror = (e) => {
             console.error(`[Eclipse] Failed to inject: ${url}`, e);
             reject(e);
        };
        document[target].appendChild(s);
    });
}

function hideLauncherUI() {
    const launcherDiv = document.getElementById('launcher-ui'); 
    if (launcherDiv) launcherDiv.style.display = 'none';
    document.body.style.background = '#000'; 
}


// --- Lógica Principal do Launcher ---
async function initializeLauncher() {
    console.log("[Eclipse] Launcher Logic Initializing...");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    
    if (!playButton) {
        console.error("[Eclipse] Elementos do Launcher não encontrados.");
        return; 
    }

    // Carregar dados salvos
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    // 1. Bloquear o botão inicial
    playButton.disabled = true;
    playButton.innerText = "Loading Core System...";
    
    // 2. Carregar o VENDOR.JS (Bibliotecas/Dependências)
    try {
        await injectScriptFromUrl(`${RAW_BASE_URL}/vendor.js?t=${Date.now()}`);
        console.log("[Eclipse] Vendor.js loaded.");
        
        // 3. Ativar o Botão
        playButton.disabled = false;
        playButton.innerText = "Play Now";
        playButton.style.opacity = "1";
        playButton.style.cursor = "pointer";

    } catch (e) {
        console.error("[Eclipse] ERROR: Failed to load Vendor.js. Aborting.", e);
        playButton.innerText = "ERROR: Failed to load Vendor.js";
        return;
    }


    // 4. Evento de Clique
    playButton.addEventListener('click', async () => {
        playButton.disabled = true;
        playButton.innerText = "Starting Game...";
        
        // A. Salvar Dados
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin); 

        // B. Patching Agressivo (Antes de o jogo arrancar)
        // Sobrescrevemos o localStorage e definimos variáveis globais.
        const patch = `
            localStorage.setItem('nickname', "${nick}");
            localStorage.setItem('skinUrl', "${skin}");
            window.Eclipse_Nickname = "${nick}";
            window.Eclipse_SkinUrl = "${skin}";
            console.log("Patching Nickname/Skin before game start.");
        `;
        
        // Injetamos o patch diretamente
        const s = document.createElement('script');
        s.textContent = patch;
        document.head.appendChild(s);


        // C. Carregar o MAIN.JS
        try {
            await injectScriptFromUrl(`${RAW_BASE_URL}/main.js?t=${Date.now()}`);
            console.log('[Eclipse] Main.js loaded. Game should be starting.');
            
            // D. Chamada final (caso o jogo não inicie sozinho)
            setTimeout(() => {
                if (window.client && typeof window.client.connect === 'function') {
                    window.client.connect(); 
                } else if (typeof window.initGame === 'function') {
                    window.initGame();
                }
                hideLauncherUI(); // Esconder o launcher
            }, 100);

        } catch (e) {
            console.error('[Eclipse] ERROR: Failed to load main.js.', e);
            playButton.innerText = "ERROR: Main.js Failed";
            document.getElementById('launcher-ui').style.display = 'flex';
        }
    });
}

// Inicia a lógica após o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
    // Pequeno delay para garantir que o HTML do Launcher foi desenhado
    setTimeout(initializeLauncher, 50); 
});
