// ==UserScript==
// @name         Eclipse - Ultimate Injector (Centered Fix)
// @version      4.1.0
// @description  Correção definitiva de alinhamento e centralização
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';

    async function loadEclipse() {
        try {
            const html = await fetch(`${RAW_BASE_URL}/index.html?t=${Date.now()}`).then(r => r.text());

            // 1. Criar o Host
            const host = document.createElement('div');
            host.id = "eclipse-shadow-host";
            // Forçamos o host a ser um container flexível que ocupa a tela toda
            host.style.cssText = `
                position: fixed; 
                top: 0; left: 0; 
                width: 100vw; height: 100vh; 
                z-index: 9999999; 
                display: flex !important; 
                align-items: center !important; 
                justify-content: center !important;
                pointer-events: none;
            `;
            document.documentElement.appendChild(host);

            const shadow = host.attachShadow({mode: 'open'});
            
            shadow.innerHTML = `
                <style>
                    :host { all: initial; }
                    /* Garante que o conteúdo dentro do shadow também aceite flex */
                    #launcher-ui { 
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        width: 100vw;
                        height: 100vh;
                        pointer-events: auto;
                        background: rgba(0, 0, 0, 0.7); /* Escurece o fundo do jogo */
                    }
                    /* Forçar o Tailwind a aplicar estilos de largura */
                    .max-w-lg { max-width: 32rem !important; }
                    .w-full { width: 100% !important; }
                </style>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                <div id="launcher-ui">
                    ${html}
                </div>
            `;

            // --- LÓGICA DO BOTÃO ---
            const playBtn = shadow.getElementById('playBtn');
            const nickInp = shadow.getElementById('nickname');
            const skinInp = shadow.getElementById('skin');

            if (playBtn) {
                nickInp.value = localStorage.getItem('nickname') || "";
                skinInp.value = localStorage.getItem('skinUrl') || "";

                playBtn.onclick = () => {
                    const nick = nickInp.value || "Eclipse";
                    const skin = skinInp.value || "";
                    localStorage.setItem('nickname', nick);
                    localStorage.setItem('skinUrl', skin);

                    if (window.client) {
                        if (window.client.settings) window.client.settings.nickname = nick;
                        if (window.client.connect) window.client.connect();
                        setTimeout(() => { if (window.client.spawn) window.client.spawn(nick); }, 500);
                    }

                    host.style.opacity = "0";
                    host.style.transition = "0.5s";
                    setTimeout(() => host.remove(), 500);
                };
            }

        } catch (e) { console.error('Eclipse Error:', e); }
    }

    const check = setInterval(() => {
        if (document.body) {
            clearInterval(check);
            loadEclipse();
        }
    }, 50);
})();
