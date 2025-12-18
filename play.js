// play.js - Versão "Bridge" (Ponte entre Eclipse e Aetlis)
function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    const launcherUI = document.getElementById("launcher-ui");

    if (!playButton) return setTimeout(initializeLauncher, 100);

    // 1. Puxar dados salvos
    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        log("A sincronizar com o motor nativo...");

        // 2. Preencher o formulário ESCONDIDO do jogo original
        // O Aetlis usa IDs como #nickname e #skinUrl ou classes específicas
        const nativeNick = document.querySelector('input[placeholder*="Nick"], #nickname');
        const nativeSkin = document.querySelector('input[placeholder*="Skin"], #skinUrl');
        
        if (nativeNick) {
            nativeNick.value = nick;
            nativeNick.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (nativeSkin) {
            nativeSkin.value = skin;
            nativeSkin.dispatchEvent(new Event('input', { bubbles: true }));
        }

        // 3. Simular o clique no botão "Play" original para disparar o WebSocket
        // Procuramos pelo botão original que geralmente tem a classe 'btn-play'
        const nativePlayBtn = document.querySelector('.btn-play, button[type="submit"], #play-btn');
        if (nativePlayBtn) {
            nativePlayBtn.click();
        } else if (window.client && window.client.connect) {
            window.client.connect();
        }

        // 4. Limpar a tela e remover o Launcher
        launcherUI.style.transition = "all 0.4s ease";
        launcherUI.style.opacity = "0";
        launcherUI.style.transform = "scale(0.9)";
        
        setTimeout(() => {
            launcherUI.style.display = 'none';
            // Forçar o foco no canvas para o teclado funcionar (WASD/Espaço)
            const canvas = document.getElementById('canvas');
            if (canvas) {
                canvas.focus();
                window.dispatchEvent(new Event('resize'));
            }
            log("Jogo iniciado.");
        }, 400);
    };
}

initializeLauncher();
