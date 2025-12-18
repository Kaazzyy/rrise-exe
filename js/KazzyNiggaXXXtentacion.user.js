// ==UserScript==
// @name         Eclipse - UI System Overhaul
// @version      5.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function inject() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const wrap = document.createElement('div');
        wrap.id = "eclipse-init-screen";
        wrap.style.cssText = "position:fixed; inset:0; z-index:1000000; background:#000; display:flex; align-items:center; justify-content:center;";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            // A MAGIA ACONTECE AQUI:
            // Adicionamos a classe ao BODY que dispara todos os estilos !important acima
            document.body.classList.add('eclipse-overhaul');

            // Sincroniza os teus dados
            const data = {
                nick: wrap.querySelector('#nick-main').value,
                dNick: wrap.querySelector('#nick-dual').value,
                dSkin: wrap.querySelector('#skin-dual').value
            };

            if (data.dNick) localStorage.setItem('dualNickname', data.dNick);
            if (data.dSkin) localStorage.setItem('dualSkinUrl', data.dSkin);

            const gameNick = document.querySelector('input[placeholder*="Nick"]');
            if (gameNick) {
                gameNick.value = data.nick;
                gameNick.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // Remove o launcher e revela o jogo transformado
            wrap.remove();
        };
    }

    const start = setInterval(() => { if(document.body) { clearInterval(start); inject(); } }, 500);
})();
