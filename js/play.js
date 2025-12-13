// BASE_URL MUST match the one in your Tampermonkey script
const GAME_MOD_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

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

// Function that handles the click logic
async function handlePlayClick() {
    console.log('Play button clicked. Initiating game injection...');
    
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    const nick = (nickInput && nickInput.value) || "Player";
    const skin = (skinInput && skinInput.value) || "";
    
    // 1. Save nickname and skin
    localStorage.nickname = nick;
    localStorage.skinUrl = skin;
    
    // 2. Hide the launcher UI
    hideLauncherUI();
    
    // 3. Inject game scripts
    // Ensure your paths are correct: /js/vendor.js and /js/main.js
    const vendorSuccess = await injectScriptFromUrl(`${GAME_MOD_BASE}/js/vendor.js`); 
    const mainSuccess = await injectScriptFromUrl(`${GAME_MOD_BASE}/js/main.js`);
    
    if (vendorSuccess && mainSuccess) {
        console.log('Game scripts injected successfully. Game should start.');
    } else {
        console.error('Failed to inject one or more game scripts. Check network path.');
    }
}


// --- POLLING TO ENSURE BUTTON IS FOUND ---

let checkCount = 0;
const maxChecks = 20; // Check for up to 2 seconds (100ms * 20)

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (playButton) {
        // Button found! Attach listener and load saved data.
        
        // Load previous data
        if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
        if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
        
        // Attach event
        playButton.addEventListener('click', handlePlayClick);
        console.log('Event listener successfully attached to playBtn.');
        
    } else if (checkCount < maxChecks) {
        // Button not found yet, try again
        checkCount++;
        setTimeout(initializeLauncher, 100);
    } else {
        // Failed to find button after max attempts
        console.error('Error: Play button (#playBtn) not found after multiple attempts. Launcher failed to initialize.');
    }
}

// Start the check loop
initializeLauncher();
