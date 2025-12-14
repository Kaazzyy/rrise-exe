// ==UserScript==
// @name         Eclipse - Launcher FINAL FIX
// @version      1.7.1
// @description  Aetlis.io Custom Launcher (Força a renderização do Launcher antes da lógica)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 BYPASS ADS (ESSENCIAL) ---
    // Mocks para enganar o anti-adblock
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} }; 
    window.AdInPlay = { isLoaded: true, started: true }; 
    window.isAdBlocked = false;
    window.adinplay = { create: () => {}, destroy: () => {}, isLoaded: true };
    // ---------------------------------

    // Funções auxiliares
    async function fetchContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
            return res.ok ? await res.text() : null;
        } catch (e) {
            return null;
        }
    }

    // Função para injetar o script como TEXTO (para garantir a sourceURL)
    function injectScriptText(text, sourceUrl, target = 'head') {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
        document[target].appendChild(s); 
    }
    
    // 1. Parar o carregamento original
    window.stop();
    
    // 2. Injetar o HTML (index.html, que contém o Launcher)
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        document.write(launcherHtml); // Substitui a página inteira
        document.close();
        console.log('[Eclipse] Launcher UI injetado no DOM.');
    } else {
        return console.error('[Eclipse] Falha ao carregar index.html. Abortando.');
    }
    
    // 3. Injetar o play.js (Lógica do botão 'Play')
    const playJsContent = await fetchContent('play.js'); 
    
    if (playJsContent) {
        // FORÇA O NAVEGADOR A PROCESSAR O NOVO DOM
        // Usamos requestAnimationFrame + setTimeout(0) para garantir que o navegador
        // terminou de renderizar o HTML antes de injetar a lógica.
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                 injectScriptText(playJsContent, `${RAW_BASE_URL}/play.js`, 'body');
                 console.log('[Eclipse] play.js injetado. Launcher deve aparecer.');
            }, 0);
        });
    } else {
        console.error('[Eclipse] Falha ao carregar play.js. O botão Play não funcionará.');
    }
    
})();
