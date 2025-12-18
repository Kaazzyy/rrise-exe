// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ff00; font-weight: bold;', msg); }

// Função que injeta o código de forma segura
function injectScriptText(text, sourceUrl) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    document.body.appendChild(s); 
}

async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) return null;
        return await res.text();
    } catch (e) { return null; }
}

function initializeLauncher() {
    log("A iniciar lógica do botão...");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) {
        log("ERRO: Botão 'playBtn' não encontrado no HTML!");
        return; 
    }

    // --- CORREÇÃO 1: Carregar dados salvos para os Inputs ---
    // Isto resolve o problema da skin não aparecer no launcher
    if (localStorage.getItem('nickname')) {
        nickInput.value = localStorage.getItem('nickname');
    }
    if (localStorage.getItem('skinUrl')) {
        skinInput.value = localStorage.getItem('skinUrl');
    }
    // -------------------------------------------------------

    // 1. ATIVAR O BOTÃO
    playButton.disabled = false;
    playButton.innerText = "Play Now";
    
    playButton.addEventListener("click", async () => {
        log("Botão Play clicado!");
        
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";

        // Feedback visual
        playButton.disabled = true;
        playButton.innerText = "Loading Engine...";

        // Baixar main.js
        const mainJsContent = await fetchContent('js/main.js'); // Atenção ao caminho aqui, verifica se é 'js/main.js' ou apenas 'main.js' no teu repo
        // Nota: No teu script original tinhas apenas 'main.js' no bootCode, mas no script.user.js tinhas 'js/main.js'.
        // Vou assumir que está na raiz ou na pasta js. Se falhar, ajusta este caminho.
        // Se o main.js está na raiz do GitHub, usa apenas 'main.js'.
        
        // Vamos tentar buscar na raiz primeiro, como estava no teu play.js original:
        const finalMainContent = await fetchContent('main.js');

        if (!finalMainContent) {
            alert("Erro crítico: Não foi possível baixar o main.js!");
            playButton.innerText = "Error: main.js failed";
            playButton.disabled = false;
            return;
        }

        log("Main.js baixado. A preparar injeção...");

        // --- CORREÇÃO 2: Boot Code Inteligente ---
        // Em vez de esperar 200ms e rezar para funcionar, ele verifica se o jogo carregou.
        const bootCode = `
            console.log('[Eclipse] A guardar configurações...');
            localStorage.setItem('nickname', "${nick}");
            localStorage.setItem('skinUrl', "${skin}");
            
            // Função recursiva que espera o motor do jogo carregar
            function waitForGameEngine(attempts) {
                if (attempts > 100) { // Tenta por 10 segundos (100 * 100ms)
                    alert("Erro: O jogo demorou demasiado a iniciar. Recarregue a página (F5).");
                    return;
                }

                // Verifica se as funções globais do jogo já existem
                const gameReady = (window.client && typeof window.client.connect === 'function') || 
                                  (typeof window.initGame === 'function') ||
                                  (typeof window.startGame === 'function');

                if (gameReady) {
                    console.log('[Eclipse] Motor detetado! A conectar...');
                    
                    // Inicia o jogo
                    if (window.client && window.client.connect) window.client.connect();
                    else if (window.initGame) window.initGame();
                    else if (window.startGame) window.startGame();

                    // Só esconde o UI se o jogo realmente iniciou
                    setTimeout(() => {
                        const ui = document.getElementById('launcher-ui');
                        if(ui) ui.style.display = 'none';
                        document.body.style.background = '#000'; // Garante fundo preto p/ canvas
                        // Disparar redimensionamento para garantir que o canvas ajusta
                        window.dispatchEvent(new Event('resize'));
                    }, 100);

                } else {
                    // Se não estiver pronto, espera 100ms e tenta de novo
                    console.log('[Eclipse] À espera do main.js... tentativa ' + attempts);
                    setTimeout(() => waitForGameEngine(attempts + 1), 100);
                }
            }

            // Começa a verificação
            waitForGameEngine(0);
        `;

        // Injeta o main.js + o código de boot
        injectScriptText(finalMainContent + bootCode, `${RAW_BASE_URL}/main.js`);
    });
}

// Executa
setTimeout(initializeLauncher, 100);
