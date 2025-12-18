// ==UserScript==
// @name         Eclipse - Skin & Nick Sync Fix
// @version      12.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    function simulateTyping(element, value) {
        if (!element) return;
        element.value = value;
        ['input', 'change', 'blur'].forEach(type => {
            element.dispatchEvent(new Event(type, { bubbles: true }));
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

            // 1. Sincronizar Inputs Originais
            const realNickInput = document.querySelector('input[placeholder*="Nick"], #nickname:not(#eclipse-overlay #nickname)');
            const realSkinInput = document.querySelector('input[placeholder*="Skin"], #skinUrl, #skin:not(#eclipse-overlay #skin)');
            
            simulateTyping(realNickInput, nick);
            simulateTyping(realSkinInput, skin);

            // 2. Injeção Profunda no Client (Forçar carregamento da Skin)
            if (window.client) {
                if (window.client.settings) {
                    window.client.settings.nickname = nick;
                    window.client.settings.skinUrl = skin;
                    window.client.settings.skin = skin;
                }

                // Tentar chamar a função de atualização de skin do próprio jogo
                if (typeof window.client.setSkin === 'function') {
                    window.client.setSkin(skin);
                }

                if (window.client.connect) window.client.connect();
                
                setTimeout(() => {
                    if (window.client.spawn) {
                        // Passamos o nick e a skin diretamente no spawn se o motor suportar
                        window.client.spawn(nick, skin);
                    }
                }, 500);
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
