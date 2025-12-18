// ==UserScript==
// @name         Eclipse - Aetlis Visual Overhaul
// @version      35.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // URL do teu ficheiro HTML no GitHub (Substitui pela tua se necessário)
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await response.text();

        const eclipseOverlay = document.createElement('div');
        eclipseOverlay.id = "eclipse-init-screen";
        eclipseOverlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:#000; display:flex; align-items:center; justify-content:center;";
        eclipseOverlay.innerHTML = html;
        document.body.appendChild(eclipseOverlay);

        const playBtn = eclipseOverlay.querySelector('#playBtn');
        
        playBtn.onclick = () => {
            // 1. Ativa o modo visual no BODY (Dispara o CSS acima)
            document.body.classList.add('eclipse-mode');

            // 2. Captura os valores do teu launcher
            const data = {
                nick: document.querySelector('#nickname').value,
                skin: document.querySelector('#skin').value.trim(),
                dNick: document.querySelector('#dualNickname').value,
                dSkin: document.querySelector('#dualSkin').value.trim()
            };

            // 3. Persistência
            localStorage.setItem('eclipse_nick', data.nick);
            localStorage.setItem('eclipse_skin', data.skin);
            if(data.dNick) localStorage.setItem('dualNickname', data.dNick);
            if(data.dSkin) localStorage.setItem('dualSkinUrl', data.dSkin);

            // 4. Injeta os dados no jogo real (usando seletores do index.html original)
            const gameInput = document.querySelector('main-container input, .input-text');
            if (gameInput) {
                gameInput.value = data.nick;
                gameInput.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // 5. Remove o launcher inicial para revelar o menu do jogo transformado
            eclipseOverlay.style.transition = '0.5s';
            eclipseOverlay.style.opacity = '0';
            setTimeout(() => eclipseOverlay.remove(), 500);
        };
    }

    // Espera o jogo carregar o DOM
    const loader = setInterval(() => {
        if (document.body) {
            clearInterval(loader);
            init();
        }
    }, 200);
})();
