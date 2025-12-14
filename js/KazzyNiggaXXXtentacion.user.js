// ==UserScript==
// @name         Eclipse - FINAL FIX (Execução Diferida)
// @version      2.1.0
// @description  A solução mais estável para evitar o crash de sincronização do Vendor/Main.
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- BYPASS ADS (ESSENCIAL) ---
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} }; 
    window.AdInPlay = { isLoaded: true, started: true }; 
    window.isAdBlocked = false;
    window.adinplay = { create: () => {}, destroy: () => {}, isLoaded: true };
    // ---------------------------------

    // --- VARIÁVEIS DE CONFIGURAÇÃO ---
    const DEFAULT_NICKNAME = localStorage.nickname || "Eclipse Player";
    const DEFAULT_SKIN = localStorage.skinUrl || ""; 
    // ---------------------------------
    
    // 1. Parar o carregamento original
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
    
    // 2. Fetch de todos os ficheiros
    const [htmlContent, vendorJsContent, mainJsContent] = await Promise.all([
        fetchContent('index.html'), // Minimal HTML
        fetchContent('js/vendor.js'),
        fetchContent('js/main.js')
    ]);

    if (!htmlContent || !vendorJsContent || !mainJsContent) {
        return console.error('[Eclipse] Falha ao carregar ficheiros. Verifique os caminhos.');
    }
    
    // 3. Código de Inicialização (Forçar o Nick e o Connect)
    const initializationCode = `
        try {
            if (window.client) {
                if (typeof window.client.setNickname === 'function') {
                    window.client.setNickname("${DEFAULT_NICKNAME}");
                } else {
                    window.client.nickname = "${DEFAULT_NICKNAME}";
                }
                window.client.skinUrl = "${DEFAULT_SKIN}";
            }
        } catch (e) {}
        
        // Forçar a conexão/início para mostrar a UI.
        if (window.client && typeof window.client.connect === 'function') {
            window.client.connect(); 
        } else if (window.initGame) {
            window.initGame();
        } else if (window.startGame) {
            window.startGame();
        }
    `;
    
    // 4. Injeção Síncrona do DOM (HTML e Vendor)
    document.open();
    document.write(htmlContent); // Injeta Canvas e HUD

    // Injeta o VENDOR.JS
    document.write(`
        <script type="text/javascript" data-src-type="vendor-sync" nonce="${Math.random()}">
            ${vendorJsContent}
        </script>
    `);
    
    // 5. Injeta o MAIN.JS EMBRULHADO NA FUNÇÃO DEFERIDA
    // O main.js é colocado dentro de uma função anónima, que será chamada com um pequeno delay.
    document.write(`
        <script type="text/javascript" data-src-type="main-deferred" nonce="${Math.random()}">
            // A função contém o Main.js e o nosso código de inicialização
            function runMainGame() {
                ${mainJsContent}
                ${initializationCode}
            }

            // Chamamos a função Main.js com um pequeno delay. 
            // Isto permite que o navegador termine TUDO do Vendor.js antes de chamar o Main.
            setTimeout(runMainGame, 50); 
            console.log('[Eclipse] Main.js diferido. A aguardar 50ms...');
        </script>
    `);

    document.close();
    console.log('[Eclipse] Injeção de jogo concluída com execução diferida. O jogo deve iniciar agora.');
    
})();
