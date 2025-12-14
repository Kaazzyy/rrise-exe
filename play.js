(async () => {
    console.log("[Eclipse] Logic Started");
    
    const REPO = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    const TS = `?t=${Date.now()}`;

    // Helper para injetar script e ESPERAR que ele carregue
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    // Helper para injetar texto direto (para o main.js)
    function injectCode(code) {
        const s = document.createElement('script');
        s.textContent = code;
        document.body.appendChild(s);
    }

    const playBtn = document.getElementById('playBtn');
    const nickInput = document.getElementById('nickname');
    const skinInput = document.getElementById('skin');
    const launcherUI = document.getElementById('launcher-ui');

    // 1. Bloquear botão enquanto carrega dependências
    if(playBtn) {
        playBtn.disabled = true;
        playBtn.innerText = "Loading System...";
        playBtn.style.opacity = "0.5";
        playBtn.style.cursor = "not-allowed";
    }

    // Carregar configurações salvas
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    try {
        // 2. Carregar Vendor.js (Obrigatório antes de jogar)
        console.log("[Eclipse] Loading Vendor...");
        // Usamos loadScript com SRC direto para garantir que o browser faz o parse correto
        // Nota: O GitHub serve o vendor.js com o Content-Type correto geralmente.
        // Se falhar por MIME type, teremos de usar fetch+text.
        
        // Vamos usar fetch+text para ser mais seguro contra bloqueios de MIME do GitHub Pages
        const vendorRes = await fetch(`${REPO}/vendor.js${TS}`);
        const vendorCode = await vendorRes.text();
        injectCode(vendorCode);
        
        console.log("[Eclipse] Vendor Loaded.");

        // 3. Libertar o botão Play
        if(playBtn) {
            playBtn.disabled = false;
            playBtn.innerText = "Play Now";
            playBtn.style.opacity = "1";
            playBtn.style.cursor = "pointer";
        }

    } catch (e) {
        console.error(e);
        if(playBtn) playBtn.innerText = "Error Loading Vendor";
        alert("Erro ao carregar ficheiros base. Verifica a consola (F12).");
    }

    // 4. Evento de Clique
    playBtn.addEventListener('click', async () => {
        // Guardar dados
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        // UI
        playBtn.innerText = "Injecting Game...";
        
        try {
            // Buscar main.js
            const mainRes = await fetch(`${REPO}/main.js${TS}`);
            const mainCode = await mainRes.text();

            // Esconder Launcher
            if (launcherUI) launcherUI.style.display = 'none';
            document.body.style.background = '#000';

            // Patch para forçar Nickname
            // Injetamos as variáveis globais antes do jogo arrancar
            const patch = `
                window.EclipseNick = "${nick}";
                window.EclipseSkin = "${skin}";
                // Sobrescrever funções de input se necessário
                console.log("Starting Game with: " + window.EclipseNick);
            `;

            injectCode(patch + mainCode);

        } catch (e) {
            console.error(e);
            alert("Erro ao iniciar o jogo.");
            if (launcherUI) launcherUI.style.display = 'flex';
            playBtn.innerText = "Play Now";
        }
    });
})();
