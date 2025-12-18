// ==UserScript==
// @name         Eclipse - Premium UI Fix
// @version      6.0.0
// @description  UI Instantânea e Visual Corrigido
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
            host.id = "eclipse-host";
            host.style.cssText = "position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:2147483647; background:rgba(0,0,0,0.8); backdrop-filter:blur(4px);";
            
            // Injetamos o CSS Crítico aqui para não haver delay de 1 segundo
            host.innerHTML = `
                <style>
                    #launcher-ui {
                        background: #111113 !important;
                        border: 1px solid #27272a !important;
                        border-radius: 24px !important;
                        padding: 40px !important;
                        width: 420px !important;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7) !important;
                        color: white !important;
                        font-family: 'Inter', sans-serif !important;
                    }
                    input {
                        background: #1c1c1f !important;
                        border: 1px solid #3f3f46 !important;
                        color: white !important;
                        border-radius: 12px !important;
                        padding: 12px !important;
                        width: 100% !important;
                        margin-top: 8px !important;
                        margin-bottom: 16px !important;
                        outline: none !important;
                    }
                    input:focus { border-color: #8b5cf6 !important; }
                    button {
                        background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%) !important;
                        color: white !important;
                        font-weight: bold !important;
                        padding: 14px !important;
                        border-radius: 12px !important;
                        cursor: pointer !important;
                        border: none !important;
                        width: 100% !important;
                        transition: opacity 0.2s !important;
                    }
                    button:hover { opacity: 0.9 !important; }
                    label { font-size: 14px !important; color: #a1a1aa !important; font-weight: 500 !important; }
                </style>
                <div id="launcher-ui">
                    ${html}
                </div>
            `;
            document.body.appendChild(host);

            // Lógica
            const playBtn = host.querySelector('#playBtn') || host.querySelector('button');
            const nickInp = host.querySelector('#nickname') || host.querySelector('input[type="text"]');
            const skinInp = host.querySelector('#skin');

            if (playBtn) {
                nickInp.value = localStorage.getItem('nickname') || "";
                if(skinInp) skinInp.value = localStorage.getItem('skinUrl') || "";

                playBtn.onclick = () => {
                    localStorage.setItem('nickname', nickInp.value);
                    if(skinInp) localStorage.setItem('skinUrl', skinInp.value);
                    
                    if (window.client) {
                        if (window.client.settings) window.client.settings.nickname = nickInp.value;
                        if (window.client.connect) window.client.connect();
                        setTimeout(() => { if (window.client.spawn) window.client.spawn(nickInp.value); }, 500);
                    }
                    host.remove();
                };
            }
        } catch (e) { console.error('Eclipse UI Error:', e); }
    }

    const check = setInterval(() => {
        if (document.body) {
            clearInterval(check);
            loadEclipse();
        }
    }, 100);
})();
