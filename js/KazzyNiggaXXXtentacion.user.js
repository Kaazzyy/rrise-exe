// ==UserScript==
// @name         Eclipse Launcher - Force UI
// @match        *://aetlis.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async function() {
    'use strict';
    const RAW_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    // 1. Bloqueia o arranque original
    window.stop();

    // 2. Prepara o ecrã com a tua UI IMEDIATAMENTE
    const uiResponse = await fetch(`${RAW_BASE}/index.html?t=${Date.now()}`);
    const uiHtml = await uiResponse.text();

    document.documentElement.innerHTML = `
        <head>
            <style>
                #eclipse-shield { position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:999999; background:#000; display:block; }
            </style>
        </head>
        <body>
            <div id="eclipse-shield">${uiHtml}</div>
        </body>
    `;

    // 3. Função de injeção direta via Script Tag (Mais estável para o Vendor pesado)
    function addScript(name) {
        const s = document.createElement('script');
        s.src = `${RAW_BASE}/${name}?t=${Date.now()}`;
        s.async = false; // Garante a ordem: Vendor -> Play
        document.head.appendChild(s);
        console.log(`[Eclipse] Script adicionado: ${name}`);
    }

    // Carrega na ordem necessária para o motor funcionar
    addScript('vendor.js');
    addScript('play.js');
})();
