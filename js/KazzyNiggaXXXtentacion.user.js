// ==UserScript==
// @name         Eclipse - Ultimate Injector (Absolute Center)
// @version      4.2.0
// @description  Força o centro usando transform: translate
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
            host.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:9999999; pointer-events:none;";
            document.documentElement.appendChild(host);

            const shadow = host.attachShadow({mode: 'open'});
            
            shadow.innerHTML = `
                <style>
                    /* Reset total para evitar herança do site oficial */
                    :host { all: initial; }
                    
                    #launcher-ui { 
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%); /* O segredo da centralização */
                        width: 100%;
                        max-width: 450px; /* Ajusta conforme o tamanho do teu painel */
                        z-index: 1000;
                        pointer-events: auto;
                        display: block !important;
                    }

                    /* Background overlay atrás do menu */
                    .overlay {
                        position: fixed;
                        top: 0; left: 0;
                        width: 100vw; height: 100vh;
                        background: rgba(0, 0, 0, 0.75);
                        z-index: 999;
                    }
                </style>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                
                <div class="overlay"></div>
                <div id="launcher-ui">
                    ${html}
                </div>
            `;

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
