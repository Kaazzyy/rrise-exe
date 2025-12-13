// Este URL base DEVE ser o RAW URL do seu GitHub
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function hideLauncherUI() {
    // Esconde o div principal do launcher
    const launcherDiv = document.querySelector('.flex.items-center.justify-center.min-h-screen');
    if (launcherDiv) {
        launcherDiv.style.display = 'none';
        document.body.style.background = ''; // Remove o fundo escuro/radial
    }
}

async function injectScriptFromUrl(url) {
    // Função para buscar o script e injetá-lo no DOM
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
             console.error('Fetch failed for game file:', url, res.status, res.statusText);
             return false;
        }
        const text = await res.text();
        const s = document.createElement('script');
        s.type = 'text/javascript';
        // Adiciona sourceURL para facilitar o debug no console
        s.textContent = text + '\n//# sourceURL=' + url; 
        
        // --- MUDANÇA AQUI ---
        // Anexar ao BODY em vez do HEAD para garantir o timing de execução.
        document.body.appendChild(s); 
        // -------------------

        return true;
    } catch (e) {
        console.error('Injection error for', url, e);
        return false;
    }
}

// Lógica executada ao clicar no botão 'Play'
async function handlePlayClick() {
    console.log('[Eclipse] Play button clicked. Initiating game injection...');
    
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    const nick = (nickInput && nickInput.value) || "Player";
    const skin = (skinInput && skinInput.value) || "";
    
    // 1. Salvar nickname e skin
    localStorage.nickname = nick;
    localStorage.skinUrl = skin;
    
    // 2. Esconder a UI do launcher
    hideLauncherUI();
    
    // --- NOVO CÓDIGO DE LIMPEZA DO DOM ---
    console.log('[Eclipse] Cleaning up DOM and preparing canvas...');

    // Remove todos os filhos do BODY exceto scripts e outros elementos essenciais
    while (document.body.firstChild) {
        // Preserva o elemento que contém o script Tampermonkey se possível
        if (document.body.firstChild.tagName === 'SCRIPT' || document.body.firstChild.id === 'tm-root') { 
             document.body.removeChild(document.body.firstChild);
        } else {
             document.body.removeChild(document.body.firstChild);
        }
    }
    
    // Cria o elemento <canvas> que é essencial para o jogo
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.appendChild(canvas);
    
    // Aplica estilos básicos para a tela do jogo
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    // --- FIM NOVO CÓDIGO ---

    // 3. Injetar scripts do jogo (Sequencialmente)
    
    console.log('[Eclipse] Injecting vendor.js...');
    const vendorSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/vendor.js`); 
    
    console.log('[Eclipse] Injecting main.js...');
    const mainSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/main.js`);
    
    if (vendorSuccess && mainSuccess) {
        console.log('[Eclipse] Game scripts injected successfully. Attempting to force startup...');
        
        // Pequeno atraso para processamento
        await new Promise(resolve => setTimeout(resolve, 50)); 
        
        // Forçar inicialização (Mantendo o que funcionou melhor)
        document.dispatchEvent(new Event('DOMContentLoaded'));
        console.log('[Eclipse] Dispatched DOMContentLoaded event.');

    } else {
        console.error('[Eclipse] Failed to inject one or more game scripts. Check repository paths and 404 errors.');
    }
}

// Função principal de inicialização
function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) {
        console.error('Error: Play button (#playBtn) not found after injection.');
        return; 
    }

    // Carregar dados salvos
    if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
    
    // Anexar evento de clique
    playButton.addEventListener('click', handlePlayClick);

    console.log('[Eclipse] Event listener successfully attached to playBtn.');
}

// FIX DE TIMING: Usa setTimeout para garantir que o DOM esteja totalmente pronto após a injeção do HTML
setTimeout(initializeLauncher, 100);



