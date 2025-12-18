// ==UserScript==
// @name         Eclipse - Ultimate Skin & Dual Fix
// @version      16.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    function forceSync(el, val) {
        if (!el || !val) return;
        el.value = val;
        // Dispara todos os eventos para o Vue.js do jogo detetar a mudança
        ['input', 'change', 'blur', 'keyup'].forEach(t => el.dispatchEvent(new Event(t, { bubbles: true })));
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
        const ids = ['nickname', 'skin', 'dualNickname', 'dualSkin'];
        const inputs = {};
        ids.forEach(id => {
            inputs[id] = overlay.querySelector('#' + id);
            inputs[id].value = localStorage.getItem('eclipse_' + id) || "";
        });

        btn.onclick = () => {
            ids.forEach(id => localStorage.setItem('eclipse_' + id, inputs[id].value));

            const mainSkin = inputs.skin.value.trim();
            
            // 1. Verificar se a skin já existe para não criar duplicados
            const hasSkin = Array.from(document.querySelectorAll('img.skin')).some(img => img.src.includes(mainSkin));
            if (mainSkin !== "" && !hasSkin) {
                const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
                if (addBtn) addBtn.click();
            }

            setTimeout(() => {
                // 2. Sincronizar Player 1 (Seletores Reforçados)
                forceSync(document.querySelector('input[placeholder*="Nick"]:not(#eclipse-overlay input)'), inputs.nickname.value);
                forceSync(document.querySelector('input[placeholder*="Skin"]:not(#eclipse-overlay input)'), mainSkin);

                // 3. Sincronizar Dual (Multibox) - Procura profunda
                const dualFields = document.querySelectorAll('input[placeholder*="Dual"]');
                if (dualFields.length >= 2) {
                    forceSync(dualFields[0], inputs.dualNickname.value);
                    forceSync(dualFields[1], inputs.dualSkin.value);
                } else {
                    // Se não encontrar por placeholder, tenta pela classe que enviaste
                    const altDual = document.querySelectorAll('.dual-section-content input');
                    if (altDual.length >= 2) {
                        forceSync(altDual[0], inputs.dualNickname.value);
                        forceSync(altDual[1], inputs.dualSkin.value);
                    }
                }

                if (window.client) {
                    if (window.client.connect) window.client.connect();
                    setTimeout(() => { if (window.client.spawn) window.client.spawn(inputs.nickname.value); }, 400);
                }
            }, 250);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
