// play.js - Versão para Injeção Nativa
function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    const launcherUI = document.getElementById("launcher-ui");

    if (!playButton) return setTimeout(initializeLauncher, 100);

    // Carregar o que está salvo
    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        // Salvar
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        log("A conectar ao jogo oficial...");

        // 1. Passar os dados para o jogo original
        // No Aetlis/Vanis original, os inputs têm IDs específicos
        const nativeNick = document.getElementById('nickname'); // id do jogo original
        if (nativeNick) {
            nativeNick.value = nick;
            nativeNick.dispatchEvent(new Event('input'));
        }

        // 2. Tentar conectar usando o objeto global do jogo
        if (window.client && typeof window.client.connect === 'function') {
            window.client.connect();
        }

        // 3. Esconder o teu Launcher
        launcherUI.style.transition = "opacity 0.5s";
        launcherUI.style.opacity = "0";
        setTimeout(() => {
            launcherUI.style.display = 'none';
            // Forçar o foco no canvas para poderes jogar
            const canvas = document.getElementById('canvas');
            if(canvas) canvas.focus();
        }, 500);
    };
}

initializeLauncher();
