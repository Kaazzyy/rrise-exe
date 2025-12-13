// ==UserScript==
// @name         Eclipse
// @version      1.2.2
// @description  Inject custom UI and game files.
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // This is the base path for your raw files (index.html, play.js, vendor.js, main.js)
    const BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 
    
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

    async function injectScript(text, path) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + path;
        document.head.appendChild(s);
    }
    
    // 1. Overwrite the page content with your launcher's index.html
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        document.write(launcherHtml);
        document.close();
    }
    
    // 2. Inject the play.js script (which contains the new 'Play' logic)
    const playJsContent = await fetchContent('play.js');
    if (playJsContent) {
        await injectScript(playJsContent, `${BASE_URL}/play.js`);
    }
    
    // Set a global flag for the game logic (in main.js) to know the launcher is loaded
    window.LauncherMode = true;

})();
