// ==UserScript==
// @name         Eclipse Launcher - Final Shield
// @match        *://aetlis.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async function() {
    'use strict';
    const RAW_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    window.stop(); // Interrompe o site original

    // Limpa e prepara o terreno
    document.documentElement.innerHTML = '<head></head><body style="background:#000;"></body>';

    const loadScript = (name) => {
        return new Promise((resolve) => {
            const s = document.createElement('script');
            // Usar .src para ficheiros grandes (vendor.js) evita crash de memória
            s.src = `${RAW_BASE}/${name}?t=${Date.now()}`;
            s.onload = () => { console.log(`[Eclipse] OK: ${name}`); resolve(); };
            s.onerror = () => console.error(`[Eclipse] Erro em: ${name}`);
            document.head.appendChild(s);
        });
    };

    // 1. Carrega o Vendor primeiro (Obrigatório para o Webpack estar pronto)
    await loadScript('vendor.js');

    // 2. Carrega e injeta a tua UI num container protegido
    const uiHtml = await fetch(`${RAW_BASE}/index.html?t=${Date.now()}`).then(r => r.text());
    const wrapper = document.createElement('div');
    wrapper.id = 'launcher-wrapper';
    wrapper.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; z-index:999999;';
    wrapper.innerHTML = uiHtml;
    document.body.appendChild(wrapper);

    // 3. Por fim, carrega o play.js
    await loadScript('play.js');
})();
