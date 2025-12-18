// ==UserScript==
// @name         Eclipse - Play Fix & Dual
// @version      4.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const overlay = document.createElement('div');
        overlay.id = "eclipse-init";
        overlay.style.cssText = "position:fixed; inset:0; z-index:1000000; background:#000; display:flex; align-items:center; justify-content:center;";
        overlay.innerHTML = html;
        document.body.appendChild(overlay);

        overlay.querySelector('#playBtn').onclick = () => {
            // Ativa o modo visual
            document.body.classList.add('eclipse-mode');

            // Captura os dados
            const vals = {
                nick: document.querySelector('#nickname').value,
                skin: document.querySelector('#skin').value,
                dNick: document.querySelector('#dualNickname').value,
                dSkin: document.querySelector('#dualSkin').value
            };

            // Sincroniza Dual via LocalStorage (Caminho mais seguro no Aetlis)
            if (vals.dNick) localStorage.setItem('dualNickname', vals.dNick);
            if (vals.dSkin) localStorage.setItem('dualSkinUrl', vals.dSkin);

            // Sincroniza Nick Principal
            const gameInput = document.querySelector('input[placeholder*="Nick"], .input-text');
            if (gameInput) {
                gameInput.value = vals.nick;
                gameInput.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // Remove o launcher para libertar o botão de Play original
            overlay.remove();
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 200);
})();
