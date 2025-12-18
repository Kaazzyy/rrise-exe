const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) throw new Error(`Erro ao baixar ${path}`);
        return await res.text();
    } catch (e) { 
        console.error(e);
        return null; 
    }
}

function initializeLauncher() {
    log("Launcher pronto.");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    const launcherUI = document.getElementById("launcher-ui");

    // Sincronizar UI com o que está salvo
    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.addEventListener("click", async () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        // Guardar para a próxima sessão
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Downloading Engine...";

        // --- CARREGAMENTO SEQUENCIAL (Para evitar o Crash) ---
        
        // 1. Baixar Vendor (Motor Gráfico)
        const vendorJs = await fetchContent('vendor.js');
        if (!vendorJs) return alert("Falha ao carregar vendor.js");

        // 2. Baixar Main (Lógica do Jogo)
        const mainJs = await fetchContent('main.js');
        if (!mainJs) return alert("Falha ao carregar main.js");

        playButton.innerText = "Starting Game...";

        // 3. Injeção em Ordem
        const inject = (code, name) => {
            const s = document.createElement('script');
            s.textContent = code + `\n//# sourceURL=${RAW_BASE_URL}/${name}`;
            document.head.appendChild(s);
        };

        // Injetar Vendor primeiro
        inject(vendorJs, 'vendor.js');
        
        // Pequena pausa para o browser processar o motor gráfico
        setTimeout(() => {
            // Injetar Main + Lógica de Start
            const boot = `
                console.log('[Eclipse] Inicializando...');
                if (window.client && window.client.connect) {
                    window.client.connect();
                }
                setTimeout(() => {
                    const ui = document.getElementById('launcher-ui');
                    if(ui) ui.style.display = 'none';
                    window.dispatchEvent(new Event('resize'));
                }, 500);
            `;
            inject(mainJs + boot, 'main.js');
        }, 100);
    });
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'complete') initializeLauncher();
else window.addEventListener('load', initializeLauncher);
