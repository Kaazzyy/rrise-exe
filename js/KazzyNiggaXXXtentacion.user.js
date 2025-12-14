// ==UserScript==
// @name         Eclipse - FINAL FIX (AdBlock Bypass)
// @version      1.6.0
// @description  Aetlis.io Custom Launcher (Neutraliza AdBlock Detection e Fixa o Start)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 REMOÇÃO TOTAL DA DEPENDÊNCIA DE ADS E BYPASS DE DETEÇÃO ---
    
    // 1. Mocking Básico (para impedir crash do carregamento)
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} };
    window.aiptag.cmd.display = function() { console.log('[Eclipse] AdInPlay: Display mocked.'); };
    
    // 2. Variáveis de Detecção (Ataque à Segunda Linha de Defesa)
    // Se o jogo detetar 'AdBlock', é porque procura uma destas variáveis e ela está indefinida.
    // Declaramos a maioria como 'true' para indicar que o "setup" foi concluído com sucesso.
    window.AdInPlay = { isLoaded: true, started: true };
    window.aiptag.loaded = true;
    window.isAdBlocked = false; // Engana a verificação isAdBlocked

    // A variável 'adinplay' é a mais comum para travar: forçamos a sua existência.
    window.adinplay = { 
        create: () => {}, 
        destroy: () => {}, 
        isLoaded: true,
        // Garante que o método de 'connect' ou 'start' que o jogo usa corre
        call: (method, ...args) => { console.log(`[Eclipse] AdInPlay method called: ${method}`); return true; }
    };
    // ------------------------------------------------------------------

    // ... (restante do código: fetchContent, injectScriptText, window.stop(), etc. 
    // MANTÉM o código do Passo 1 da resposta anterior) ...
    
    // Se usares o código da minha resposta anterior (Passo 1), apenas precisas de garantir que 
    // este bloco de bypass de ads está no topo, antes de 'window.stop()'.
    
})();
