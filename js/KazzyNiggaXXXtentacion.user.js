// ==UserScript==
// @name         Eclipse - Shadow DOM Injector
// @version      3.0.0
// @description  Isola o launcher de conflitos de CSS do site
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    async function loadEclipse() {
        try {
            const [html, playJs] = await Promise.all([
                fetch(`${RAW_BASE_URL}/index.html?t=${Date.now()}`).then(r => r.text()),
                fetch(`${RAW_BASE_URL}/play.js?t=${Date.now()}`).then(r => r.text())
            ]);

            // 1. Criar o Host do Shadow DOM
            const host = document.createElement('div');
            host.id = "eclipse-shadow-host";
            host.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:9999999;";
            document.documentElement.appendChild(host);

            // 2. Criar a Raiz Sombria (Shadow Root)
            const shadow = host.attachShadow({mode: 'open'});

            // 3. Injetar o HTML dentro do Shadow DOM
            // Importante: Re-injetar o Tailwind para funcionar dentro da bolha
            shadow.innerHTML = `
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                    :host { all: initial; } /* Reseta tudo o que vem de fora */
                </style>
                ${html}
            `;

            // 4. Injetar o play.js no contexto Global (window)
            // Ele precisa estar fora do shadow para falar com o motor do jogo (window.client)
            const script = document.createElement('script');
            script.textContent = `
                window.eclipseShadow = document.querySelector('#eclipse-shadow-host').shadowRoot;
                ${playJs}
            `;
            document.body.appendChild(script);

            console.log('[Eclipse] Shadow DOM ativo. Conflitos eliminados.');
        } catch (e) { console.error('[Eclipse] Erro:', e); }
    }

    const check = setInterval(() => {
        if (document.body) {
            clearInterval(check);
            loadEclipse();
        }
    }, 50);
})();
