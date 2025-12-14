// ==UserScript==
// @name         Eclipse - Launcher Fix
// @version      1.7.0
// @description  Aetlis.io Custom Launcher (Final Fix UI/Launcher)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // URL base para os ficheiros no GitHub
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 REMOÇÃO TOTAL DA DEPENDÊNCIA DE ADS (MOCKING) ---
    // Isto tem que ser feito antes de qualquer código do jogo correr.
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} }; 
    window.aiptag.cmd.display = function() { console.log('[Eclipse] AdInPlay mocked.'); };
    window.AdInPlay = { isLoaded: true, started: true }; // Bypass de verificação de adblock
    window.isAdBlocked = false;
    window.adinplay = { create: () => {}, destroy: () => {}, isLoaded: true };
    // --------------------------------------------------------

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
        // Injetar no body para garantir que o script play.js vê o botão 'playBtn' no DOM.
        document.body.appendChild(s); 
    }
    
    // 2. Injetar o HTML (index.html, que contém o Launcher, Canvas e HUD)
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        document.write(launcherHtml); // Substitui a página inteira
        document.close();
        console.log('[Eclipse] Launcher UI injected.');
    } else {
        return console.error('[Eclipse] Falha ao carregar index.html. Abortando.');
    }
    
    // 3. Injetar o play.js (Lógica do botão 'Play')
    // O play.js agora será o único responsável por injetar vendor.js e main.js APENAS ao clicar em "Play".
    const playJsContent = await fetchContent('play.js'); 
    if (playJsContent) {
        // Usamos um pequeno timeout para dar tempo ao DOM de processar o novo HTML
        setTimeout(() => {
             injectScriptText(playJsContent, `${RAW_BASE_URL}/play.js`, 'body');
             console.log('[Eclipse] play.js injetado. Aguardando clique...');
        }, 50);
    } else {
        console.error('[Eclipse] Falha ao carregar play.js. O botão Play não funcionará.');
    }
    
})();
