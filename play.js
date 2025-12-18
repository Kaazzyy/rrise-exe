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

    // Sincronização automática (já confirmaste que funciona)
    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = async () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Bypassing Assets...";

        const mainJs = await fetchContent('main.js');
        if (!mainJs) return alert("Erro ao baixar main.js!");

        // ESCONDER UI IMEDIATAMENTE
        launcherUI.style.display = 'none';
        document.body.style.background = "#000";

        const script = document.createElement('script');
        script.textContent = `
            (function() {
                // --- BYPASS DE ERROS DE ASSETS ---
                // Se o jogo tentar carregar um som/imagem que dê 404, não deixa crashar
                window.addEventListener('error', function(e) {
                    if (e.target.tagName === 'IMG' || e.target.tagName === 'AUDIO') {
                        console.warn('[Eclipse] Asset ignorado para evitar crash:', e.target.src);
                        e.preventDefault();
                    }
                }, true);

                try {
                    // Garantir que o nickname está onde o main.js espera
                    window.nickname = "${nick}";
                    window.skinUrl = "${skin}";
                    
                    ${mainJs}

                    setTimeout(() => {
                        console.log('[Eclipse] Verificando sanidade do motor...');
                        
                        // Tenta forçar o renderizador se a tela estiver preta
                        if (window.PIXI && window.PIXI.utils) {
                             window.dispatchEvent(new Event('resize'));
                        }

                        if (window.client && typeof window.client.connect === 'function') {
                            window.client.connect();
                        }
                    }, 500);

                } catch (e) {
                    console.error('[Eclipse] Erro no Boot:', e);
                }
            })();
        `;
        document.body.appendChild(script);
    };
}

initializeLauncher();
