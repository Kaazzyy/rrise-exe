// ==UserScript==
// @name         Eclipse
// @version      1.3.1
// @description  Inject custom UI and game files.
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // This is the base path for your raw files
    const BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 
    
    // --- Code for play.js (COPIED INLINE for robust injection) ---
    // The play.js logic is now contained within the Tampermonkey script for guaranteed execution timing.
    const PLAY_JS_LOGIC = `
        const GAME_MOD_BASE = '${BASE_URL.replace(/\/main$/, '')}/Eclipse/main'; 

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
                s.textContent = text + '\\n//# sourceURL=' + url;
                document.head.appendChild(s);
                return true;
            } catch (e) {
                console.error('Injection error for', url, e);
                return false;
            }
        }

        async function handlePlayClick() {
            console.log('Play button clicked. Initiating game injection...');
            
            const nickInput = document.getElementById("nickname");
            const skinInput = document.getElementById("skin");

            const nick = (nickInput && nickInput.value) || "Player";
            const skin = (skinInput && skinInput.value) || "";
            
            localStorage.nickname = nick;
            localStorage.skinUrl = skin;
            
            hideLauncherUI();
            
            // NOTE: Paths assume vendor.js and main.js are inside the /js/ folder
            const vendorSuccess = await injectScriptFromUrl(\`\${GAME_MOD_BASE}/js/vendor.js\`); 
            const mainSuccess = await injectScriptFromUrl(\`\${GAME_MOD_BASE}/js/main.js\`);
            
            if (vendorSuccess && mainSuccess) {
                console.log('Game scripts injected successfully. Game should start.');
            } else {
                console.error('Failed to inject one or more game scripts. Check network path.');
            }
        }


        // --- POLLING LOGIC ---
        let checkCount = 0;
        const maxChecks = 20; 

        function initializeLauncher() {
            const playButton = document.getElementById("playBtn");
            const nickInput = document.getElementById("nickname");
            const skinInput = document.getElementById("skin");

            if (playButton) {
                // Button found!
                if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
                if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
                
                playButton.addEventListener('click', handlePlayClick);
                console.log('Event listener successfully attached to playBtn.');
                
            } else if (checkCount < maxChecks) {
                checkCount++;
                setTimeout(initializeLauncher, 100);
            } else {
                console.error('Error: Play button (#playBtn) not found after multiple attempts. Launcher failed to initialize.');
            }
        }
        
        // Start the check loop
        initializeLauncher();
    `;
    // ------------------------------------------------------------------

    async function fetchContent(path) {
        try {
            const res = await fetch(`${BASE_URL}/${path}`);
            if (!res.ok) return console.error('Fetch failed for:', path, res.status);
            return await res.text();
        } catch (e) {
            console.error('Fetch error for', path, e);
            return null;
        }
    }

    // 1. Overwrite the page content with your launcher's index.html
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        // Append the play.js logic to the body of the index.html content
        const finalHtml = launcherHtml.replace('</body>', `<script type="text/javascript">${PLAY_JS_LOGIC}</script></body>`);
        document.write(finalHtml);
        document.close();
        console.log('Launcher UI and play logic injected.');
    } else {
        return console.error('Failed to load index.html. Aborting Tampermonkey script.');
    }
    
    window.LauncherMode = true; // Flag for main.js if needed
})();
