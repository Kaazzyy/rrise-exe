// ==UserScript==
// @name         Eclipse Launcher - Emergency Fix
// @match        *://aetlis.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async function() {
    'use strict';
    const RAW_BASE = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    window.stop(); // Para o site original

    // Cria um container isolado para a tua UI não ser apagada pelo jogo
    const eclipseContainer = document.createElement('div');
    eclipseContainer.id = 'eclipse-wrapper';
    eclipseContainer.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; z-index:999999; background:#000;';
    document.documentElement.appendChild(eclipseContainer);

    // Carrega a tua UI para dentro do container
    const uiHtml = await fetch(`${RAW_BASE}/index.html?t=${Date.now()}`).then(r => r.text());
    eclipseContainer.innerHTML = uiHtml;

    const injectScript = (name) => {
        return new Promise((resolve) => {
            console.log(`[Eclipse] A injetar: ${name}`);
            const s = document.createElement('script');
            s.src = `${RAW_BASE}/${name}?t=${Date.now()}`;
            s.onload = () => {
                console.log(`[Eclipse] ${name} carregado.`);
                resolve();
            };
            document.head.appendChild(s);
        });
    };

    // Carrega os scripts na ordem correta
    // Usamos .src em vez de .textContent para ficheiros grandes como o vendor.js
    await injectScript('vendor.js');
    await injectScript('play.js');
})();
