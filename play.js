const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function log(msg, color = "#00ffff") {
    console.log(`%c[Eclipse-System] ${msg}`, `color: ${color}; font-weight: bold;`);
}

async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        return res.ok ? await res.text() : null;
    } catch (e) { return null; }
}

function init() {
    log("Launcher pronto. A aguardar inputs...");
    const btn = document.getElementById("playBtn");
    const nickInp = document.getElementById("nickname");
    const skinInp = document.getElementById("skin");

    if (!btn) return;

    // Ativa o botão imediatamente
    btn.disabled = false;
    btn.innerText = "Play Now";
    btn.style.opacity = "1";

    btn.addEventListener("click", async () => {
        const nick = nickInp.value || "EclipsePlayer";
        const skin = skinInp.value || "";
        
        log(`A preparar entrada para: ${nick}`);
        btn.innerText = "Injecting Engine...";
        btn.disabled = true;

        // 1. Gravar dados (Onde o jogo vai ler)
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);
        window.Eclipse_Nickname = nick; 

        // 2. Buscar o Main.js
        const mainCode = await fetchContent("main.js");
        if (!mainCode) {
            btn.innerText = "Error: main.js 404";
            return;
        }

        log("Main.js descarregado. A forçar arranque...");

        // 3. Injeção e Gatilho de Conexão
        const script = document.createElement('script');
        script.textContent = `
            try {
                // Injeta o código do jogo
                ${mainCode}
                
                console.log('[Eclipse] Motor injetado. A procurar função de connect...');

                // Tenta forçar a conexão de 100ms em 100ms até o jogo responder
                let attempts = 0;
                const forceStart = setInterval(() => {
                    attempts++;
                    
                    // Procura pelo cliente do jogo no objeto global
                    const game = window.client || window.game || window.Aetlis;
                    
                    if (game && (game.connect || game.init)) {
                        console.log('[Eclipse] Motor encontrado! A ligar ao servidor...');
                        if (game.connect) game.connect();
                        else if (game.init) game.init();
                        
                        // Esconde a UI para veres o jogo
                        document.getElementById('launcher-ui').style.display = 'none';
                        document.body.style.background = 'none';
                        
                        clearInterval(forceStart);
                    }

                    if (attempts > 50) { // Para de tentar após 5 segundos
                        clearInterval(forceStart);
                        console.log('[Eclipse] Timeout: O motor não respondeu ao comando connect.');
                    }
                }, 100);

            } catch(e) {
                console.error('[Eclipse] Erro na execução do main.js:', e);
            }
        `;
        document.body.appendChild(script);
    });
}

// Pequeno delay para garantir que o HTML está montado
setTimeout(init, 200);
