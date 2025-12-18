// ==UserScript==
// @name         Eclipse - FINAL FIX (Inline Vendor)
// @version      1.7.0
// @description  Aetlis.io Custom Launcher (Força Vendor.js INLINE)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

// No teu script Tampermonkey
(async () => {
    'use strict';
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    async function fetchAndInject(path) {
        const res = await fetch(`${RAW_BASE_URL}/${path}`);
        if (!res.ok) return false;
        const text = await res.text();
        const s = document.createElement('script');
        s.textContent = text + `\n//# sourceURL=${path}`;
        document.head.appendChild(s);
        return true;
    }

    // 1. Limpa a página e mete o teu HTML
    const html = await (await fetch(`${RAW_BASE_URL}/index.html`)).text();
    document.open();
    document.write(html);
    document.close();

    // 2. INJEÇÃO PRIORITÁRIA DO VENDOR
    console.log('[Eclipse] A carregar Vendor (Dependências)...');
    const vendorOk = await fetchAndInject('vendor.js');
    
    if (vendorOk) {
        console.log('[Eclipse] Vendor carregado com sucesso!');
        // 3. Só agora carrega o teu play.js
        fetchAndInject('play.js');
    } else {
        console.error('[Eclipse] ERRO CRÍTICO: Não foi possível carregar o vendor.js');
    }
})();
