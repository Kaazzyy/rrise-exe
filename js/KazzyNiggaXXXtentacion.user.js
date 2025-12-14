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
    const TS = `?t=${Date.now()}`; // Anti-cache

    // --- 🚫 REMOÇÃO TOTAL DA DEPENDÊNCIA DE ADS E BYPASS DE DETEÇÃO ---
    
    // 1. Mocking Básico (para impedir crash do carregamento)
    // Se o jogo tentar chamar estas funções, elas não dão erro.
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} };
    window.aiptag.cmd.display = function() { console.log('[Eclipse] AdInPlay: Display mocked.'); };
    
    // 2. Variáveis de Detecção (Ataque à Segunda Linha de Defesa)
    // O jogo procura por estas variáveis. Forçamos a sua existência e estado 'ready'.
    window.AdInPlay = { isLoaded: true, started: true };
    window.aiptag.loaded = true;
    window.isAdBlocked = false; // Engana a verificação isAdBlocked
    window.adinplay = { 
        create: () => {}, 
        destroy: () => {}, 
        isLoaded: true,
        call: (method, ...args) => { console.log(`[Eclipse] AdInPlay method called: ${method}`); return true; }
    };
    // ------------------------------------------------------------------

    // Restante da lógica de carregamento (a que funcionou para mostrar o Launcher)
    
    // Ecrã de Loading Temporário
    document.documentElement.innerHTML = `
        <head>
            <title>Eclipse Loading...</title>
            <style>
                body { background-color: #000; color: #00ff00; font-family: monospace; padding: 20px; }
                .log { margin-bottom: 5px; }
            </style>
        </head>
        <body>
            <h1>Eclipse Launcher</h1>
            <div id="logs"></div>
            <script>
                window.log = function(msg) {
                    const div = document.createElement('div');
                    div.className = 'log';
                    div.innerText = '> ' + msg;
                    document.getElementById('logs').appendChild(div);
                }
            </script>
        </body>
    `;
    const log = (msg) => { console.log('[Eclipse]', msg); window.log(msg); };


    async function fetchContent(path) {
        try {
            const req = await fetch(`${RAW_BASE_URL}/${path}${TS}`);
            if (!req.ok) throw new Error(`Falha ${req.status}`);
            return await req.text();
        } catch (e) {
            log(`ERRO: Falha ao baixar ${path}. ${e.message}`);
            return null;
        }
    }
    
    try {
        log('A carregar ficheiros...');
        const [htmlContent, playJsContent] = await Promise.all([
            fetchContent('index.html'),
            fetchContent('play.js')
        ]);

        if (!htmlContent || !playJsContent) throw new Error("Recursos essenciais não carregados.");

        // 3. Reescrever a página completamente
        document.open();
        document.write(htmlContent);
        document.close();
        log('Launcher UI injetada.');

        // 4. Injetar a lógica do Launcher
        const script = document.createElement('script');
        script.textContent = playJsContent;
        document.body.appendChild(script);
        log('play.js injetado. A aguardar clique.');

    } catch (e) {
        log(`ERRO FATAL NO TAMPERMONKEY: ${e.message}`);
    }
})();
