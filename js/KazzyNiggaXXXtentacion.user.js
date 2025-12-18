// ==UserScript==
// @name         Eclipse - Ultimate Injector
// @version      4.0.0
// @description  Final isolation and logic fix
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

            const host = document.createElement('div');
            host.id = "eclipse-shadow-host";
            host.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:9999999; display:flex; align-items:center; justify-content:center;";
            document.documentElement.appendChild(host);

            const shadow = host.attachShadow({mode: 'open'});
            
            // Injetamos o HTML com o Tailwind forçado
            shadow.innerHTML = `
                <style>
                    :host { all: initial; font-family: sans-serif; }
                    /* Garante que o launcher ocupe a tela toda no shadow */
                    #launcher-ui { 
                        position: fixed; top:0; left:0; width:100vw; height:100vh;
                        display: flex; align-items: center; justify-content: center;
                        background: rgba(0,0,0,0.85);
                    }
                </style>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                ${html}
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

                    // 1. Tentar dar spawn no jogo oficial
                    if (window.client) {
                        if (window.client.settings) window.client.settings.nickname = nick;
                        if (window.client.connect) window.client.connect();
                        setTimeout(() => { if (window.client.spawn) window.client.spawn(nick); }, 500);
                    }

                    // 2. Tentar preencher inputs originais escondidos
                    const realNick = document.querySelector('input[placeholder*="Nick"], #nickname');
                    if (realNick) {
                        realNick.value = nick;
                        realNick.dispatchEvent(new Event('input', { bubbles: true }));
                    }

                    // 3. Fechar Launcher
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
