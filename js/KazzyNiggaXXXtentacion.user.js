// ==UserScript==
// @name         Eclipse - AdFree Launcher
// @version      1.4.0
// @description  Aetlis.io Custom Launcher (No Ads + Fix White Screen)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 REMOÇÃO TOTAL DE ANÚNCIOS (AdInPlay Bypass) ---
    // Criamos um objeto falso. Quando o jogo tenta mostrar um anúncio,
    // ele chama estas funções vazias e continua a funcionar sem travar.
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.display = function() { console.log('[Eclipse] Anúncio removido/bloqueado.'); };
    window.aiptag.cmd.player = window.aiptag.cmd.player || [];
    
    // Bloqueia também o objeto 'adinplay' se existir
    window.adinplay = {
        create: () => {},
        destroy: () => {}
    };
    // -------------------------------------------------------

    // Função para parar o carregamento original do site imediatamente
    window.stop();

    async function fetchContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); // Timestamp para evitar cache
            if (!res.ok) return null;
            return await res.text();
        } catch (e) {
            console.error('[Eclipse] Erro ao baixar:', path, e);
            return null;
        }
    }

    function injectScriptText(text, sourceUrl) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
        document.body.appendChild(s); 
    }
    
    console.log('[Eclipse] A carregar Interface...');
    
    // 1. Baixar o HTML do Launcher
    let launcherHtml = await fetchContent('index.html');
    
    if (launcherHtml) {
        // Substitui o HTML da página
        document.open();
        document.write(launcherHtml);
        document.close();
        
        // 2. Baixar e injetar o play.js (lógica do botão)
        const playJsContent = await fetchContent('play.js'); 
        if (playJsContent) {
            injectScriptText(playJsContent, `${RAW_BASE_URL}/play.js`);
        }
    }

})();
