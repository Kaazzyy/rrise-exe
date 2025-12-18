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
    log("A verificar elementos do Launcher...");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton || !nickInput) {
        // Se o document.write ainda não terminou, tentamos de novo em 50ms
        setTimeout(initializeLauncher, 50);
        return;
    }

    // --- CORREÇÃO DA SKIN E NICK ---
    // Isto garante que ao abrir o launcher, os dados aparecem lá
    const savedNick = localStorage.getItem('nickname') || localStorage.getItem('eclipse_nick');
    const savedSkin = localStorage.getItem('skinUrl') || localStorage.getItem('eclipse_skin');
    
    if (savedNick) nickInput.value = savedNick;
    if (savedSkin) skinInput.value = savedSkin;
    // -------------------------------

    playButton.onclick = async () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        // Salva para a próxima vez
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Loading main.js...";

        // O Vendor.js já foi injetado pelo Tampermonkey, agora só falta o main.js
        const mainJs = await fetchContent('main.js');

        if (!mainJs) {
            alert("Erro ao baixar main.js do GitHub!");
            playButton.disabled = false;
            return;
        }

        // Injetar Main.js e Iniciar o Jogo
        const script = document.createElement('script');
        script.textContent = mainJs + `
            \n//# sourceURL=${RAW_BASE_URL}/main.js
            setTimeout(() => {
                if (window.client && window.client.connect) window.client.connect();
                
                // Esconde o UI do Launcher
                const ui = document.getElementById('launcher-ui');
                if(ui) ui.style.display = 'none';
                
                // Garante que o canvas ocupa o ecrã todo
                window.dispatchEvent(new Event('resize'));
            }, 100);
        `;
        document.body.appendChild(script);
        
        playButton.innerText = "Enjoy!";
    };
}

// Inicia a verificação
initializeLauncher();
