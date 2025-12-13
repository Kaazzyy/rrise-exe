// Este URL base DEVE ser o RAW URL do seu GitHub
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function hideLauncherUI() {
    // Esconde o div principal do launcher
    const launcherDiv = document.querySelector('.flex.items-center.justify-center.min-h-screen');
    if (launcherDiv) {
        launcherDiv.style.display = 'none';
        document.body.style.background = ''; // Remove o fundo
    }
}

async function injectScriptFromUrl(url) {
    // Função para buscar o script e injetá-lo no DOM
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
             console.error('[Eclipse] Fetch failed for game file:', url, res.status, res.statusText);
             return false;
        }
        const text = await res.text();
        const s = document.createElement('script');
        s.type = 'text/javascript';
        // Adiciona sourceURL para facilitar o debug no console
        s.textContent = text + '\n//# sourceURL=' + url; 
        
        // Injeção no HEAD (padrão para Webpack/Vendor scripts)
        document.head.appendChild(s); 
        
        return true;
    } catch (e) {
        console.error('[Eclipse] Injection error for', url, e);
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
    
    // 3. Limpeza Agressiva do DOM e Criação do Canvas
    console.log('[Eclipse] Cleaning up DOM and preparing canvas...');

    // Remove todos os filhos do BODY
    document.body.innerHTML = '';
    
    // Cria o elemento <canvas> que é essencial para o jogo
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.appendChild(canvas);
    
    // Aplica estilos básicos
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';

    // 4. Hook Webpack (Essencial para vendor.js)
    console.log('[Eclipse] Setting up Webpack hook...');
    if (!window.webpackJsonp) {
        window.webpackJsonp = window.webpackJsonp || [];
    }

    // 5. Injetar scripts do jogo (Assumindo que estão em /js/vendor.js e /js/main.js)
    console.log('[Eclipse] Injecting vendor.js...');
    const vendorSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/vendor.js`); 
    
    console.log('[Eclipse] Injecting main.js...');
    const mainSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/main.js`);
    
    if (vendorSuccess && mainSuccess) {
        console.log('[Eclipse] Game scripts injected successfully. Attempting to force startup...');
        
        // Pequeno atraso para o navegador processar os scripts gigantes
        await new Promise(resolve => setTimeout(resolve, 50)); 
        
        // Forçar inicialização (simular o final do carregamento)
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
setTimeout(initializeLauncher, 100);
