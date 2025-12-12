// ==UserScript==
// @name         Eclipse
// @version      1.2
// @description  Safely inject vendor.js and main.js from GitHub without replacing the page document
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-end
// ==/UserScript==

(async () => {
    'use strict';
    const base = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    async function injectScriptFromUrl(url){
        try{
            const res = await fetch(url, {cache: "no-store"});
            if(!res.ok) {
                console.error('Fetch failed for', url, res.status, res.statusText);
                return false;
            }
            const text = await res.text();
            const s = document.createElement('script');
            s.type = 'text/javascript';
            // Add sourceURL so debugging shows the original URL in devtools
            s.textContent = text + '\n//# sourceURL=' + url;
            document.head.appendChild(s);
            console.log('Injected', url);
            return true;
        } catch (e) {
            console.error('Failed to inject', url, e);
            return false;
        }
    }

    if (document.readyState === 'loading') {
        await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
    }

    // Inject vendor first, then main (sequential to preserve order)
    await injectScriptFromUrl(`${base}/js/vendor.js`);
    await injectScriptFromUrl(`${base}/js/main.js`);

    // Optional: you can inject other assets similarly. Do NOT use document.open()/write().
})();
