// play.js - Versão Force Spawn
function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const launcherUI = document.getElementById("launcher-ui");
    const wrapper = document.getElementById("eclipse-main-wrapper");

    if (!playButton) return setTimeout(initializeLauncher, 100);

    nickInput.value = localStorage.getItem('nickname') || "";

    playButton.onclick = () => {
        const nick = nickInput.value || "EclipsePlayer";
        localStorage.setItem('nickname', nick);

        log("A sincronizar e a entrar...");

        // 1. Tentar injetar o nick no objeto do jogo e dar Spawn
        if (window.client) {
            // Define o nick diretamente no motor
            if (window.client.settings) window.client.settings.nickname = nick;
            
            // Tenta conectar e dar spawn
            if (typeof window.client.connect === 'function') window.client.connect();
            
            // Dá um pequeno tempo para a conexão estabilizar e tenta dar spawn
            setTimeout(() => {
                if (typeof window.client.spawn === 'function') {
                    window.client.spawn(nick);
                    log("Comando Spawn enviado.");
                }
            }, 500);
        }

        // 2. Tentar preencher o input nativo caso o objeto falhe
        const nativeInput = document.querySelector('input[placeholder*="Nick"], #nickname:not(#eclipse-main-wrapper #nickname)');
        if (nativeInput) {
            nativeInput.value = nick;
            nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        // 3. Remover o Launcher (o wrapper que criamos no Tampermonkey)
        if (wrapper) {
            wrapper.style.transition = "opacity 0.5s";
            wrapper.style.opacity = "0";
            setTimeout(() => { wrapper.remove(); }, 500);
        }
        
        window.dispatchEvent(new Event('resize'));
    };
}

initializeLauncher();
