// Base URL for the game scripts (Must be the public link for play.js)
const GAME_MOD_BASE = 'https://kaazzyy.github.io/Eclipse'; 

// ... (functions hideLauncherUI, injectScriptFromUrl omitted for brevity, use the ones from my last response) ...

// Function to attach listener and load saved data
function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) {
        console.error('Error: Play button (#playBtn) not found in the DOM.');
        // Exit if not found
        return; 
    }

    // Load previous data (Nick e Skin)
    if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
    
    // Attach event
    playButton.addEventListener('click', async function () {
        console.log('Play button clicked. Initiating game injection...');
        
        // ... (resto da lógica de save/hide/inject) ...

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

// Attach to DOMContentLoaded to ensure the HTML is parsed before looking for #playBtn
document.addEventListener('DOMContentLoaded', initializeLauncher);
