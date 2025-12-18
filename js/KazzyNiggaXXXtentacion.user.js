// ==UserScript==
// @name         Eclipse - Official Injector
// @version      2.0.0
// @description  Bypass Anti-Mod by using official assets
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';

    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    // 1. Bloquear o carregamento do Launcher original (se existir)
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                // Se o jogo tentar criar a UI dele, nós podemos esconder aqui
                if (node.id === 'main-ui' || node.className === 'vanis-ui') {
                    node.style.display = 'none';
                }
            }
        }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // 2. Baixar o teu HTML e play.js do GitHub
    async function loadEclipse() {
        try {
            const [html, playJs] = await Promise.all([
                fetch(`${RAW_BASE_URL}/index.html?t=${Date.now()}`).then(r => r.text()),
                fetch(`${RAW_BASE_URL}/play.js?t=${Date.now()}`).then(r => r.text())
            ]);

            // Criar um container para o teu launcher
            const eclipseContainer = document.createElement('div');
            eclipseContainer.id = "eclipse-wrapper";
            eclipseContainer.innerHTML = html;
            document.documentElement.appendChild(eclipseContainer);

            // Injetar o teu play.js
            const script = document.createElement('script');
            script.textContent = playJs + `\n//# sourceURL=${RAW_BASE_URL}/play.js`;
            document.body.appendChild(script);

            console.log('[Eclipse] UI Injetada com sucesso.');
        } catch (e) {
            console.error('[Eclipse] Erro ao carregar UI:', e);
        }
    }

    // Esperar o body existir para injetar a UI
    const checkBody = setInterval(() => {
        if (document.body) {
            clearInterval(checkBody);
            loadEclipse();
        }
    }, 50);

})();
