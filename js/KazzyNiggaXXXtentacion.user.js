// ==UserScript==
// @name         Eclipse - Final Emergency Fix
// @version      5.0.0
// @description  Força centralização absoluta e remove lixo do site original
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    async function loadEclipse() {
        try {
            const html = await fetch(`${RAW_BASE_URL}/index.html?t=${Date.now()}`).then(r => r.text());

            // 1. Limpar estilos do body original que podem estar a empurrar o menu
            document.body.style.margin = "0";
            document.body.style.padding = "0";
            document.body.style.overflow = "hidden";

            // 2. Criar o Host do Launcher
            const host = document.createElement('div');
            host.id = "eclipse-host";
            // Usamos Fixed + Flex para garantir centro absoluto independente do site
            host.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                z-index: 2147483647 !important;
                background: rgba(0, 0, 0, 0.85) !important;
            `;
            
            // 3. Injetar o HTML (Limpando as classes que podem dar conflito no topo)
            host.innerHTML = `
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                <div style="width: 100%; max-width: 450px; padding: 20px;">
                    ${html}
                </div>
            `;
            document.body.appendChild(host);

            // 4. Lógica do Botão
            const playBtn = host.querySelector('#playBtn');
            const nickInp = host.querySelector('#nickname');
            const skinInp = host.querySelector('#skin');

            if (playBtn) {
                nickInp.value = localStorage.getItem('nickname') || "";
                skinInp.value = localStorage.getItem('skinUrl') || "";

                playBtn.onclick = () => {
                    const nick = nickInp.value || "Eclipse";
                    localStorage.setItem('nickname', nick);
                    localStorage.setItem('skinUrl', skinInp.value);

                    // Tentar dar spawn
                    if (window.client) {
                        if (window.client.settings) window.client.settings.nickname = nick;
                        if (window.client.connect) window.client.connect();
                        setTimeout(() => { if (window.client.spawn) window.client.spawn(nick); }, 500);
                    }

                    // Fechar e limpar
                    host.remove();
                    window.dispatchEvent(new Event('resize'));
                };
            }
        } catch (e) { console.error('Eclipse Error:', e); }
    }

    // Pequeno atraso para garantir que o body do jogo não apague o nosso launcher
    setTimeout(loadEclipse, 500);
})();
