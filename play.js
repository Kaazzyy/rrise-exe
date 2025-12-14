// Base URL para o GitHub RAW
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// --- FUNÇÕES AUXILIARES ---

// Função que injeta o código de forma segura (para o main.js com código extra)
function injectScriptText(text, sourceUrl, target = 'head') {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    document[target].appendChild(s); 
}

// Função para buscar o conteúdo de um arquivo (usada para o main.js e vendor.js)
async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) return null;
        return await res.text();
    } catch (e) {
        return null;
    }
}

// Função para esconder o Launcher UI
function hideLauncherUI() {
    const launcherDiv = document.getElementById('launcher-ui'); 
    if (launcherDiv) launcherDiv.style.display = 'none';
    document.body.style.background = 'none'; 
}

// --- LÓGICA PRINCIPAL DO LAUNCHER ---

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton || !nickInput || !skinInput) {
        console.error('[Eclipse:play.js] UI elements not found. Initialization failed.');
        return; 
    }

    // Carregar dados salvos
    if(localStorage.nickname) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl) skinInput.value = localStorage.skinUrl;
    
    // **A injeção do jogo SÓ ACONTECE AQUI**
    playButton.addEventListener('click', async function () {
        console.log('[Eclipse] Play button clicked. Starting stable game injection...');
        
        const nick = nickInput.value || "Player";
        const skin = skinInput.value || "";
        
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        hideLauncherUI(); // Esconde o launcher
        
        // 1. Fetch do Vendor
        const vendorJsContent = await fetchContent('js/vendor.js');
        if (!vendorJsContent) {
            return console.error('[Eclipse] Falha ao carregar vendor.js. Abortando.');
        }

        // 2. Injetar o Vendor (Bibliotecas base) - DEVE SER O PRIMEIRO SCRIPT INJETADO
        injectScriptText(vendorJsContent, `${RAW_BASE_URL}/js/vendor.js`, 'body');
        
        // 3. Injetar o Main (Jogo) com o código de inicialização agressiva
        setTimeout(async () => {
            const mainJsContent = await fetchContent('js/main.js'); 
            
            if (mainJsContent) {
                // Código de inicialização agressiva (para forçar o aparecimento da UI do jogo)
                const initializationCode = `
                    console.log('[Eclipse] Inicialização pós-injeção: A forçar conexão.');
                    
                    window.Eclipse_Nickname = localStorage.nickname || "Eclipse Player";
                    
                    // Tenta definir o nome de usuário 
                    if (window.client && typeof window.client.setNickname === 'function') {
                        window.client.setNickname(window.Eclipse_Nickname);
                    }
                    
                    // Tenta forçar o início do jogo / ligação ao servidor (Mostra a UI).
                    if (window.client && typeof window.client.connect === 'function') {
                        window.client.connect(); 
                    } else if (window.initGame) {
                        window.initGame();
                    } else if (window.startGame) {
                        window.startGame();
                    }
                `;

                // Injeta o main.js mais o código de inicialização
                injectScriptText(mainJsContent + initializationCode, `${RAW_BASE_URL}/js/main.js`, 'body');
                
                console.log('[Eclipse] Jogo injetado e inicialização forçada.');
            } else {
                console.error('[Eclipse] Falha ao carregar main.js. O jogo não pode começar.');
            }
        }, 100); // Pequeno delay após o vendor para garantir a execução
    });
}

// Inicia a lógica do launcher.
setTimeout(initializeLauncher, 50);
