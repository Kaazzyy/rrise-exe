const MAIN_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/main.js';

function init() {
    const btn = document.getElementById("playBtn");
    if (!btn) return;

    btn.onclick = async () => {
        const nick = document.getElementById("nickname").value || "Player";
        const skin = document.getElementById("skin").value || "";

        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);
        
        btn.innerText = "INJECTING...";
        btn.disabled = true;

        try {
            const response = await fetch(`${MAIN_URL}?t=${Date.now()}`);
            const code = await response.text();

            // Injeção via Blob: Isola a execução do motor pesado
            const blob = new Blob([code], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            const script = document.createElement('script');
            script.src = url;
            
            script.onload = () => {
                console.log("[Eclipse] Motor Main carregado!");
                setTimeout(() => {
                    const ui = document.getElementById('launcher-wrapper');
                    if (ui) ui.style.display = 'none';
                    document.body.style.background = 'none';
                }, 1500);
            };

            document.head.appendChild(script);
        } catch (e) {
            console.error("[Eclipse] Falha na injeção:", e);
            btn.disabled = false;
        }
    };
}

setTimeout(init, 300);
