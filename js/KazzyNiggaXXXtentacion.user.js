// ==UserScript==
// @name         Eclipse - Vue.js Force Injection
// @version      22.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // FUNÇÃO MESTRE: Força o valor em campos protegidos por frameworks (Vue/React)
    function setInput(el, value) {
        if (!el) return;
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(el, value);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
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
        const nickField = overlay.querySelector('#nickname');
        const skinField = overlay.querySelector('#skin');

        nickField.value = localStorage.getItem('eclipse_nick') || "";
        skinField.value = localStorage.getItem('eclipse_skin') || "";

        btn.onclick = () => {
            const nickValue = nickField.value;
            const skinValue = skinField.value.trim();

            localStorage.setItem('eclipse_nick', nickValue);
            localStorage.setItem('eclipse_skin', skinValue);

            // 1. Verificar se a skin já existe
            const skinsOnPage = Array.from(document.querySelectorAll('.skin, .skin-item img'));
            const exists = skinsOnPage.some(img => img.src && img.src.includes(skinValue));

            if (skinValue !== "" && !exists) {
                const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
                if (addBtn) addBtn.click();
            }

            // 2. Dar tempo para o novo slot ser o alvo
            setTimeout(() => {
                const gameNick = document.querySelector('input[placeholder*="Nickname"]:not(#eclipse-overlay input)');
                const gameSkin = document.querySelector('input[placeholder*="Skin"]:not(#eclipse-overlay input)');

                // Injeção forçada
                setInput(gameNick, nickValue);
                setInput(gameSkin, skinValue);

                if (window.client && window.client.connect) window.client.connect();
                
                setTimeout(() => {
                    if (window.client && window.client.spawn) window.client.spawn(nickValue);
                }, 500);
            }, 300);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
