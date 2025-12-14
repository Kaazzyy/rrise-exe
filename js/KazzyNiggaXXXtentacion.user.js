// ==UserScript==
// @name         Eclipse - Ad-Free Final Fix
// @version      1.5.1
// @description  Aetlis.io Custom Launcher (REMOÇÃO TOTAL DE ADS + Fix Sincronização)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // URL base para os ficheiros no GitHub
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 REMOÇÃO TOTAL DA DEPENDÊNCIA DE ADS (AdInPlay Hijack) ---
    // Criamos as variáveis globais que o jogo espera ver, mas com funções vazias.
    // O jogo chama estas funções e continua, em vez de travar à espera da resposta do servidor de anúncios.
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} }; // Executa push imediatamente e silencia erros
    window.aiptag.cmd.display = function() { console.log('[Eclipse] AdInPlay: Display mocked.'); };
    window.aiptag.display = function() { console.log('[Eclipse] AdInPlay: Display mocked (Alt).'); };
    
    // Também cobrimos outras variáveis que o jogo possa procurar (embora menos comuns)
    window.adinplay = { create: () => {}, destroy: () => {}, isLoaded: true };
    // ------------------------------------------------------------------

    // 1. Parar o carregamento original do Aetlis (Essencial para não haver conflitos)
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
        document[target].appendChild(s); 
    }
    
    // 2. Injetar o HTML (index.html)
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        document.write(launcherHtml); // Substitui a página inteira
        document.close();
    } else {
        return console.error('[Eclipse] Falha ao carregar index.html. Abortando.');
    }
    
    // 3. Injetar o VENDOR.JS (Bibliotecas base como PIXI.js, etc.)
    // Isto deve carregar antes do main.js para resolver a maioria dos problemas de sincronização.
    const vendorJsContent = await fetchContent('js/vendor.js');
    if (vendorJsContent) {
        injectScriptText(vendorJsContent, `${RAW_BASE_URL}/js/vendor.js`);
    } else {
         return console.error('[Eclipse] Falha ao carregar vendor.js. O jogo não vai arrancar.');
    }
    
    // 4. Injetar o play.js (Lógica do botão 'Play'). Injetamos no body/head.
    const playJsContent = await fetchContent('play.js'); 
    if (playJsContent) {
        injectScriptText(playJsContent, `${RAW_BASE_URL}/play.js`, 'body');
    }
    
})();
