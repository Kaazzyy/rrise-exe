// ==UserScript==
// @name         Eclipse - Visual Ativator
// @version      3.8.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function start() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const ui = document.createElement('div');
        ui.id = "eclipse-launcher";
        ui.style.cssText = "position:fixed; inset:0; z-index:1000000; background:rgba(0,0,0,0.95); display:flex; align-items:center; justify-content:center;";
        ui.innerHTML = html;
        document.body.appendChild(ui);

        ui.querySelector('#playBtn').onclick = () => {
            // Ativa o CSS In-Game
            document.body.classList.add('eclipse-active');

            // Passa os dados para o jogo (mesmo que os lobbies não funcionem)
            const nick = ui.querySelector('#nickname').value;
            const gameNick = document.querySelector('input[placeholder*="Nick"]');
            if (gameNick) {
                gameNick.value = nick;
                gameNick.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // Esconde o Launcher para veres o menu do jogo alterado
            ui.style.transition = '0.4s';
            ui.style.opacity = '0';
            setTimeout(() => ui.remove(), 400);
        };
    }

    const check = setInterval(() => { if(document.body) { clearInterval(check); start(); } }, 200);
})();
