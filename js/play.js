// Base URL for the game scripts (Must be the public link for play.js)
const GAME_MOD_BASE = 'https://kaazzyy.github.io/Eclipse'; 

function hideLauncherUI() {
    const launcherDiv = document.querySelector('.flex.items-center.justify-center.min-h-screen');
    if (launcherDiv) {
        launcherDiv.style.display = 'none';
        document.body.style.background = ''; 
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

// Function to attach listener and load saved data
function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) {
        console.error('Error: Play button (#playBtn) not found in the DOM.');
        return;
    }

    // Load previous data
    if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
    
    // Attach event
    playButton.addEventListener('click', async function () {
        console.log('Play button clicked. Initiating game injection...');
        
        const nick = (nickInput && nickInput.value) || "Player";
        const skin = (skinInput && skinInput.value) || "";
        
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        hideLauncherUI();
        
        // Use RAW GitHub links for the scripts since they contain code
        const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 
        
        // Inject game scripts
        const vendorSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/vendor.js`); 
        const mainSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/main.js`);
        
        if (vendorSuccess && mainSuccess) {
            console.log('Game scripts injected successfully. Game should start.');
        } else {
            console.error('Failed to inject one or more game scripts.');
        }
    });

    console.log('Event listener successfully attached to playBtn.');
}

// Wait for the DOMContentLoaded event of the new document
document.addEventListener('DOMContentLoaded', initializeLauncher);
