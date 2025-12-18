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

    // 1. ATIVAR O BOTÃO
    playButton.disabled = false;
    playButton.innerText = "Play Now";
    playButton.style.opacity = "1";
    playButton.style.cursor = "pointer";
    log("Botão ativado e pronto para clique.");

    // Carregar dados salvos
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    // 2. EVENTO DE CLIQUE
    playButton.addEventListener('click', async () => {
        log("Botão clicado! A preparar injeção do main.js...");
        playButton.disabled = true;
        playButton.innerText = "Starting...";
        
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin); 

        // Buscar o MAIN.JS
        const mainJsContent = await fetchContent('main.js');
        
        if (!mainJsContent) {
            log("ERRO: Não foi possível baixar o main.js!");
            playButton.innerText = "Error: main.js not found";
            return;
        }

        log("Main.js baixado. A injetar...");

        // Código de Inicialização que corre LOGO APÓS o main.js
        const bootCode = `
            console.log('[Eclipse] Forçando inicialização do motor de jogo...');
            localStorage.setItem('nickname', "${nick}");
            localStorage.setItem('skinUrl', "${skin}");
            
            setTimeout(() => {
                // Tenta as 3 formas comuns de iniciar o jogo no Vanis/Aetlis
                if (window.client && typeof window.client.connect === 'function') {
                    window.client.connect(); 
                } else if (typeof window.initGame === 'function') {
                    window.initGame();
                } else if (typeof window.startGame === 'function') {
                    window.startGame();
                }
                
                // Esconde o launcher para mostrar o canvas do jogo
                const ui = document.getElementById('launcher-ui');
                if(ui) ui.style.display = 'none';
                document.body.style.background = 'none';
                console.log('[Eclipse] UI escondida. Jogo deve estar visível.');
            }, 200);
        `;

        // Injeta tudo
        injectScriptText(mainJsContent + bootCode, `${RAW_BASE_URL}/main.js`);
    });
}

// Executa
setTimeout(initializeLauncher, 100);
