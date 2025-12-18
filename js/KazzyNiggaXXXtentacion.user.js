// ==UserScript==
// @name         Eclipse - Official Injector (Layout Fix)
// @version      2.2.0
// @description  Correção do posicionamento do Launcher
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

            // Criar o container sem restrições de flex, apenas uma camada absoluta
            const wrapper = document.createElement('div');
            wrapper.id = "eclipse-main-wrapper";
            // z-index altíssimo e pointer-events auto para os inputs funcionarem
            wrapper.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:999999; pointer-events:none; overflow:hidden;";
            
            // Injetamos o HTML
            wrapper.innerHTML = html;
            document.documentElement.appendChild(wrapper);

            // Garantir que o launcher interno tem pointer-events para poderes clicar
            const ui = wrapper.querySelector('#launcher-ui');
            if(ui) ui.style.pointerEvents = "auto";

            // Injetar o play.js
            const script = document.createElement('script');
            script.textContent = playJs + `\n//# sourceURL=${RAW_BASE_URL}/play.js`;
            document.body.appendChild(script);

            console.log('[Eclipse] Launcher injetado e corrigido.');
        } catch (e) { console.error('[Eclipse] Erro:', e); }
    }

    const check = setInterval(() => {
        if (document.body) {
            clearInterval(check);
            loadEclipse();
        }
    }, 50);
})();
