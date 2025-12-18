// ==UserScript==
// @name         Eclipse - Final Fix
// @version      7.0.0
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

        // Criar o overlay (Fundo escuro)
        const overlay = document.createElement('div');
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(5px);";
        overlay.innerHTML = html;
        document.documentElement.appendChild(overlay);

        // Lógica dos Botões
        const btn = overlay.querySelector('#playBtn');
        const nickInput = overlay.querySelector('#nickname');
        const skinInput = overlay.querySelector('#skin');

        // Carregar dados salvos
        nickInput.value = localStorage.getItem('eclipse_nick') || "";
        skinInput.value = localStorage.getItem('eclipse_skin') || "";

        btn.onclick = () => {
            const nick = nickInput.value || "EclipsePlayer";
            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', skinInput.value);

            // Tentar dar spawn no jogo original
            if (window.client) {
                if (window.client.settings) window.client.settings.nickname = nick;
                if (window.client.connect) window.client.connect();
                // Pequeno atraso para o servidor aceitar a conexão antes do spawn
                setTimeout(() => { 
                    if (window.client.spawn) window.client.spawn(nick); 
                }, 800);
            }

            // Remove o menu e volta ao jogo
            overlay.remove();
        };
    }

    // Espera o site carregar o básico antes de injetar
    window.addEventListener('load', () => {
        setTimeout(init, 500);
    });
})();
