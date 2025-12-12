// loader.js — standalone loader that can be included on a page for testing (does NOT replace document)
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

    await injectScriptFromUrl(`${base}/js/main.js`);
})();
