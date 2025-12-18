// ==UserScript==
// @name         Eclipse - Deep Dual Sync
// @version      27.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    function simulateTyping(element, value) {
        if (!element || value === undefined || value === "") return;
        element.focus();
        element.value = value;
        ['input', 'change', 'blur', 'keyup'].forEach(type => {
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

        Object.keys(fields).forEach(k => fields[k].value = localStorage.getItem('eclipse_' + k) || "");

        btn.onclick = () => {
            const vals = {
                nick: fields.nick.value,
                skin: fields.skin.value.trim(),
                dNick: fields.dNick.value,
                dSkin: fields.dSkin.value.trim()
            };
            
            Object.keys(vals).forEach(k => localStorage.setItem('eclipse_' + k, vals[k]));

            // Lógica de Skin Principal (v26 estável)
            const isValidSkin = vals.skin.startsWith('http');
            if (isValidSkin) {
                const allSkins = Array.from(document.querySelectorAll('.skin:not(.add-skin)'));
                let exists = allSkins.find(img => img.src && img.src.includes(vals.skin));
                if (exists) { exists.click(); } else {
                    const curr = document.querySelector('.skin.selected, .skin-item.selected img');
                    if (curr && !curr.src.includes("aetlis1")) {
                        const add = document.querySelector('.add-skin, img[src*="skin-add.png"]');
                        if (add) add.click();
                    }
                }
            }

            // --- SYNC PROCESS ---
            setTimeout(() => {
                // 1. Main Player
                simulateTyping(document.querySelector('input[placeholder*="Nickname"]:not(#eclipse-overlay input)'), vals.nick);
                if (isValidSkin) simulateTyping(document.querySelector('input[placeholder*="Skin URL"]:not(#eclipse-overlay input)'), vals.skin);

                // 2. DUAL PLAYER (A peça do puzzle)
                // Procuramos especificamente pelos atributos data que enviaste
                const dualInputs = document.querySelectorAll('input[data-v-dual-controls].input-text');
                
                if (dualInputs.length >= 2) {
                    console.log("[Eclipse] Dual Inputs encontrados!");
                    simulateTyping(dualInputs[0], vals.dNick); // Primeiro input: Nickname
                    simulateTyping(dualInputs[1], vals.dSkin); // Segundo input: Skin URL
                } else {
                    // Busca alternativa por placeholder exato
                    const dNickField = document.querySelector('input[placeholder="Dual Nickname"]');
                    const dSkinField = document.querySelector('input[placeholder="Dual Skin URL"]');
                    simulateTyping(dNickField, vals.dNick);
                    simulateTyping(dSkinField, vals.dSkin);
                }

                if (window.client && window.client.connect) {
                    window.client.connect();
                    setTimeout(() => { if (window.client.spawn) window.client.spawn(vals.nick); }, 500);
                }
            }, 250);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
