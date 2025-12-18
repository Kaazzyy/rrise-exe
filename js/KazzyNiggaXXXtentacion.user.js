// ==UserScript==
// @name         Eclipse - Ultimate Injector (Screen Fix)
// @version      4.3.0
// @description  Força o menu a ficar visível e centralizado sem scroll
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
            // Inset: 0 garante que ele cola em todas as bordas (Top, Bottom, Left, Right)
            host.style.cssText = "position:fixed; inset:0; width:100vw; height:100vh; z-index:9999999; pointer-events:none;";
            document.documentElement.appendChild(host);

            const shadow = host.attachShadow({mode: 'open'});
            
            shadow.innerHTML = `
                <style>
                    :host { all: initial; }
                    
                    /* Container principal que cobre a tela toda */
                    .fullscreen-overlay {
                        position: fixed;
                        inset: 0;
                        width: 100vw;
                        height: 100vh;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        background: rgba(0, 0, 0, 0.8);
                        pointer-events: auto;
                        overflow: hidden;
                    }

                    /* O teu painel de login */
                    #launcher-ui { 
                        width: 90%;
                        max-width: 420px;
                        background: #18181b; /* Cor zinc-900 */
                        border-radius: 1rem;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                        padding: 2rem;
                        display: block !important;
                    }
                </style>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                
                <div class="fullscreen-overlay">
                    <div id="launcher-ui">
                        ${html}
                    </div>
                </div>
            `;

            // Lógica do botão
            const playBtn = shadow.getElementById('playBtn');
            if (playBtn) {
                const nickInp = shadow.getElementById('nickname');
                const skinInp = shadow.getElementById('skin');
                
                nickInp.value = localStorage.getItem('nickname') || "";
                skinInp.value = localStorage.getItem('skinUrl') || "";

                playBtn.onclick = () => {
                    const nick = nickInp.value || "Eclipse";
                    localStorage.setItem('nickname', nick);
                    localStorage.setItem('skinUrl', skinInp.value);

                    if (window.client) {
                        if (window.client.settings) window.client.settings.nickname = nick;
                        if (window.client.connect) window.client.connect();
                        setTimeout(() => { if (window.client.spawn) window.client.spawn(nick); }, 500);
                    }

                    host.style.opacity = "0";
                    host.style.transition = "0.4s";
                    setTimeout(() => host.remove(), 400);
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
