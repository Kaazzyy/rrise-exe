// Base URL for the game scripts
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// --- 🚫 REFORÇO DE REMOÇÃO DE ANÚNCIOS ---
// Garante que o bypass está ativo antes de injetar o jogo
window.aiptag = window.aiptag || {};
window.aiptag.cmd = window.aiptag.cmd || [];
window.aiptag.cmd.display = function() { }; 

async function injectScriptFromUrl(url) {
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return false;
        const text = await res.text();
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + url;
        document.head.appendChild(s);
        return true;
    } catch (e) {
        console.error('Injection error', e);
        return false;
    }
}

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) return; 

    // Carregar dados salvos
    if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
    
    playButton.addEventListener('click', async function () {
        const nick = (nickInput && nickInput.value) || "Player";
        const skin = (skinInput && skinInput.value) || "";
        
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        // 1. Esconder o Launcher e revelar o jogo
        const launcherDiv = document.getElementById('launcher-ui');
        if (launcherDiv) launcherDiv.style.display = 'none';
        document.body.style.background = 'none'; // Remove o fundo preto
        
        // 2. Injetar o Vendor (Bibliotecas)
        const vendorSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/vendor.js`); 
        
        if (vendorSuccess) {
            // 3. Injetar o Main (Jogo) com um pequeno delay
            setTimeout(async () => {
                await injectScriptFromUrl(`${RAW_BASE_URL}/js/main.js`);
                console.log('Eclipse: Jogo injetado sem anúncios.');
            }, 100);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLauncher);
} else {
    initializeLauncher();
}
