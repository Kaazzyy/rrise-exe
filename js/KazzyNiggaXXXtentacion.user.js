// ==UserScript==
// @name         Eclipse - Error Fix
// @version      4.1.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function loadUI() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const eclipse = document.createElement('div');
        eclipse.id = "eclipse-shield";
        // O Shield bloqueia o ecrã até clicares no botão
        eclipse.style.cssText = "position:fixed; inset:0; z-index:1000000; background:#000; display:flex; align-items:center; justify-content:center;";
        eclipse.innerHTML = html;
        document.body.appendChild(eclipse);

        eclipse.querySelector('#playBtn').onclick = () => {
            const data = {
                nick: eclipse.querySelector('#nickname').value,
                skin: eclipse.querySelector('#skin').value,
                dNick: eclipse.querySelector('#dualNickname').value,
                dSkin: eclipse.querySelector('#dualSkin').value
            };

            // 1. Sincroniza Dual no Storage
            if (data.dNick) localStorage.setItem('dualNickname', data.dNick);
            if (data.dSkin) localStorage.setItem('dualSkinUrl', data.dSkin);

            // 2. Tenta preencher o nick no input do jogo
            const gameNick = document.querySelector('input[placeholder*="Nick"], .input-text');
            if (gameNick) {
                gameNick.value = data.nick;
                gameNick.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // 3. Destrói o escudo para permitir interação com o Play original
            eclipse.remove();
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); loadUI(); } }, 200);
})();
