// ==UserScript==
// @name         Eclipse - DIRECT LAUNCH (Nativo)
// @version      2.0.0
// @description  Utiliza SRC nativo para sincronização estável, eliminando o problema de "text text"
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    // ATENÇÃO: Se os teus ficheiros js/vendor.js e js/main.js estão apenas no
    // GitHub RAW, esta solução não funcionará. Presumimos que estão acessíveis 
    // publicamente via GitHub Pages no caminho /js/vendor.js e /js/main.js.
    const PUBLIC_BASE_URL = 'https://kaazzyy.github.io/Eclipse'; 
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; // Mantido para o HTML

    // --- BYPASS ADS (ESSENCIAL) ---
    // Mocks para enganar o anti-adblock
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

    // Função para buscar o HTML (apenas o HTML)
    async function fetchHtmlContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`); 
            return res.ok ? await res.text() : null;
        } catch (e) {
            return null;
        }
    }
    
    // 2. Fetch do HTML (index.html, minimal)
    const htmlContent = await fetchHtmlContent('index.html');
    
    if (!htmlContent) {
        return console.error('[Eclipse] Falha ao carregar index.html. Abortando.');
    }
    
    // 3. Código de Inicialização que será executado após o main.js
    const initializationCode = `
        // O código é injectado numa função de callback, não na global
        (function() {
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
        })();
    `;
    
    // 4. Injeção Síncrona do DOM (HTML + Scripts com SRC)
    document.open();
    document.write(htmlContent); // Injeta Canvas e HUD

    // --- INJEÇÃO NATIVA VIA <script src="..."> (O NAVEGADOR SINCRONIZA!) ---
    // Vendor.js é carregado e executado primeiro
    document.write(`
        <script src="${PUBLIC_BASE_URL}/js/vendor.js?t=${Date.now()}"></script>
    `);

    // Main.js é carregado e executado em seguida (NÃO CONTEÚDO RAW)
    document.write(`
        <script src="${PUBLIC_BASE_URL}/js/main.js?t=${Date.now()}"></script>
    `);

    // Código de Inicialização é executado por último
    document.write(`
        <script type="text/javascript" nonce="${Math.random()}">
            ${initializationCode}
        </script>
    `);

    document.close();
    console.log('[Eclipse] Injeção nativa concluída. Verifique a UI do jogo.');
    
})();
