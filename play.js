// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 
const TS = `?t=${Date.now()}`;

// --- FUNÇÕES AUXILIARES ---

// Injeta script a partir de texto (para main.js)
function injectScriptText(text, sourceUrl) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    document.body.appendChild(s); 
}

// Injeta script a partir de URL (para vendor.js)
function injectScriptFromUrl(url) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

// Busca o conteúdo (para main.js)
async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}${TS}`); 
        if (!res.ok) return null;
        return await res.text();
    } catch (e) {
        return null;
    }
}


// --- Lógica Principal do Launcher ---
async function initializeLauncher() {
    console.log("[Eclipse] Launcher Logic Initializing...");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) return; 

    // 1. Configurar o estado inicial do botão
    playButton.disabled = true;
    playButton.innerText = "Loading Core System (Vendor)...";
    
    // Carregar dados salvos
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    // 2. Carregar o VENDOR.JS (Bibliotecas/Dependências) - Usa URL direto
    try {
        await injectScriptFromUrl(`${RAW_BASE_URL}/vendor.js${TS}`);
        console.log("[Eclipse] Vendor.js loaded successfully.");
        
        // Ativar o Botão
        playButton.disabled = false;
        playButton.innerText = "Play Now";
        playButton.style.opacity = "1";
        playButton.style.cursor = "pointer";

    } catch (e) {
        console.error("[Eclipse] ERROR: Failed to load Vendor.js. Check network.", e);
        playButton.innerText = "ERROR: Failed to load Vendor.js";
        return;
    }


    // 3. Evento de Clique
    playButton.addEventListener('click', async () => {
        playButton.disabled = true;
        playButton.innerText = "Starting Game...";
        
        // A. Salvar Dados
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin); 

        // B. Esconder Launcher
        const launcherUI = document.getElementById('launcher-ui');
        if(launcherUI) launcherUI.style.display = 'none';
        
        // C. Carregar o MAIN.JS
        const mainJsContent = await fetchContent('main.js');
        if (!mainJsContent) {
            console.error('[Eclipse] Falha ao carregar main.js. O jogo não pode começar.');
            playButton.innerText = "ERROR: Main.js Failed";
            if(launcherUI) launcherUI.style.display = 'flex'; // Volta a mostrar se falhar
            return;
        }

        // D. Código de Inicialização Agressiva
        const initializationCode = `
            // 1. Variáveis globais para o teu código customizado
            window.Eclipse_Nickname = "${nick}";
            window.Eclipse_SkinUrl = "${skin}";
            
            // 2. Força o Nickname/Skin na primeira oportunidade
            localStorage.setItem('nickname', window.Eclipse_Nickname);
            localStorage.setItem('skinUrl', window.Eclipse_SkinUrl);
            
            // 3. Chamada de Início do Jogo
            // Esta é a função mais provável que inicia o jogo depois do carregamento/ads.
            setTimeout(() => {
                if (window.client && typeof window.client.connect === 'function') {
                    window.client.connect(); 
                } else if (typeof window.initGame === 'function') {
                    window.initGame();
                } else if (typeof window.startGame === 'function') {
                    window.startGame();
                }
            }, 50); 
            
            // 4. Garante que os anúncios não aparecem DEPOIS de o jogo arrancar.
            document.body.style.background = '#000';
            
        `;

        // E. Injeta o MAIN.JS + Código de Inicialização
        injectScriptText(mainJsContent + initializationCode, `${RAW_BASE_URL}/main.js`);
        console.log('[Eclipse] Jogo injetado e inicialização forçada.');
    });
}

// Inicializa a lógica após o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um pequeno delay caso o Tailwind ainda esteja a carregar estilos
    setTimeout(initializeLauncher, 100); 
});
