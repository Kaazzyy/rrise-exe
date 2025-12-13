// Base URL for the game scripts
const GAME_MOD_BASE = 'https://kaazzyy.github.io/Eclipse'; 
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// Bypass AdInPlay (Anti-ban de ads)
// Isto cria um objeto falso para o jogo achar que os anúncios carregaram
window.aiptag = window.aiptag || {};
window.aiptag.cmd = window.aiptag.cmd || [];
window.aiptag.cmd.display = function() { console.log('Eclipse: Ad blocked successfully.'); };
window.aiptag.cmd.player = window.aiptag.cmd.player || [];

function hideLauncherUI() {
    // Agora escondemos apenas o container do launcher, deixando o canvas visível
    const launcherDiv = document.getElementById('launcher-ui');
    if (launcherDiv) {
        launcherDiv.style.display = 'none';
        // Removemos o fundo do launcher para ver o jogo
        document.body.style.background = 'none'; 
    }
}

async function injectScriptFromUrl(url) {
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
             console.error('Fetch failed for game file:', url, res.status, res.statusText);
             return false;
        }
        const text = await res.text();
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + url;
        document.head.appendChild(s);
        return true;
    } catch (e) {
        console.error('Injection error for', url, e);
        return false;
    }
}

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) return; 

    // Load previous data
    if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
    
    playButton.addEventListener('click', async function () {
        console.log('Play button clicked. Initiating game injection...');
        
        const nick = (nickInput && nickInput.value) || "Player";
        const skin = (skinInput && skinInput.value) || "";
        
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        // 1. Esconder o Launcher
        hideLauncherUI();
        
        // 2. Injetar o Vendor primeiro (bibliotecas)
        const vendorSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/vendor.js`); 
        
        // 3. Pequeno delay para garantir que o PIXI carregou antes do main.js
        if (vendorSuccess) {
            setTimeout(async () => {
                await injectScriptFromUrl(`${RAW_BASE_URL}/js/main.js`);
                console.log('Game scripts injected.');
            }, 100);
        } else {
            console.error('Failed to inject vendor.js');
        }
    });
}

// Inicia o listener se o DOM já estiver pronto, ou espera
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLauncher);
} else {
    initializeLauncher();
}
