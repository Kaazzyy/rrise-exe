// ==UserScript==
// @name         Eclipse - DIRECT LAUNCH (No Launcher UI)
// @version      1.8.0
// @description  Aetlis.io Custom Launcher (Injects Game directly, No Ads, Auto-Connect)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 BYPASS ADS (ESSENCIAL) ---
    // Mocks para enganar o anti-adblock
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} }; 
    window.AdInPlay = { isLoaded: true, started: true }; 
    window.isAdBlocked = false;
    window.adinplay = { create: () => {}, destroy: () => {}, isLoaded: true };
    // ---------------------------------

    // --- VARIÁVEIS DE CONFIGURAÇÃO (Aqui defines o teu Nickname padrão) ---
    const DEFAULT_NICKNAME = localStorage.nickname || "Eclipse Player";
    const DEFAULT_SKIN = localStorage.skinUrl || ""; 
    // ----------------------------------------------------------------------
    
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

    // Função para injetar o script como TEXTO
    function injectScriptText(text, sourceUrl, target = 'head') {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + `\n//# sourceURL=${sourceUrl}`;
        document[target].appendChild(s); 
    }
    
    // 2. Injetar o HTML (index.html, que agora só tem Canvas e HUD)
    const launcherHtml = await fetchContent('index.html');
    if (launcherHtml) {
        document.open();
        document.write(launcherHtml); // Substitui a página inteira
        document.close();
        console.log('[Eclipse] Canvas e Estrutura básica injetados.');
    } else {
        return console.error('[Eclipse] Falha ao carregar index.html. Abortando.');
    }
    
    // 3. Injetar o VENDOR.JS (Bibliotecas base)
    const vendorJsContent = await fetchContent('js/vendor.js');
    if (vendorJsContent) {
        injectScriptText(vendorJsContent, `${RAW_BASE_URL}/js/vendor.js`, 'body');
    } else {
         return console.error('[Eclipse] Falha ao carregar vendor.js. Abortando.');
    }

    // 4. Injetar o MAIN.JS + Código de Inicialização Automática
    const mainJsContent = await fetchContent('js/main.js'); 
    
    if (mainJsContent) {
        const initializationCode = `
            console.log('[Eclipse] Inicialização automática: A forçar conexão com o jogo.');
            
            // 1. Tenta definir o nome de usuário e skin
            if (window.client && typeof window.client.setNickname === 'function') {
                window.client.setNickname("${DEFAULT_NICKNAME}");
                // O jogo trata a skin internamente, mas passamos a variável globalmente por segurança
                window.Eclipse_Skin = "${DEFAULT_SKIN}"; 
            } else if (window.client) {
                // Se a função 'setNickname' não existe, injetamos nas propriedades mais prováveis
                window.client.nickname = "${DEFAULT_NICKNAME}";
                window.client.skinUrl = "${DEFAULT_SKIN}";
            }

            // 2. Tenta forçar o início do jogo / ligação ao servidor.
            if (window.client && typeof window.client.connect === 'function') {
                window.client.connect(); 
            } else if (window.initGame) {
                window.initGame();
            } else if (window.startGame) {
                window.startGame();
            }
        `;

        // Injeta o main.js mais o código de inicialização agressiva
        // Usamos um pequeno delay para garantir que o vendor.js foi executado
        setTimeout(() => {
             injectScriptText(mainJsContent + initializationCode, `${RAW_BASE_URL}/js/main.js`, 'body');
             console.log('[Eclipse] Jogo injetado e iniciado automaticamente.');
        }, 100);
    } else {
        console.error('[Eclipse] Falha ao carregar main.js. O jogo não pode começar.');
    }
    
})();
