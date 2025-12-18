// play.js - Solução de Estabilidade e Hooks
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function log(msg) { console.log('%c[Eclipse-Play]', 'color: #00ffff; font-weight: bold;', msg); }

// Busca o conteúdo dos ficheiros
async function fetchContent(path) {
    try {
        // Adiciona timestamp para evitar cache antiga do GitHub
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) return null;
        return await res.text();
    } catch (e) { return null; }
}

function initializeLauncher() {
    log("Launcher a iniciar...");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    const launcherUI = document.getElementById("launcher-ui");

    if (!playButton || !nickInput) {
        log("ERRO: Elementos do DOM não encontrados.");
        return; 
    }

    // 1. Restaurar dados salvos (se existirem)
    if (localStorage.getItem('eclipse_nick')) nickInput.value = localStorage.getItem('eclipse_nick');
    if (localStorage.getItem('eclipse_skin')) skinInput.value = localStorage.getItem('eclipse_skin');

    // 2. Ativar botão
    playButton.disabled = false;
    playButton.innerText = "Play Now";
    
    playButton.addEventListener("click", async () => {
        const userNick = nickInput.value || "Eclipse User";
        const userSkin = skinInput.value || "";

        // Salvar para a próxima vez (usamos chaves próprias para não conflitar com o jogo ainda)
        localStorage.setItem('eclipse_nick', userNick);
        localStorage.setItem('eclipse_skin', userSkin);

        // Feedback Visual
        playButton.disabled = true;
        playButton.innerText = "Downloading Engine...";
        playButton.style.cursor = "wait";

        // 3. Baixar o main.js ANTES de mexer na tela
        // NOTA: Tenta baixar de 'js/main.js' primeiro (estrutura padrão), fallback para raiz
        let mainJsContent = await fetchContent('js/main.js');
        if (!mainJsContent) mainJsContent = await fetchContent('main.js');

        if (!mainJsContent) {
            alert("Erro: Falha ao baixar main.js do GitHub.");
            playButton.innerText = "Download Failed";
            playButton.disabled = false;
            return;
        }

        playButton.innerText = "Injecting...";

        // 4. HOOKS DE SISTEMA (A Magia acontece aqui)
        // Intercetamos o localStorage para garantir que o jogo recebe o nick,
        // independentemente de quando ele o pede.
        const originalGetItem = Storage.prototype.getItem;
        Storage.prototype.getItem = function(key) {
            if (key === 'nickname') return userNick;
            if (key === 'skinUrl') return userSkin;
            return originalGetItem.apply(this, arguments);
        };
        
        // Também forçamos a escrita direta para garantir
        localStorage.setItem('nickname', userNick);
        localStorage.setItem('skinUrl', userSkin);

        // 5. Preparar o Ambiente e Esconder UI
        // Esconder a UI ANTES de injetar evita crash de GPU/Canvas
        launcherUI.style.transition = "opacity 0.5s";
        launcherUI.style.opacity = "0";
        setTimeout(() => { launcherUI.style.display = 'none'; }, 500);

        log("A injetar main.js...");

        // 6. Injeção Segura
        const script = document.createElement('script');
        script.type = 'text/javascript';
        // Adiciona um pequeno delay no código injetado para dar tempo ao DOM de respirar
        script.textContent = mainJsContent + `
            \n//# sourceURL=eclipse_main.js
            console.log('[Eclipse] Engine Injetada.');
            
            // Força o navegador a disparar eventos de carregamento caso o jogo dependa deles
            setTimeout(() => {
                window.dispatchEvent(new Event('load'));
                window.dispatchEvent(new Event('DOMContentLoaded'));
                
                // Tenta iniciar conexão se o objeto client existir
                if (window.client && window.client.connect) {
                    console.log('[Eclipse] A conectar manualmente via window.client...');
                    window.client.connect();
                }
            }, 100);
        `;
        
        document.body.appendChild(script);
    });
}

// Inicia a lógica
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLauncher);
} else {
    initializeLauncher();
}
