// ==UserScript==
// @name         Eclipse
// @version      1.3.4
// @description  Inject custom UI and game files.
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // Raw GitHub URL (used for fetching all file contents)
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    async function fetchContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}`);
            if (!res.ok) {
                console.error(`[Eclipse] Fetch failed for: ${path} ${res.status}. CHECK YOUR GITHUB PATH!`);
                return null;
            }
            return await res.text();
        } catch (e) {
            console.error('[Eclipse] Fetch error for', path, e);
            return null;
        }
    }

    function injectScriptText(text, path) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + path;
        document.body.appendChild(s); 
    }
    
    console.log('[Eclipse] Fetching Launcher UI...');

    // 1. Fetch the launcher HTML
    let launcherHtml = await fetchContent('index.html');
    if (!launcherHtml) {
        return console.error('[Eclipse] Failed to load index.html. Aborting.');
    }
    
    // 2. Overwrite the page content
    document.open();
    document.write(launcherHtml);
    document.close();
    console.log('[Eclipse] Launcher UI injected.');

    // 3. Fetch and inject play.js content directly
    const playJsContent = await fetchContent('play.js'); 
    
    if (playJsContent) {
        // Wait 20ms to let the browser process the new HTML/DOM structure
        setTimeout(() => {
             injectScriptText(playJsContent, `${RAW_BASE_URL}/play.js`);
             console.log('[Eclipse] play.js injected via forced execution.');
        }, 20);
    } else {
        console.error('[Eclipse] Failed to fetch play.js content. Check path/availability.');
    }
    
    window.LauncherMode = true;

})();
