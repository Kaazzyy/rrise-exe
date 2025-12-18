// ==UserScript==
// @name         Eclipse Launcher - Stable
// @match        *://aetlis.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async function() {
    'use strict';
    const RAW_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    // Para o carregamento original imediatamente
    window.stop();

    // 1. Limpa o DOM de forma segura
    document.documentElement.innerHTML = '<head></head><body></body>';

    const injectScript = async (name) => {
        console.log(`[Eclipse] A carregar ${name}...`);
        const code = await fetch(`${RAW_BASE}/${name}?t=${Date.now()}`).then(r => r.text());
        const s = document.createElement('script');
        s.textContent = code;
        document.head.appendChild(s);
    };

    // 2. Carrega o HTML da tua UI
    const uiHtml = await fetch(`${RAW_BASE}/index.html?t=${Date.now()}`).then(r => r.text());
    document.body.innerHTML = uiHtml;

    // 3. ORDEM CRÍTICA: Vendor primeiro, Play depois
    // O vendor.js que enviaste precisa estar carregado antes do play.js ser clicado
    await injectScript('vendor.js');
    await injectScript('play.js');

    console.log('[Eclipse] Sistema pronto e Vendor injetado.');
})();
