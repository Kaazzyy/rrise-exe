// ==UserScript==
// @name         Eclipse
// @version      1.2.1
// @description  Inject only main.js from GitHub (no vendor.js at all)
// @match        *://aetlis.io/*
// @run-at       document-idle
// ==/UserScript==

(async () => {
    'use strict';

    const base = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    async function injectScriptFromUrl(url){
        try{
            const res = await fetch(url, {cache: "no-store"});
            if(!res.ok) return console.error('Fetch failed:', url, res.status);
            const text = await res.text();
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.textContent = text + '\n//# sourceURL=' + url;
            document.head.appendChild(s);
            console.log('Injected:', url);
        } catch (e) {
            console.error('Inject error for', url, e);
        }
    }

    if (document.readyState === 'loading') {
        await new Promise(res => document.addEventListener('DOMContentLoaded', res));
    }

    // ONLY this. No vendor.
    await injectScriptFromUrl(`${base}/js/main.js`);
})();
