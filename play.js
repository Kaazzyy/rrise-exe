// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// Função que injeta o código de forma segura
function injectScriptText(text, sourceUrl, target = 'head') {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    document[target].appendChild(s); 
}

// Função para buscar o conteúdo (usada apenas para main.js agora)
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
    // Esconde o container do launcher e remove o fundo para ver o jogo
    const launcherDiv = document.getElementById('launcher-ui'); 
    if (launcherDiv) launcherDiv.style.display = 'none';
    document.body.style.background = 'none'; 
}


function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) return; 

    // Carregar dados salvos
    if(localStorage.nickname) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl) skinInput.value = localStorage.skinUrl;
    
    playButton.addEventListener('click', async function () {
        console.log('[Eclipse] Iniciando injeção do jogo (Main.js)...');
        
        const nick = nickInput.value || "Player";
        const skin = skinInput.value || "";
        
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        hideLauncherUI();
        
        // --- INJEÇÃO DO MAIN.JS + CÓDIGO DE START ---
        
        const mainJsContent = await fetchContent('js/main.js'); 
        
        if (mainJsContent) {
// ... (dentro do if (mainJsContent))

            // Este código é executado logo a seguir ao main.js e força a inicialização do jogo
            const initializationCode = `
                console.log('[Eclipse] Inicialização pós-injeção: A forçar conexão.');
                
                // Define as variáveis de login globais
                window.Eclipse_Nickname = localStorage.nickname || "Eclipse Player";
                window.Eclipse_Skin = localStorage.skinUrl || "";

                // Força a variável de login principal do Aetlis.io se for conhecida
                // Substitua a 'client' (exemplo) pela variável que o jogo usa para o seu objeto principal, se souberes.
                // Se não souberes, mantemos 'client'.
                if (window.client && typeof window.client.setNickname === 'function') {
                    window.client.setNickname(window.Eclipse_Nickname);
                }
                
                // Tenta forçar o início do jogo / ligação ao servidor.
                // Isto faz com que o painel UI (a imagem que mostraste) apareça.
                if (window.client && typeof window.client.connect === 'function') {
                    // É a chamada mais provável para iniciar o jogo e mostrar a UI.
                    window.client.connect(); 
                } else if (window.initGame) {
                    // Segunda tentativa comum em mods
                    window.initGame();
                } else {
                    // Terceira tentativa (comum em jogos Pixi/HTML5)
                    setTimeout(() => { 
                         if (typeof window.startGame === 'function') window.startGame();
                    }, 500);
                }

                // Limpeza final 
                const launcher = document.getElementById('launcher-ui');
                if(launcher) launcher.style.display = 'none';
            `;
            
            // Injeta o main.js mais o código de inicialização agressiva
            injectScriptText(mainJsContent + initializationCode, `${RAW_BASE_URL}/js/main.js`, 'body');
            
            console.log('[Eclipse] Jogo injetado, ads removidos, e inicialização forçada.');
        } else {
            console.error('[Eclipse] Falha ao carregar main.js. O jogo não pode começar.');
        }
    });
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLauncher);
} else {
    initializeLauncher();
}

