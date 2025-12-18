// ==UserScript==
// @name         Eclipse - Multibox & Skin Sync
// @version      14.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    function simulateTyping(element, value) {
        if (!element || value === undefined) return;
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
        const dualNickInp = overlay.querySelector('#dualNickname');
        const dualSkinInp = overlay.querySelector('#dualSkin');

        // Carregar dados guardados
        nickInp.value = localStorage.getItem('eclipse_nick') || "";
        skinInp.value = localStorage.getItem('eclipse_skin') || "";
        dualNickInp.value = localStorage.getItem('eclipse_dual_nick') || "";
        dualSkinInp.value = localStorage.getItem('eclipse_dual_skin') || "";

        btn.onclick = () => {
            const data = {
                nick: nickInp.value,
                skin: skinInp.value,
                dualNick: dualNickInp.value,
                dualSkin: dualSkinInp.value
            };
            
            // Guardar no Storage
            localStorage.setItem('eclipse_nick', data.nick);
            localStorage.setItem('eclipse_skin', data.skin);
            localStorage.setItem('eclipse_dual_nick', data.dualNick);
            localStorage.setItem('eclipse_dual_skin', data.dualSkin);

            // 1. Lógica da Skin Principal (Adicionar slot novo se necessário)
            const addSkinBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
            if (addSkinBtn && data.skin.trim() !== "") addSkinBtn.click();

            setTimeout(() => {
                // 2. Sincronizar Player 1
                const realNick = document.querySelector('input[placeholder*="Nickname"]:not(#eclipse-overlay input)');
                const realSkin = document.querySelector('input[placeholder*="Skin URL"]:not(#eclipse-overlay input)');
                simulateTyping(realNick, data.nick);
                simulateTyping(realSkin, data.skin);

                // 3. Sincronizar Dual Player (Multibox)
                // Usando os seletores que encontraste nos elementos
                const dualSection = document.querySelector('.dual-section-content');
                if (dualSection) {
                    const dualInputs = dualSection.querySelectorAll('input.input-text');
                    if (dualInputs.length >= 2) {
                        simulateTyping(dualInputs[0], data.dualNick); // Dual Nickname
                        simulateTyping(dualInputs[1], data.dualSkin); // Dual Skin URL
                    }
                }

                // 4. Injeção no Client
                if (window.client) {
                    if (window.client.connect) window.client.connect();
                    setTimeout(() => {
                        if (window.client.spawn) window.client.spawn(data.nick);
                    }, 500);
                }
            }, 150);

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
