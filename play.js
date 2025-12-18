const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`);
        if (!res.ok) return null;
        return await res.text();
    } catch (e) { return null; }
}

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    const launcherUI = document.getElementById("launcher-ui");

    if (!playButton) {
        setTimeout(initializeLauncher, 100);
        return;
    }

    // --- SINCRONIZAÇÃO DE DADOS ---
    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = async () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Downloading logic...";

        const mainJs = await fetchContent('main.js');
        if (!mainJs) {
            alert("Erro ao baixar main.js!");
            playButton.disabled = false;
            return;
        }

        log("Main.js obtido. A preparar transição...");

        // --- AÇÃO PARA EVITAR CONGELAMENTO ---
        // 1. Escondemos a UI IMEDIATAMENTE (se ela ficar por cima, o jogo parece congelado)
        launcherUI.style.display = 'none';
        
        // 2. Garantimos que o background está preto para o jogo
        document.body.style.background = "#000";

        // 3. Injeção com "Safe Boot"
        const script = document.createElement('script');
        script.textContent = `
            (function() {
                try {
                    console.log('[Eclipse] A injetar lógica principal...');
                    ${mainJs}
                    
                    // Espera um fôlego para o main.js registar as funções
                    setTimeout(() => {
                        console.log('[Eclipse] A tentar conectar...');
                        
                        // Tenta forçar o arranque em diferentes instâncias
                        if (window.client && typeof window.client.connect === 'function') {
                            window.client.connect();
                        } else if (window.game && window.game.init) {
                            window.game.init();
                        }
                        
                        // Força o resize do canvas para ele aparecer
                        window.dispatchEvent(new Event('resize'));
                        console.log('[Eclipse] Boot concluído.');
                    }, 200);
                } catch (e) {
                    console.error('[Eclipse] Erro fatal no main.js:', e);
                    document.getElementById('launcher-ui').style.display = 'flex';
                    alert("O main.js do jogo deu erro. Vê a consola (F12).");
                }
            })();
        `;
        
        document.body.appendChild(script);
    };
}

// Inicia
initializeLauncher();
