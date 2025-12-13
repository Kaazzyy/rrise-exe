// BASE_URL MUST match the one in your Tampermonkey script
const GAME_MOD_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function hideLauncherUI() {
    const launcherDiv = document.querySelector('.flex.items-center.justify-center.min-h-screen');
    if (launcherDiv) {
        // Hides the launcher container
        launcherDiv.style.display = 'none';
        // Removes custom background
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
        // Adds a sourceURL for easier debugging in the browser console
        s.textContent = text + '\n//# sourceURL=' + url;
        document.head.appendChild(s);
        return true;
    } catch (e) {
        console.error('Injection error for', url, e);
        return false;
    }
}

// --- INITIALIZATION ---

// 1. Load previous data immediately
const nickInput = document.getElementById("nickname");
const skinInput = document.getElementById("skin");

if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;


// 2. Attach the click handler
const playButton = document.getElementById("playBtn");

if (playButton) {
    
    playButton.addEventListener('click', async function () {
        console.log('Play button clicked. Initiating game injection...');
        
        const nick = (nickInput && nickInput.value) || "Player";
        const skin = (skinInput && skinInput.value) || "";
        
        // Save nickname and skin
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        // Hide the launcher UI
        hideLauncherUI();
        
        // Inject game scripts
        // ENSURE YOUR PATHS ARE CORRECT: /js/vendor.js and /js/main.js
        const vendorSuccess = await injectScriptFromUrl(`${GAME_MOD_BASE}/js/vendor.js`); 
        const mainSuccess = await injectScriptFromUrl(`${GAME_MOD_BASE}/js/main.js`);
        
        if (vendorSuccess && mainSuccess) {
            console.log('Game scripts injected successfully. Game should start.');
        } else {
            console.error('Failed to inject one or more game scripts. Check network path.');
        }
    });

} else {
    // If you see this error, your Tampermonkey script failed to inject index.html correctly.
    console.error('Error: Play button (#playBtn) not found in the DOM.');
}
