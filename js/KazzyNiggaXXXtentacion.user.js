// ==UserScript==
// @name         Eclipse - DIRECT LAUNCH (Síncrono)
// @version      1.9.0
// @description  Força o carregamento sequencial de Vendor e Main para evitar crash.
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

    // --- VARIÁVEIS DE CONFIGURAÇÃO (Definidas pelo último uso) ---
    const DEFAULT_NICKNAME = localStorage.nickname || "Eclipse Player";
    const DEFAULT_SKIN = localStorage.skinUrl || ""; 
    // -----------------------------------------------------------
    
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

    console.log('[Eclipse] A carregar ficheiros...');
    
    // 2. Fetch de todos os ficheiros necessários
    const [htmlContent, vendorJsContent, mainJsContent] = await Promise.all([
        fetchContent('index.html'),
        fetchContent('js/vendor.js'),
        fetchContent('js/main.js')
    ]);

    if (!htmlContent || !vendorJsContent || !mainJsContent) {
        return console.error('[Eclipse] Falha ao carregar um ou mais ficheiros essenciais. Abortando.');
    }
    
    // 3. Código de Inicialização que será anexado ao main.js
    const initializationCode = `
        // O jogo está ofuscado. A forma mais segura de definir o nick é injectar na variável cliente.
        try {
            if (window.client) {
                if (typeof window.client.setNickname === 'function') {
                    window.client.setNickname("${DEFAULT_NICKNAME}");
                } else {
                    window.client.nickname = "${DEFAULT_NICKNAME}";
                }
                window.client.skinUrl = "${DEFAULT_SKIN}";
            }
        } catch (e) {
            console.warn("[Eclipse] Falha ao definir nickname/skin. O jogo vai continuar.");
        }
        
        // Forçar a conexão/início para mostrar a UI.
        if (window.client && typeof window.client.connect === 'function') {
            window.client.connect(); 
        } else if (window.initGame) {
            window.initGame();
        } else if (window.startGame) {
            window.startGame();
        }
        console.log('[Eclipse] Inicialização forçada concluída com sucesso.');
    `;
    
    // 4. Injeção Síncrona do DOM
    document.open();
    document.write(htmlContent); // Injeta Canvas e HUD
    
    // Adiciona o script do VENDOR.JS
    document.write(`
        <script type="text/javascript" data-src-type="synced-vendor" nonce="${Math.random()}">
            ${vendorJsContent}
        </script>
    `);
    
    // Adiciona o script do MAIN.JS + Código de Inicialização
    document.write(`
        <script type="text/javascript" data-src-type="synced-main" nonce="${Math.random()}">
            ${mainJsContent + initializationCode}
        </script>
    `);

    document.close();
    console.log('[Eclipse] Injeção de jogo concluída de forma síncrona. O jogo deve iniciar agora.');
    
})();
