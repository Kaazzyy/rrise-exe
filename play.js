// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// --- FUNÇÕES AUXILIARES ---

// Função que injeta o código de forma segura (para o main.js com código extra)
// target = 'body' ou 'head'
function injectScriptText(text, sourceUrl, target = 'head') {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    document[target].appendChild(s); 
}

// Função para buscar o conteúdo de um arquivo (usada para o main.js)
async function fetchContent(path) {
    try {
        // Adicionamos um timestamp para evitar cache
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) return null;
        return await res.text();
    } catch (e) {
        return null;
    }
}

// Função para injetar scripts via URL (usada para o vendor.js)
async function injectScriptFromUrl(url, target = 'head') {
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return false;
        const text = await res.text();
        
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + url;
        document[target].appendChild(s);
        return true;
    } catch (e) {
        console.error('Injection error for', url, e);
        return false;
    }
}

// Função para esconder o Launcher UI (Usamos o ID do index.html)
function hideLauncherUI() {
    const launcherDiv = document.getElementById('launcher-ui'); 
    if (launcherDiv) launcherDiv.style.display = 'none';
    
    // O fundo deve ser removido para o jogo (canvas) ser visível
    document.body.style.background = 'none'; 
}

// --- LÓGICA PRINCIPAL DO LAUNCHER ---

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    // Verifica se a UI do Launcher carregou corretamente
    if (!playButton || !nickInput || !skinInput) {
        console.error('[Eclipse:play.js] Elementos da UI não encontrados. Verifique o index.html e o timing do UserScript.');
        return; 
    }

    // Carregar dados salvos
    if(localStorage.nickname) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl) skinInput.value = localStorage.skinUrl;
    
    // **A injeção do jogo SÓ ACONTECE AQUI (NO CLIQUE)**
    playButton.addEventListener('click', async function () {
        console.log('[Eclipse] Play button clicked. Iniciando injeção do jogo...');
        
        const nick = nickInput.value || "Player";
        const skin = skinInput.value || "";
        
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        hideLauncherUI(); // Esconde o launcher
        
        // 1. Injetar o Vendor (Bibliotecas base)
        const vendorSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/vendor.js`, 'body'); 
        
        if (vendorSuccess) {
            // 2. Injetar o Main (Jogo) com o código de inicialização agressiva
            setTimeout(async () => {
                const mainJsContent = await fetchContent('js/main.js'); 
                
                if (mainJsContent) {
                    // Código de inicialização agressiva (para forçar o aparecimento da UI do jogo)
                    const initializationCode = `
                        console.log('[Eclipse] Inicialização pós-injeção: A forçar conexão e UI.');
                        
                        window.Eclipse_Nickname = localStorage.nickname || "Eclipse Player";
                        
                        // 1. Tenta definir o nome de usuário 
                        if (window.client && typeof window.client.setNickname === 'function') {
                            window.client.setNickname(window.Eclipse_Nickname);
                        }
                        
                        // 2. Tenta forçar o início do jogo / ligação ao servidor (Mostra a UI).
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
            }, 100); // Pequeno delay após o vendor para garantir o PIXI.js
        } else {
             console.error('[Eclipse] Falha ao carregar vendor.js. O jogo não pode começar.');
        }
    });
}

// Inicia o listener
// Usamos um pequeno timeout para dar tempo ao UserScript (Kazzy...) de desenhar o HTML do Launcher
setTimeout(initializeLauncher, 50);
