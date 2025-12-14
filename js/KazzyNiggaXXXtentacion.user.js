// ==UserScript==
// @name         Eclipse - Voltar à Estabilidade (Sem Crash)
// @version      1.9.9
// @description  Aetlis.io Custom Launcher (Bypass Ads, Injeção Estável)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // URL base para os ficheiros no GitHub
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 BYPASS ADS (Essencial para não dar crash e remover a mensagem de AdBlock) ---
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} };
    window.AdInPlay = { isLoaded: true, started: true }; 
    window.isAdBlocked = false;
    window.adinplay = { create: () => {}, destroy: () => {}, isLoaded: true };
    // -----------------------------------------------------------------------------------

    // 1. Parar o carregamento original do Aetlis
    window.stop();

    // Funções auxiliares
    async function fetchContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
            return res.ok ? await res.text() : null;
        } catch (e) {
            return null;
        }
    }

    function injectScriptText(text, sourceUrl, target = 'head') {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
        // Injetamos no body para garantir que a lógica do play.js corre após o HTML.
        document.body.appendChild(s); 
    }
    
    // 2. Injetar o HTML (index.html, com o Launcher)
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        document.write(launcherHtml); // Substitui a página inteira
        document.close();
    } else {
        return console.error('[Eclipse] Falha ao carregar index.html. Abortando.');
    }
    
    // 3. Injetar o play.js (Lógica do botão 'Play')
    const playJsContent = await fetchContent('play.js'); 
    if (playJsContent) {
        // Pequeno timeout para o navegador processar o DOM (melhora a chance do Launcher aparecer)
        setTimeout(() => {
             injectScriptText(playJsContent, `${RAW_BASE_URL}/play.js`);
             console.log('[Eclipse] play.js injetado. Jogo pronto a iniciar.');
        }, 50);
    }
    
})();
