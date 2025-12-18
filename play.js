// play.js - Versão Shadow DOM
function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

function initializeLauncher() {
    // Procurar dentro do Shadow Root que criamos no Tampermonkey
    const root = window.eclipseShadow;
    if (!root) return setTimeout(initializeLauncher, 100);

    const playButton = root.getElementById("playBtn");
    const nickInput = root.getElementById("nickname");
    const launcherUI = root.getElementById("launcher-ui");

    if (!playButton) return setTimeout(initializeLauncher, 100);

    nickInput.value = localStorage.getItem('nickname') || "";

    playButton.onclick = () => {
        const nick = nickInput.value || "EclipsePlayer";
        localStorage.setItem('nickname', nick);

        log("Comandando spawn via Shadow Bridge...");

        // Sincronização com o motor do jogo (que está fora do shadow)
        if (window.client) {
            if (window.client.settings) window.client.settings.nickname = nick;
            if (window.client.connect) window.client.connect();
            
            setTimeout(() => {
                if (window.client.spawn) window.client.spawn(nick);
            }, 500);
        }

        // Remover o host inteiro (limpa a tela)
        const host = document.getElementById("eclipse-shadow-host");
        if (host) {
            host.style.transition = "opacity 0.5s";
            host.style.opacity = "0";
            setTimeout(() => host.remove(), 500);
        }
        
        window.dispatchEvent(new Event('resize'));
    };
}

initializeLauncher();
