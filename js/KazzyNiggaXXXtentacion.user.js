// ==UserScript==
// @name         Eclipse - Smart Skin Engine
// @version      21.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    function injectData(el, value) {
        if (!el) return;
        el.focus();
        el.value = value;
        // Dispara a sequência de eventos que o Vue/React costumam monitorizar
        ['input', 'change', 'keyup', 'blur'].forEach(t => el.dispatchEvent(new Event(t, { bubbles: true })));
    }

    async function init() {
        const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await response.text();

        const overlay = document.createElement('div');
        overlay.id = "eclipse-overlay";
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
        overlay.innerHTML = html;
        document.body.appendChild(overlay);

        const btn = overlay.querySelector('#playBtn');
        const nInput = overlay.querySelector('#nickname');
        const sInput = overlay.querySelector('#skin');

        nInput.value = localStorage.getItem('eclipse_nick') || "";
        sInput.value = localStorage.getItem('eclipse_skin') || "";

        btn.onclick = () => {
            const nick = nInput.value;
            const skin = sInput.value.trim();

            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', skin);

            // --- DETEÇÃO DE SKIN PRESENTE ---
            // Procuramos por todas as imagens de skin no contentor do jogo
            const allSkins = Array.from(document.querySelectorAll('img.skin, .skin-item img'));
            const alreadyExists = allSkins.some(img => img.src && (img.src.includes(skin) || skin.includes(img.src)));

            if (skin !== "" && !alreadyExists) {
                const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"], .btn-add-skin');
                if (addBtn) addBtn.click();
            }

            // Aguarda o slot abrir/ser criado
            setTimeout(() => {
                const gameNick = document.querySelector('input[placeholder*="Nick"]:not(#eclipse-overlay input)');
                const gameSkin = document.querySelector('input[placeholder*="Skin"]:not(#eclipse-overlay input)');

                injectData(gameNick, nick);
                injectData(gameSkin, skin);

                // Força o objeto do cliente para garantir que o Nick vai no spawn
                if (window.client && window.client.settings) {
                    window.client.settings.nickname = nick;
                    window.client.settings.skinUrl = skin;
                }

                if (window.client && window.client.connect) window.client.connect();
                
                setTimeout(() => {
                    if (window.client && window.client.spawn) window.client.spawn(nick);
                }, 500);
            }, 300);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
