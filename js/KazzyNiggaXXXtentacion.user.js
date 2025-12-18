// ==UserScript==
// @name         Eclipse - Official Injector (Forced UI)
// @version      2.1.0
// @description  Garante que o Launcher aparece sobre o jogo
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

            // Criar um container de alta prioridade
            const wrapper = document.createElement('div');
            wrapper.id = "eclipse-main-wrapper";
            wrapper.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:999999; background:#000;";
            wrapper.innerHTML = html;
            document.documentElement.appendChild(wrapper);

            // Injetar o play.js
            const script = document.createElement('script');
            script.textContent = playJs + `\n//# sourceURL=${RAW_BASE_URL}/play.js`;
            document.body.appendChild(script);

            console.log('[Eclipse] Launcher forçado no topo.');
        } catch (e) { console.error('[Eclipse] Erro:', e); }
    }

    // Tentar injetar assim que o document.documentElement estiver disponível
    const check = setInterval(() => {
        if (document.documentElement) {
            clearInterval(check);
            loadEclipse();
        }
    }, 10);
})();
