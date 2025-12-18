const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/main.js';

function init() {
    const btn = document.getElementById("playBtn");
    const nickInp = document.getElementById("nickname");
    const skinInp = document.getElementById("skin");

    if (!btn) return;

    // Recupera dados salvos
    nickInp.value = localStorage.getItem('nickname') || "";
    skinInp.value = localStorage.getItem('skinUrl') || "";

    btn.onclick = async () => {
        const nick = nickInp.value || "Player";
        const skin = skinInp.value || "";
        
        // Salva para o jogo ler
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);
        
        btn.innerText = "STARTING...";
        btn.disabled = true;

        // Baixa o main.js
        const mainCode = await fetch(`${GITHUB_URL}?t=${Date.now()}`).then(r => r.text());

        // Injeta o código do jogo
        const script = document.createElement('script');
        script.textContent = `
            try {
                ${mainCode}
                console.log("[Eclipse] Motor iniciado!");
                // Esconde a interface
                setTimeout(() => {
                    document.getElementById('launcher-ui').style.display = 'none';
                    document.body.style.background = 'none';
                }, 800);
            } catch(e) {
                console.error("[Eclipse] Crash no Main:", e);
                alert("Erro no motor do jogo. Verifica a consola.");
            }
        `;
        document.body.appendChild(script);
    };
}

// Inicia
setTimeout(init, 500);
