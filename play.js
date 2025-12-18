const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) throw new Error(`Erro ao baixar ${path}`);
        return await res.text();
    } catch (e) { return null; }
}

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    const launcherUI = document.getElementById("launcher-ui");

    // Sincronização da Skin e Nick logo ao abrir
    nickInput.value = localStorage.getItem('nickname') || "";
    skinInput.value = localStorage.getItem('skinUrl') || "";

    playButton.onclick = async () => {
        const nick = nickInput.value || "Eclipse Player";
        const skin = skinInput.value || "";

        // Salvar dados
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin);

        playButton.disabled = true;
        playButton.innerText = "Loading Engine...";

        // Baixar os dois ficheiros em paralelo para ser mais rápido
        const [vendorJs, mainJs] = await Promise.all([
            fetchContent('vendor.js'),
            fetchContent('main.js')
        ]);

        if (!vendorJs || !mainJs) {
            alert("Erro ao baixar ficheiros do GitHub. Verifica a tua net.");
            playButton.disabled = false;
            return;
        }

        playButton.innerText = "Starting...";

        // --- A SOLUÇÃO PARA O CRASH ---
        // Criamos um único script que contém o motor e a lógica
        const finalScript = document.createElement('script');
        finalScript.type = 'text/javascript';
        
        // Juntamos tudo: Vendor + Main + Comando de Start
        finalScript.textContent = `
            try {
                ${vendorJs}
                console.log('[Eclipse] Motor PIXI carregado.');
                
                ${mainJs}
                console.log('[Eclipse] Lógica main.js carregada.');

                // Forçar o início
                setTimeout(() => {
                    if (window.client && window.client.connect) window.client.connect();
                    
                    // Esconder UI e limpar background
                    const ui = document.getElementById('launcher-ui');
                    if(ui) ui.style.display = 'none';
                    document.body.style.background = '#000';
                    window.dispatchEvent(new Event('resize'));
                }, 100);
            } catch (err) {
                console.error('[Eclipse] Erro Crítico na Injeção:', err);
                alert("O jogo crashou durante a inicialização. Vê o Console (F12).");
            }
        `;

        // Injeta o bloco gigante de uma vez só
        document.head.appendChild(finalScript);
    };
}

if (document.readyState === 'complete') initializeLauncher();
else window.addEventListener('load', initializeLauncher);
