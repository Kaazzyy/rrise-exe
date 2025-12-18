// ==UserScript==
// @name         Eclipse - Aetlis Hard Overhaul
// @version      36.0.0
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
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:#000; display:flex; align-items:center; justify-content:center;";
        overlay.innerHTML = html;
        document.body.appendChild(overlay);

        const btn = overlay.querySelector('#playBtn');
        
        btn.onclick = () => {
            // Aplicar a classe ao body
            document.body.classList.add('eclipse-mode');
            
            // Forçar a classe mesmo que o jogo tente remover
            setInterval(() => {
                if(!document.body.classList.contains('eclipse-mode')) {
                    document.body.classList.add('eclipse-mode');
                }
            }, 1000);

            const vals = {
                nick: document.querySelector('#nickname').value,
                skin: document.querySelector('#skin').value.trim(),
                dNick: document.querySelector('#dualNickname').value,
                dSkin: document.querySelector('#dualSkin').value.trim()
            };

            // Salvar no storage
            localStorage.setItem('eclipse_nick', vals.nick);
            localStorage.setItem('eclipse_skin', vals.skin);
            if(vals.dNick) localStorage.setItem('dualNickname', vals.dNick);
            if(vals.dSkin) localStorage.setItem('dualSkinUrl', vals.dSkin);

            // Injetar no jogo
            setTimeout(() => {
                const gameNick = document.querySelector('main-container input, input[placeholder*="Nick"]');
                if (gameNick) {
                    gameNick.value = vals.nick;
                    gameNick.dispatchEvent(new Event('input', { bubbles: true }));
                }
                
                // Fade out e remove o launcher
                overlay.style.transition = 'opacity 0.5s';
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 500);
            }, 200);
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
