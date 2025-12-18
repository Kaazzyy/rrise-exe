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

    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = async () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Launching Engine...";

        const mainJs = await fetchContent('main.js');
        if (!mainJs) return alert("Erro: main.js não encontrado no GitHub!");

        // 1. ESCONDER UI E PREPARAR TELA
        launcherUI.style.display = 'none';
        document.body.style.background = "#000";

        // 2. INJEÇÃO ATÔMICA
        const script = document.createElement('script');
        script.textContent = `
            (function() {
                // Forçar o PIXI a ser global (essencial para o main.js do Vanis/Aetlis)
                if (window.PIXI) {
                    window.PIXI = window.PIXI;
                }

                // Injetar Nick e Skin diretamente onde o motor lê
                window.nickname = "${nick}";
                window.skinUrl = "${skin}";

                try {
                    console.log('[Eclipse] A executar main.js...');
                    ${mainJs}
                    
                    // Verificação de segurança após 500ms
                    setTimeout(() => {
                        console.log('[Eclipse] Verificando window.client...');
                        if (window.client) {
                            console.log('[Eclipse] Sucesso! window.client detetado.');
                            if (typeof window.client.connect === 'function') window.client.connect();
                        } else {
                            console.error('[Eclipse] ERRO: window.client continua undefined após execução.');
                            // Tentar forçar o init se o motor usar outro nome
                            if (typeof window.initGame === 'function') window.initGame();
                        }
                        window.dispatchEvent(new Event('resize'));
                    }, 500);

                } catch (e) {
                    console.error('[Eclipse] Erro crítico na execução do main.js:', e);
                }
            })();
        `;
        document.body.appendChild(script);
    };
}

initializeLauncher();
