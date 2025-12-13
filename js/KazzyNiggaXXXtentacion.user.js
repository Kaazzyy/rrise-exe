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
    // NOTE: This must be the public link to your files (e.g., GitHub Pages)
    // We are changing to use the public pages link for better performance/caching
    const BASE_URL_PUBLIC = 'https://kaazzyy.github.io/Eclipse'; 
    
    async function fetchContent(path) {
        // Fetch raw content from GitHub
        const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}`);
            if (!res.ok) return console.error('Fetch failed for:', path, res.status);
            return await res.text();
        } catch (e) {
            console.error('Fetch error for', path, e);
            return null;
        }
    }

    console.log('Fetching Launcher UI...');

    // 1. Fetch the launcher HTML
    let launcherHtml = await fetchContent('index.html');
    if (!launcherHtml) {
        return console.error('Failed to load index.html. Aborting Tampermonkey script.');
    }
    
    // 2. Inject the play.js script tag directly into the HTML
    // This allows the browser to handle the loading and execution timing.
    const playScriptTag = `<script src="${BASE_URL_PUBLIC}/play.js?v=${Date.now()}"></script>`;
    
    // Find the closing </body> tag and insert the script just before it
    launcherHtml = launcherHtml.replace('</body>', `${playScriptTag}\n</body>`);

    // 3. Overwrite the page content
    document.open();
    document.write(launcherHtml);
    document.close();
    console.log('Launcher UI injected with play.js script tag.');

    window.LauncherMode = true;

})();
