// ==UserScript==
// @name         Eclipse
// @version      1.2.3
// @description  Injects the main.js
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-idle
// ==/UserScript==

(async () => {
    'use strict';

    const base = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    const mainJsUrl = `${base}/js/main.js`;

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

    await injectScriptFromUrl(mainJsUrl);

    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const skinUrl = urlParams.get('skin');

    if (username || skinUrl) {
        console.log('Launcher data detected. Attempting to inject into UI...');


        function setInputValue(selector, value) {
            const input = document.querySelector(selector);
            if (input && value) {
                input.value = value;

                input.dispatchEvent(new Event('input', { bubbles: true }));
                input.dispatchEvent(new Event('change', { bubbles: true }));
                console.log(`Value injected into ${selector}: ${value}`);
                return true;
            }
            return false;
        }

        setTimeout(() => {
            setInputValue('#nickname', username);
            setInputValue('#skin', skinUrl);
        }, 1000);
    }

})();
