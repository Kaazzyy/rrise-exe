// ==UserScript==
// @name         Eclipse - Main Menu Overhaul
// @version      32.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await response.text();

        const overlay = document.createElement('div');
        overlay.id = "eclipse-overlay";
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
        overlay.innerHTML = html;
        document.body.appendChild(overlay);

        const btn = overlay.querySelector('#playBtn');
        
        btn.onclick = () => {
            // Ativa a classe que dispara o CSS do Menu Principal
            document.body.classList.add('eclipse-ui-active');

            // Sincronização de dados (Mantendo o que já funciona)
            const vals = {
                nick: document.querySelector('#nickname').value,
                skin: document.querySelector('#skin').value.trim(),
                dNick: document.querySelector('#dualNickname').value,
                dSkin: document.querySelector('#dualSkin').value.trim()
            };

            // Salvar
            localStorage.setItem('eclipse_nick', vals.nick);
            localStorage.setItem('eclipse_skin', vals.skin);
            if (vals.dNick) localStorage.setItem('dualNickname', vals.dNick);
            if (vals.dSkin) localStorage.setItem('dualSkinUrl', vals.dSkin);

            // Injetar nos campos do jogo original
            setTimeout(() => {
                const gameNick = document.querySelector('input[placeholder*="Nickname"]:not(#eclipse-overlay input), .input-text:not(#eclipse-overlay input)');
                if (gameNick) {
                    gameNick.value = vals.nick;
                    gameNick.dispatchEvent(new Event('input', { bubbles: true }));
                }
                
                // Remove o overlay para revelar o novo menu transformado
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 500);
            }, 200);
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
