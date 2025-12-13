// ==UserScript==
// @name         Eclipse
// @version      1.3.5
// @description  Inject custom UI and game files.
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- BYPASS ADINPLAY (Essencial para não travar o carregamento) ---
    // Injetamos isto antes de qualquer script do jogo correr
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} };
    window.aiptag.display = function() { console.log('[Eclipse] Fake Ad Displayed'); };
    // ------------------------------------------------------------------

    async function fetchContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}`);
            if (!res.ok) return null;
            return await res.text();
        } catch (e) {
            console.error('[Eclipse] Fetch error', e);
            return null;
        }
    }

    function injectScriptText(text, path) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + path;
        document.body.appendChild(s); 
    }
    
    // 1. Parar o carregamento original do Aetlis para não haver conflito
    window.stop();
    
    console.log('[Eclipse] Fetching Launcher UI...');
    let launcherHtml = await fetchContent('index.html');
    
    if (launcherHtml) {
        // Substitui o HTML inteiro e garante que o fundo é preto para evitar flash branco
        document.open();
        document.write(launcherHtml);
        document.close();
        
        // 2. Injetar play.js depois da nova UI estar no sítio
        const playJsContent = await fetchContent('play.js'); 
        if (playJsContent) {
            injectScriptText(playJsContent, `${RAW_BASE_URL}/play.js`);
        }
    }

})();
