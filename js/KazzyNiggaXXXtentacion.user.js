// ==UserScript==
// @name         Eclipse Launcher Fix
// @match        *://aetlis.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async function() {
    const RAW_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    // 1. Bloqueia o carregamento original do site para não haver conflitos
    window.stop();

    // 2. Carrega o teu HTML
    const html = await fetch(`${RAW_BASE}/index.html?t=${Date.now()}`).then(r => r.text());
    
    // Injeta o HTML sem destruir o console
    document.documentElement.innerHTML = html;

    // 3. Função para injetar scripts em ordem
    const inject = async (file) => {
        const code = await fetch(`${RAW_BASE}/${file}?t=${Date.now()}`).then(r => r.text());
        const s = document.createElement('script');
        s.textContent = code;
        document.head.appendChild(s);
        console.log(`[Eclipse] ${file} injetado.`);
    };

    // Ordem de carregamento crucial
    await inject('vendor.js');
    await inject('play.js');
})();
