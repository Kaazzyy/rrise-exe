// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// Timestamp para evitar cache
const TS = `?t=${Date.now()}`;

// Função para injetar o código de forma segura, garantindo que o browser o executa
function injectScriptText(text, sourceUrl, target = 'head') {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
    // Usamos o document.body para garantir que é injetado depois de todo o HTML
    document.body.appendChild(s); 
}

// Função para buscar o conteúdo
async function fetchContent(path) {
    try {
        const res = await fetch(`${RAW_BASE_URL}/${path}${TS}`); 
        if (!res.ok) {
             console.error(`[Eclipse] Falha no fetch de ${path}: ${res.status}`);
             return null;
        }
        return await res.text();
    } catch (e) {
        console.error(`[Eclipse] Erro de rede ao buscar ${path}:`, e);
        return null;
    }
}

// --- Lógica Principal do Launcher ---
async function initializeLauncher() {
    console.log("[Eclipse] Launcher Logic Initializing...");

    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");
    const launcherUI = document.getElementById('launcher-ui');

    if (!playButton || !nickInput || !skinInput) {
        console.error("[Eclipse] Falha ao encontrar elementos do Launcher (IDs: playBtn, nickname, skin). Verifique o index.html.");
        return; 
    }

    // 1. Configurar o estado inicial do botão
    playButton.disabled = true;
    playButton.innerText = "Loading Game Files...";
    playButton.style.opacity = "0.5";
    
    // Carregar dados salvos
    if (localStorage.getItem('nickname')) nickInput.value = localStorage.getItem('nickname');
    if (localStorage.getItem('skinUrl')) skinInput.value = localStorage.getItem('skinUrl');

    // 2. Carregar o VENDOR.JS (Bibliotecas/Dependências)
    console.log("[Eclipse] Fetching vendor.js...");
    const vendorJsContent = await fetchContent('vendor.js');
    if (!vendorJsContent) {
        playButton.innerText = "ERROR: Failed to load Vendor.js";
        return;
    }
    injectScriptText(vendorJsContent, `${RAW_BASE_URL}/vendor.js`);
    console.log("[Eclipse] Vendor.js injected.");

    // 3. Carregar o MAIN.JS (O Jogo)
    console.log("[Eclipse] Fetching main.js...");
    const mainJsContent = await fetchContent('main.js');
    if (!mainJsContent) {
        playButton.innerText = "ERROR: Failed to load Main.js";
        return;
    }
    
    // 4. Ativar o Botão
    playButton.disabled = false;
    playButton.innerText = "Play Now";
    playButton.style.opacity = "1";
    playButton.style.cursor = "pointer";
    console.log("[Eclipse] System Ready. Waiting for Play.");
    

    // 5. Evento de Clique
    playButton.addEventListener('click', () => {
        playButton.disabled = true;
        playButton.innerText = "Starting Game...";
        
        // A. Salvar Dados
        const nick = nickInput.value || "Eclipse User";
        const skin = skinInput.value || "";
        localStorage.setItem('nickname', nick);
        localStorage.setItem('skinUrl', skin); 

        // B. Código de Inicialização Agressiva
        // Este código é o que garante que o Nickname e Skin são vistos pelo jogo.
        const initializationCode = `
            // 1. Garante que as variáveis globais são setadas antes de qualquer função de login
            window.Eclipse_Nickname = "${nick}";
            window.Eclipse_SkinUrl = "${skin}";

            // 2. Tenta forçar a função que o main.js usa para obter o Nickname/Skin
            // (Baseado na tua estrutura de código do main.js, que lê o localStorage)
            
            // 3. Tenta iniciar o jogo após um pequeno atraso
            setTimeout(() => {
                if (window.client && typeof window.client.connect === 'function') {
                    // Chamada típica para iniciar a UI do jogo/conexão
                    window.client.connect(); 
                } else if (typeof window.initGame === 'function') {
                    window.initGame();
                } else if (typeof window.startGame === 'function') {
                    window.startGame();
                }
                
                // Força o set do Nickname/Skin
                if (window.client && typeof window.client.setNickname === 'function') {
                     window.client.setNickname(window.Eclipse_Nickname);
                }
                if (window.client && typeof window.client.setSkin === 'function') {
                     window.client.setSkin(window.Eclipse_SkinUrl);
                }
                
                // Esconde o Launcher
                const launcher = document.getElementById('launcher-ui');
                if(launcher) launcher.style.display = 'none';
                document.body.style.background = '#000'; // Fundo preto para o jogo
                
            }, 100); 
        `;

        // C. Injeta o MAIN.JS + Código de Inicialização
        injectScriptText(mainJsContent + initializationCode, `${RAW_BASE_URL}/main.js`);
        console.log('[Eclipse] Jogo injetado. A tentar iniciar...');
    });
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLauncher);
} else {
    // Se o DOM já estiver pronto (graças ao Tampermonkey @run-at document-start)
    // Usamos um pequeno timeout para garantir que todos os elementos foram desenhados.
    setTimeout(initializeLauncher, 50);
}
