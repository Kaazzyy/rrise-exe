// ==UserScript==
// @name         Eclipse
// @version      1.3.0
// @description  Inject custom UI and game files.
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // This is the base path for your raw files
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

    // Function to inject script content after the document is closed
    function injectScriptText(text, path) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + path;
        // Append to the BODY (or HEAD) of the new document
        document.body.appendChild(s); 
    }
    
    console.log('Fetching Launcher UI...');

    // 1. Overwrite the page content with your launcher's index.html
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        document.write(launcherHtml);
        document.close();
        console.log('Launcher UI injected and document closed.');
    } else {
        return console.error('Failed to load index.html. Aborting Tampermonkey script.');
    }
    
    // 2. Inject the play.js script
    // We fetch it and then use the dedicated function to append it to the body.
    const playJsContent = await fetchContent('play.js');
    if (playJsContent) {
        injectScriptText(playJsContent, `${BASE_URL}/play.js`);
        console.log('play.js injected.');
    }
    
    window.LauncherMode = true; // Flag for main.js if needed

})();
