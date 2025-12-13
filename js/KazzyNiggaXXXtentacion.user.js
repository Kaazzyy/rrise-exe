// ==UserScript==
// @name         Eclipse
// @version      1.3.2
// @description  Inject custom UI and game files from GitHub Pages.
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // Public URL for accessing files on GitHub Pages (used for play.js script tag)
    const BASE_URL_PUBLIC = 'https://kaazzyy.github.io/Eclipse'; 
    
    // Raw GitHub URL (used for fetching index.html content)
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    async function fetchContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}`);
            if (!res.ok) return console.error('Fetch failed for:', path, res.status);
            return await res.text();
        } catch (e) {
            console.error('Fetch error for', path, e);
            return null;
        }
    }

    console.log('[Eclipse] Fetching Launcher UI...');

    // 1. Fetch the launcher HTML
    let launcherHtml = await fetchContent('index.html');
    if (!launcherHtml) {
        return console.error('[Eclipse] Failed to load index.html. Aborting.');
    }
    
    // 2. Inject the play.js script tag directly into the HTML
    // We use BASE_URL_PUBLIC because the browser executes this tag.
    // Adding a cachebuster (?v=...) to ensure the latest play.js is fetched.
    const playScriptTag = `<script src="${BASE_URL_PUBLIC}/play.js?v=${Date.now()}"></script>`;
    
    // Find the closing </body> tag and insert the script just before it
    // Note: The index.html provided has a closing </body> tag.
    launcherHtml = launcherHtml.replace('</body>', `${playScriptTag}\n</body>`);

    // 3. Overwrite the page content
    document.open();
    document.write(launcherHtml);
    document.close();
    console.log('[Eclipse] Launcher UI injected. Waiting for play.js to load...');

    window.LauncherMode = true;

})();
