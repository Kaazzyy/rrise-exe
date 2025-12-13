// Base URL for the game scripts (Must match the one in Tampermonkey script)
const GAME_MOD_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

function hideLauncherUI() {
    const launcherDiv = document.querySelector('.flex.items-center.justify-center.min-h-screen');
    
    if (launcherDiv) {
        // Hides the launcher container
        launcherDiv.style.display = 'none';
        
        // Remove custom background to let the game's background appear
        document.body.style.background = ''; 
    }
}

async function injectScriptFromUrl(url) {
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return console.error('Fetch failed:', url, res.status);
        const text = await res.text();
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + url;
        document.head.appendChild(s);
        return true;
    } catch (e) {
        console.error('Inject error for', url, e);
        return false;
    }
}

document.getElementById("playBtn").onclick = async function () {
    const nick = document.getElementById("nickname").value || "Player";
    const skin = document.getElementById("skin").value || "";
    
    // 1. Save nickname and skin to localStorage (the game will read this)
    localStorage.nickname = nick;
    localStorage.skinUrl = skin;
    
    // 2. Hide the launcher UI
    hideLauncherUI();
    
    // 3. Inject game scripts directly into the page to start the game
    // Based on the game structure, it usually needs vendor.js first, then main.js
    await injectScriptFromUrl(`${GAME_MOD_BASE}/js/vendor.js`); 
    await injectScriptFromUrl(`${GAME_MOD_BASE}/js/main.js`);
    
    // The main.js code should now take over and initialize the game on the current page.
};

// Loads previous data on launcher load
window.onload = function() {
    if(localStorage.nickname) document.getElementById("nickname").value = localStorage.nickname;
    if(localStorage.skinUrl) document.getElementById("skin").value = localStorage.skinUrl;
}
