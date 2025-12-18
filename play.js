const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

async function fetchContent(path) {
    const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
    return res.ok ? await res.text() : null;
}

async function start() {
    console.log("%c[Eclipse] Launcher Ativo", "color: cyan");
    const btn = document.getElementById("playBtn");
    if(!btn) return;

    btn.disabled = false;
    btn.addEventListener("click", async () => {
        btn.innerText = "CRITICAL BOOT...";
        
        // 1. Carrega o Main.js
        const code = await fetchContent("main.js");
        if(!code) { alert("Erro ao baixar main.js do GitHub!"); return; }

        console.log("[Eclipse] A injetar motor...");

        // 2. Injeção forçada com captura de erro absoluta
        const script = document.createElement('script');
        script.textContent = `
            (function() {
                try {
                    console.log('[Eclipse] Executando Main.js...');
                    ${code}
                    console.log('[Eclipse] Execução concluída sem crashes de sintaxe.');
                } catch (err) {
                    console.error('[Eclipse] ERRO CRÍTICO NO MOTOR:');
                    console.error(err.stack); // Isto vai mostrar a linha exata do erro
                    alert("CRASH: " + err.message);
                }
            })();
        `;
        document.body.appendChild(script);
    });
}

setTimeout(start, 500);
