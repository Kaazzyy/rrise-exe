// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// --- FUNÇÕES AUXILIARES ---

// Função que injeta o código de forma segura (para o main.js com código extra)
function injectScriptText(text, sourceUrl, target = 'body') {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    document[target].appendChild(s); 
}

// Função para buscar o conteúdo (usada apenas para main.js)
async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
        if (!res.ok) return null;
        return await res.text();
    } catch (e) {
        return null;
    }
}

function hideLauncherUI() {
    // Esconde o container do launcher
    const launcherDiv = document.getElementById('launcher-ui'); 
    if (launcherDiv) launcherDiv.style.display = 'none';
    document.body.style.background = 'none'; 
}


// --- Lógica Principal do Launcher ---
function initializeLauncher() {
    console.log("[Eclipse] play.js: Initializing Launcher UI...");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton || !nickInput || !skinInput) {
         // Isto não deve acontecer se o Tampermonkey injetou o HTML corretamente
         console.error("[Eclipse] Elementos UI não encontrados. Aborting play.js.");
         return; 
    }

    // Carregar dados salvos
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    // 1. ATIVAR O BOTÃO IMEDIATAMENTE (Vendor.js já está carregado)
    playButton.disabled = false;
    playButton.innerText = "Play Now";
    playButton.style.opacity = "1";
    playButton.style.cursor = "pointer";
    console.log("[Eclipse] System Ready. Button Active.");
    

    // 2. Evento de Clique
    playButton.addEventListener('click', async () => {
        playButton.disabled = true;
        playButton.innerText = "Starting Game...";
        
        // A. Salvar Dados
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin); 

        // B. Carregar o MAIN.JS
        const mainJsContent = await fetchContent('main.js');
        
        if (!mainJsContent) {
            console.error('[Eclipse] Falha ao carregar main.js. O jogo não pode começar.');
            playButton.innerText = "ERROR: Main.js Failed";
            document.getElementById('launcher-ui').style.display = 'flex';
            return;
        }

        // C. Código de Inicialização Agressiva
        const initializationCode = `
            // 1. Patching de Nickname e Skin antes de o main.js ser executado (se não for imediato)
            localStorage.setItem('nickname', "${nick}");
            localStorage.setItem('skinUrl', "${skin}");
            
            // 2. Tenta forçar o início do jogo (depois de um curto delay para o main.js correr)
            setTimeout(() => {
                if (window.client && typeof window.client.connect === 'function') {
                    window.client.connect(); 
                } else if (typeof window.initGame === 'function') {
                    window.initGame();
                } else if (typeof window.startGame === 'function') {
                    window.startGame();
                }
                
                // 3. Força o Nickname/Skin no objeto do jogo (se existir)
                if (window.client && typeof window.client.setNickname === 'function') {
                     window.client.setNickname("${nick}");
                }
                
                // 4. Limpeza final
                hideLauncherUI();
                
            }, 100); 
        `;

        // D. Injeta o MAIN.JS + Código de Inicialização
        injectScriptText(mainJsContent + initializationCode, `${RAW_BASE_URL}/main.js`);
        console.log('[Eclipse] Jogo injetado e inicialização forçada.');
    });
}

// O Tampermonkey injetou o HTML, pelo que o DOM já tem os elementos.
// Chamamos o inicializador diretamente.
setTimeout(initializeLauncher, 10);
