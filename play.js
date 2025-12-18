const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

async function fetchContent(path) {
    const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`);
    return res.ok ? await res.text() : null;
}

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    if (!playButton) return setTimeout(initializeLauncher, 100);

    // Carregar Nick/Skin salvos
    document.getElementById("nickname").value = localStorage.getItem('nickname') || "";
    document.getElementById("skin").value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = async () => {
        const nick = document.getElementById("nickname").value || "EclipsePlayer";
        const skin = document.getElementById("skin").value || "";
        
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Bypassing Anti-Mod...";

        const mainJs = await fetchContent('main.js');
        if (!mainJs) return alert("Erro ao baixar main.js");

        // ESCONDER UI
        document.getElementById('launcher-ui').style.display = 'none';

        // CRIAR UM BLOB (Faz o script parecer um ficheiro real do site)
        const blob = new Blob([mainJs], { type: 'application/javascript' });
        const scriptUrl = URL.createObjectURL(blob);
        const script = document.createElement('script');
        script.src = scriptUrl;
        
        script.onload = () => {
            console.log('[Eclipse] Engine carregada via Blob.');
            setTimeout(() => {
                if (window.client && window.client.connect) {
                    window.client.connect();
                }
                window.dispatchEvent(new Event('resize'));
            }, 300);
        };

        document.head.appendChild(script);
    };
}
initializeLauncher();
