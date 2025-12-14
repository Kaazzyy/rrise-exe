(async () => {
    console.log("[Eclipse] Initializing Logic...");

    const REPO = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    const TS = `?t=${Date.now()}`; // Evita cache

    // Função auxiliar para injetar scripts
    function injectScript(content, id) {
        const s = document.createElement('script');
        s.textContent = content;
        s.id = id;
        document.body.appendChild(s);
    }

    async function loadScriptUrl(url) {
        const req = await fetch(url);
        return await req.text();
    }

    // 1. Carregar dependências (Vendor.js) imediatamente em background
    try {
        const vendorCode = await loadScriptUrl(`${REPO}/vendor.js${TS}`);
        injectScript(vendorCode, 'vendor-js');
        console.log("[Eclipse] Vendor loaded.");
    } catch (e) {
        console.error("[Eclipse] Failed to load vendor.js", e);
    }

    // 2. Configurar o Botão PLAY
    const playBtn = document.getElementById('playBtn');
    const nickInput = document.getElementById('nickname');
    const skinInput = document.getElementById('skin');
    const launcherUI = document.getElementById('launcher-ui'); // Certifica-te que no index.html a div principal tem id="launcher-ui"

    // Pré-carregar valores salvos anteriormente
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    playBtn.addEventListener('click', async () => {
        console.log("[Eclipse] Play clicked!");

        // A. Salvar Dados
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";

        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin); // O main.js usa 'skinUrl'

        // B. Esconder o Launcher e mostrar o Canvas
        if (launcherUI) launcherUI.style.display = 'none';
        document.body.style.background = '#000'; // Fundo preto para o jogo

        // C. Carregar o Jogo (main.js)
        try {
            playBtn.innerText = "Loading Game...";
            const mainCode = await loadScriptUrl(`${REPO}/main.js${TS}`);
            
            // Pequeno hack para garantir que o jogo lê o nick logo no início
            const patchCode = `
                window.EclipseNick = "${nick}";
                window.EclipseSkin = "${skin}";
                console.log("Injecting Main with", window.EclipseNick);
            `;
            
            injectScript(patchCode + mainCode, 'main-game-js');
        } catch (e) {
            console.error("[Eclipse] Failed to load main.js", e);
            alert("Error loading game files.");
            if (launcherUI) launcherUI.style.display = 'flex'; // Volta a mostrar se falhar
        }
    });

})();
