const RAW_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/main.js';

function startLauncher() {
    const btn = document.getElementById("playBtn");
    if (!btn) return;

    btn.onclick = async () => {
        const nick = document.getElementById("nickname").value || "Player";
        const skin = document.getElementById("skin").value || "";

        // Guarda os dados exatamente onde o vendor/main esperam
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);
        
        btn.innerText = "STARTING ENGINE...";
        btn.disabled = true;

        try {
            const mainCode = await fetch(`${RAW_URL}?t=${Date.now()}`).then(r => r.text());
            
            const script = document.createElement('script');
            script.textContent = `
                (function() {
                    try {
                        // O teu vendor.js usa webpack, isto ajuda a estabilizar
                        window.nickname = "${nick}";
                        window.skinUrl = "${skin}";
                        
                        ${mainCode}
                        
                        console.log("[Eclipse] Main Engine Running");
                        setTimeout(() => {
                            const ui = document.getElementById('launcher-ui');
                            if(ui) ui.style.display = 'none';
                        }, 1000);
                    } catch(e) {
                        console.error("[Eclipse] Erro no Main:", e);
                    }
                })();
            `;
            document.body.appendChild(script);
        } catch (err) {
            btn.innerText = "DOWNLOAD ERROR";
            console.error(err);
        }
    };
}

setTimeout(startLauncher, 500);
