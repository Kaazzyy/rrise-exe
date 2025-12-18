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
    log("A carregar sistema de lançamento...");
    const btn = document.getElementById("playBtn");
    const nickInp = document.getElementById("nickname");
    const skinInp = document.getElementById("skin");

    if (!btn) return log("ERRO: Botão não encontrado!", "#ff0000");

    // Ativa o botão
    btn.disabled = false;
    btn.innerText = "Play Now";
    btn.style.opacity = "1";

    btn.addEventListener("click", async () => {
        const nick = nickInp.value || "EclipsePlayer";
        const skin = skinInp.value || "";
        
        log(`A iniciar com Nick: ${nick}`);
        btn.innerText = "Connecting...";
        btn.disabled = true;

        // 1. Injetar dados no contexto global ANTES do main.js
        window.Eclipse_Nickname = nick;
        window.Eclipse_SkinUrl = skin;
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        // 2. Buscar o Main.js
        const mainCode = await fetchContent("main.js");
        if (!mainCode) return log("Erro ao baixar main.js", "#ff0000");

        log("Main.js carregado. A preparar motor...");

        // 3. Injeção Protegida
        const script = document.createElement('script');
        // Usamos um wrapper para garantir que o Webpack do vendor.js o aceite
        script.textContent = `
            try {
                ${mainCode}
                console.log('[Eclipse] Main.js executado.');
                
                // Função de arranque cíclico (tenta até conseguir)
                let attempts = 0;
                const bootInterval = setInterval(() => {
                    attempts++;
                    const gameClient = window.client || window.game || window.Aetlis;
                    
                    if (gameClient && (gameClient.connect || gameClient.init)) {
                        console.log('[Eclipse] Motor detetado! A ligar...');
                        if (gameClient.connect) gameClient.connect();
                        else if (gameClient.init) gameClient.init();
                        
                        clearInterval(bootInterval);
                        document.getElementById('launcher-ui').style.display = 'none';
                        document.body.style.background = 'none';
                    }
                    
                    if (attempts > 50) { // Desiste após 5 segundos
                        clearInterval(bootInterval);
                        console.error('[Eclipse] O motor de jogo não respondeu.');
                    }
                }, 100);
            } catch(e) {
                console.error('[Eclipse] Erro Crítico no Main.js:', e);
            }
        `;
        document.body.appendChild(script);
    });
}

// Pequeno delay para garantir que o index.html foi desenhado
setTimeout(init, 200);
