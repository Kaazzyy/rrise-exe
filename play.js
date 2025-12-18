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

    // Carregar dados salvos
    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = async () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Cleaning environment...";

        // Baixar o main.js
        const mainJs = await fetchContent('main.js');
        if (!mainJs) return alert("Erro: main.js não encontrado!");

        // --- BYPASS DE SEGURANÇA ---
        // Esconder UI e forçar fundo preto
        launcherUI.style.display = 'none';
        document.body.style.background = "#000";

        const script = document.createElement('script');
        script.textContent = `
            (function() {
                // 1. Injetar configurações onde o main.js espera (Vanis/Aetlis padrão)
                window.nickname = "${nick}";
                window.skinUrl = "${skin}";
                
                // 2. Mock de funções de ads para evitar crash
                window.aiptag = { cmd: { push: (f) => f() }, loaded: true };
                
                try {
                    console.log('[Eclipse] A disparar motor principal...');
                    
                    // Executa o main.js
                    ${mainJs}

                    // 3. Verificação forçada de conexão
                    let attempts = 0;
                    const checkClient = setInterval(() => {
                        attempts++;
                        if (window.client && typeof window.client.connect === 'function') {
                            console.log('[Eclipse] Client encontrado! Conectando...');
                            window.client.connect();
                            clearInterval(checkClient);
                        } 
                        if (attempts > 20) {
                            console.warn('[Eclipse] Client não subiu automaticamente. Tentando forçar init...');
                            if (window.initGame) window.initGame();
                            clearInterval(checkClient);
                        }
                    }, 200);

                } catch (err) {
                    console.error('[Eclipse] Crash no main.js:', err);
                }
                
                window.dispatchEvent(new Event('resize'));
            })();
        `;
        document.body.appendChild(script);
    };
}

initializeLauncher();
