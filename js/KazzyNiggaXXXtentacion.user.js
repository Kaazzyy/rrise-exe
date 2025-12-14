// ==UserScript==
// @name         Eclipse Launcher Fix (No-Loop)
// @version      3.0
// @description  Carregamento seguro sem window.stop() para evitar loops
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';

    // 1. Em vez de parar o browser, limpamos o HTML imediatamente.
    // Isto impede o jogo original de carregar scripts sem cortar a net.
    document.documentElement.innerHTML = `
        <head>
            <title>Eclipse Loading...</title>
            <style>
                body { background-color: #000; color: #00ff00; font-family: monospace; padding: 20px; }
                .log { margin-bottom: 5px; }
                .error { color: #ff3333; font-weight: bold; }
            </style>
        </head>
        <body>
            <h1>Eclipse Launcher</h1>
            <div id="logs"></div>
            <script>
                window.log = function(msg, type='info') {
                    const div = document.createElement('div');
                    div.className = 'log ' + type;
                    div.innerText = '> ' + msg;
                    document.getElementById('logs').appendChild(div);
                }
            </script>
        </body>
    `;

    // Função de Log segura
    const log = (msg) => {
        console.log('[Eclipse]', msg);
        const logContainer = document.getElementById('logs');
        if(logContainer) {
            const div = document.createElement('div');
            div.innerText = `> ${msg}`;
            logContainer.appendChild(div);
        }
    };

    const REPO_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    const TS = `?t=${Date.now()}`; // Anti-cache

    // 2. Tentar baixar os ficheiros
    try {
        log('A conectar ao GitHub...');
        
        // Baixar Index e Play.js
        const [htmlReq, playReq] = await Promise.all([
            fetch(`${REPO_URL}/index.html${TS}`),
            fetch(`${REPO_URL}/play.js${TS}`)
        ]);

        if (!htmlReq.ok) throw new Error(`Erro HTML: ${htmlReq.status}`);
        if (!playReq.ok) throw new Error(`Erro JS: ${playReq.status}`);

        log('Ficheiros baixados. A processar...');
        
        const htmlContent = await htmlReq.text();
        const playJsContent = await playReq.text();

        // 3. Injetar o Launcher Limpo
        document.open();
        document.write(htmlContent);
        document.close();

        // 4. Injetar o Play.js
        const script = document.createElement('script');
        script.textContent = playJsContent;
        document.body.appendChild(script);

        console.log('[Eclipse] Sucesso.');

    } catch (e) {
        log('ERRO FATAL: ' + e.message);
        log('Verifica a tua internet ou se o GitHub está acessível.');
        document.body.innerHTML += `<h2 style="color:red">FALHA NO CARREGAMENTO</h2><p>${e.message}</p>`;
    }
})();
