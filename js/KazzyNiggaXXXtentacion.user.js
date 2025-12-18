// ==UserScript==
// @name         Eclipse - Smart Skin & Multibox Sync
// @version      15.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    function simulateTyping(element, value) {
        if (!element || !value) return;
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
        const fields = {
            nick: overlay.querySelector('#nickname'),
            skin: overlay.querySelector('#skin'),
            dNick: overlay.querySelector('#dualNickname'),
            dSkin: overlay.querySelector('#dualSkin')
        };

        // Carregar do Storage
        Object.keys(fields).forEach(key => {
            fields[key].value = localStorage.getItem('eclipse_' + key) || "";
        });

        btn.onclick = () => {
            const vals = {
                nick: fields.nick.value,
                skin: fields.skin.value,
                dNick: fields.dNick.value,
                dSkin: fields.dSkin.value
            };

            // Guardar no Storage
            Object.keys(vals).forEach(key => localStorage.setItem('eclipse_' + key, vals[key]));

            // --- LÓGICA INTELIGENTE DE SKIN (EVITAR DUPLICADOS) ---
            if (vals.skin.trim() !== "") {
                // Procurar todas as skins já existentes na aba de skins do jogo
                const existingSkins = Array.from(document.querySelectorAll('.skin:not(.add-skin)'))
                    .map(img => img.src);
                
                const skinAlreadyExists = existingSkins.some(src => src.includes(vals.skin) || vals.skin.includes(src));

                if (!skinAlreadyExists) {
                    const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
                    if (addBtn) addBtn.click();
                }
            }

            setTimeout(() => {
                // Sincronizar Player 1
                simulateTyping(document.querySelector('input[placeholder*="Nickname"]:not(#eclipse-overlay input)'), vals.nick);
                simulateTyping(document.querySelector('input[placeholder*="Skin URL"]:not(#eclipse-overlay input)'), vals.skin);

                // Sincronizar Multibox
                const dualInputs = document.querySelectorAll('.dual-section-content input.input-text');
                if (dualInputs.length >= 2) {
                    simulateTyping(dualInputs[0], vals.dNick);
                    simulateTyping(dualInputs[1], vals.dSkin);
                }

                // Iniciar Jogo
                if (window.client) {
                    if (window.client.connect) window.client.connect();
                    setTimeout(() => { if (window.client.spawn) window.client.spawn(vals.nick); }, 500);
                }
            }, 200);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const checkBody = setInterval(() => { if (document.body) { clearInterval(checkBody); init(); } }, 100);
})();
