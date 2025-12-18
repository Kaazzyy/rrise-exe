const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function eclipseLog(msg, color = "#00ff00") {
    console.log(`%c[Eclipse-Debug] ${msg}`, `color: ${color}; font-weight: bold;`);
}

async function fetchContent(path) {
    const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
    return res.ok ? await res.text() : null;
}

function init() {
    eclipseLog("Lógica do Launcher iniciada.");
    const btn = document.getElementById("playBtn");
    
    if (!btn) {
        eclipseLog("ERRO: Não encontrei o botão 'playBtn'!", "#ff0000");
        return;
    }

    // Ativa o botão
    btn.disabled = false;
    btn.innerText = "Play Now";
    eclipseLog("Botão ativado. À espera do clique...");

    btn.addEventListener("click", async () => {
        eclipseLog("Botão clicado!");
        btn.innerText = "Downloading main.js...";
        btn.disabled = true;

        const mainCode = await fetchContent("main.js");
        if (!mainCode) {
            eclipseLog("ERRO: main.js veio vazio ou deu erro de rede.", "#ff0000");
            return;
        }

        eclipseLog("main.js descarregado. Tamanho: " + mainCode.length + " caracteres.");
        btn.innerText = "Injetando Motor...";

        // Esta é a parte onde costuma congelar. Vamos envolver em 'try/catch'
        try {
            const script = document.createElement('script');
            // Adicionamos um pequeno atraso e código de arranque forçado
            script.textContent = mainCode + `
                console.log('[Eclipse] Código do jogo injetado. A tentar arrancar...');
                setTimeout(() => {
                    if (window.client && window.client.connect) window.client.connect();
                    else if (window.initGame) window.initGame();
                    console.log('[Eclipse] Tentativa de boot enviada.');
                }, 500);
            `;
            document.body.appendChild(script);
            eclipseLog("Injeção concluída com sucesso!");
            
            // Esconde o launcher
            setTimeout(() => {
                document.getElementById('launcher-ui').style.display = 'none';
                document.body.style.background = 'none';
            }, 1000);

        } catch (err) {
            eclipseLog("CRASH na injeção: " + err.message, "#ff0000");
        }
    });
}

setTimeout(init, 500);
