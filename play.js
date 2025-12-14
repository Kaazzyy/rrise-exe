// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 
const TS = `?t=${Date.now()}`;

// --- FUNÇÕES AUXILIARES ---

// Injeta script a partir de texto (para main.js e para o patch de inicialização)
function injectScriptText(text, sourceUrl, target = 'body') {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    document[target].appendChild(s); 
}

// Função para buscar o conteúdo de um arquivo (main.js e vendor.js)
async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) return null;
        return await res.text();
    } catch (e) {
        return null;
    }
}

function hideLauncherUI() {
    // Esconde o container do launcher e limpa o fundo para ver o jogo
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

    if (!playButton) return; 

    // 1. Configurar o estado inicial do botão
    playButton.disabled = true;
    playButton.innerText = "Loading Vendor (Core)...";
    
    // Carregar dados salvos
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    // 2. Carregar o VENDOR.JS (Bibliotecas/Dependências) - Injeção Síncrona
    // O fetchContent deve obter o texto do Vendor.js
    console.log("[Eclipse] Fetching vendor.js content...");
    const vendorJsContent = await fetchContent('vendor.js');
    
    if (vendorJsContent) {
        // Injeta o vendor.js
        injectScriptText(vendorJsContent, `${RAW_BASE_URL}/vendor.js`, 'head'); 
        console.log("[Eclipse] Vendor.js injected successfully.");
        
        // 3. Ativar o Botão
        playButton.disabled = false;
        playButton.innerText = "Play Now";
        playButton.style.opacity = "1";
        playButton.style.cursor = "pointer";
        console.log("[Eclipse] System Ready. Waiting for Play.");
        
    } else {
        console.error("[Eclipse] ERROR: Failed to load Vendor.js. Check network/path.");
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

        // B. Carregar o MAIN.JS
        const mainJsContent = await fetchContent('main.js');
        
        if (!mainJsContent) {
            console.error('[Eclipse] Falha ao carregar main.js. O jogo não pode começar.');
            playButton.innerText = "ERROR: Main.js Failed";
            // Voltar a mostrar o launcher se falhar
            const launcherUI = document.getElementById('launcher-ui');
            if(launcherUI) launcherUI.style.display = 'flex';
            return;
        }

        // C. Código de Inicialização Final (com o Nickname/Skin)
        const initializationCode = `
            // 1. Set variables BEFORE main.js runs
            localStorage.setItem('nickname', "${nick}");
            localStorage.setItem('skinUrl', "${skin}");
            
            // 2. Tenta forçar o início do jogo (depois de um curto delay para o main.js correr)
            setTimeout(() => {
                // Estas chamadas são cruciais para a UI/conexão do jogo Vanis/Aetlis
                if (window.client && typeof window.client.connect === 'function') {
                    window.client.connect(); 
                } else if (typeof window.initGame === 'function') {
                    window.initGame();
                } else if (typeof window.startGame === 'function') {
                    window.startGame();
                }
                
                // 3. Força o set do Nickname/Skin no objeto do jogo (caso ele tenha carregado)
                if (window.client && typeof window.client.setNickname === 'function') {
                     window.client.setNickname("${nick}");
                }

                // 4. Limpeza final
                hideLauncherUI(); // Chama a função definida no topo
            }, 50); 
            
        `;

        // D. Injeta o MAIN.JS + Código de Inicialização
        // Injetamos o main.js e, no final, o código de inicialização agressiva
        injectScriptText(mainJsContent + initializationCode, `${RAW_BASE_URL}/main.js`);
        console.log('[Eclipse] Jogo injetado e inicialização forçada.');
    });
}

// Inicia a lógica após o DOM estar pronto
// Usamos DOMContentLoaded para garantir que o HTML do Launcher existe
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLauncher);
} else {
    setTimeout(initializeLauncher, 50);
}
