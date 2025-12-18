// ==UserScript==
// @name         Eclipse - Keyboard Emulator Sync
// @version      11.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    function simulateTyping(element, value) {
        element.value = value;
        // Dispara uma sequência completa de eventos para enganar o motor do jogo
        const events = ['focus', 'keydown', 'keypress', 'input', 'keyup', 'change', 'blur'];
        events.forEach(type => {
            const event = new Event(type, { bubbles: true });
            element.dispatchEvent(event);
        });
    }

    async function init() {
        const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await response.text();

        const overlay = document.createElement('div');
        overlay.id = "eclipse-overlay";
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(5px);";
        overlay.innerHTML = html;
        document.body.appendChild(overlay);

        const btn = overlay.querySelector('#playBtn');
        const nickInp = overlay.querySelector('#nickname');
        const skinInp = overlay.querySelector('#skin');

        nickInp.value = localStorage.getItem('eclipse_nick') || "";
        skinInp.value = localStorage.getItem('eclipse_skin') || "";

        btn.onclick = () => {
            const nick = nickInp.value || "EclipsePlayer";
            const skin = skinInp.value || "";
            
            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', skin);
            localStorage.setItem('nickname', nick);
            localStorage.setItem('skinUrl', skin);

            // 1. Procurar o input original do jogo (que está escondido atrás do Eclipse)
            // Tentamos vários seletores comuns nesse tipo de jogo
            const realNickInput = document.querySelector('input[placeholder*="Nick"], #nickname:not(#eclipse-overlay #nickname), .nick-input');
            const realSkinInput = document.querySelector('input[placeholder*="Skin"], #skin:not(#eclipse-overlay #skin), .skin-input');

            if (realNickInput) simulateTyping(realNickInput, nick);
            if (realSkinInput) simulateTyping(realSkinInput, skin);

            if (window.client) {
                // Forçar no objeto de settings se ele existir
                if (window.client.settings) {
                    window.client.settings.nickname = nick;
                    window.client.settings.skinUrl = skin;
                }

                // Tentar o Spawn
                if (window.client.connect) window.client.connect();
                
                setTimeout(() => {
                    if (window.client.spawn) {
                        window.client.spawn(nick);
                    } else {
                        // Se o spawn direto falhar, tentamos clicar no botão de play original
                        const realPlayBtn = document.querySelector('button.play, #play-button, .btn-play');
                        if (realPlayBtn) realPlayBtn.click();
                    }
                }, 400);
            }

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const checkBody = setInterval(() => {
        if (document.body) {
            clearInterval(checkBody);
            init();
        }
    }, 100);
})();
