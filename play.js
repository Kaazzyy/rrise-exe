const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// 1. Função de Log para sabermos onde para
function debug(msg) { console.log('%c[Eclipse-Fix]', 'color: #ff9900; font-weight: bold;', msg); }

async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        return res.ok ? await res.text() : null;
    } catch (e) { return null; }
}

function init() {
    debug("Launcher iniciado.");
    const btn = document.getElementById("playBtn");
    const nickInp = document.getElementById("nickname");
    const skinInp = document.getElementById("skin");

    if (!btn) return debug("Erro: Botão não encontrado!");

    // Recupera o que estava escrito antes do crash
    if (localStorage.getItem('nickname')) nickInp.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInp.value = localStorage.getItem('skinUrl');

    btn.disabled = false;
    btn.innerText = "Play Now";

    btn.addEventListener("click", async () => {
        const nick = nickInp.value || "EclipsePlayer";
        const skin = skinInp.value || "";
        
        // --- PASSO CRÍTICO: Guardar ANTES de injetar ---
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);
        debug("Dados guardados. A baixar motor...");

        btn.innerText = "Downloading...";
        btn.disabled = true;

        const mainCode = await fetchContent("main.js");
        if (!mainCode) {
            btn.innerText = "Error: main.js 404";
            return;
        }

        debug("Motor baixado. A injetar com proteção...");

        // --- INJEÇÃO PROTEGIDA (O SEGREDO PARA NÃO CRASHAR) ---
        const script = document.createElement('script');
        script.textContent = `
            try {
                // Forçamos o Nick no objeto global antes do jogo carregar
                window.nickname = "${nick}";
                window.skinUrl = "${skin}";

                ${mainCode}
                
                console.log('[Eclipse] Motor injetado com sucesso.');

                // Tenta esconder o launcher após o jogo carregar
                setTimeout(() => {
                    const ui = document.getElementById('launcher-ui');
                    if(ui) ui.style.display = 'none';
                    document.body.style.background = 'none';
                }, 500);

            } catch (err) {
                console.error('[Eclipse] O Motor (main.js) crashou:', err);
                alert("O jogo crashou ao iniciar. Vê a consola (F12) para o erro.");
            }
        `;
        document.body.appendChild(script);
    });
}

// Pequeno delay para o DOM respirar
setTimeout(init, 300);
