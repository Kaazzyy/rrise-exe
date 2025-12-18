// ==UserScript==
// @name         Eclipse - Deep Skin Injection
// @version      18.0.0
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
        ['input', 'change', 'blur', 'keyup', 'paste'].forEach(t => el.dispatchEvent(new Event(t, { bubbles: true })));
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
            
            // 1. Lógica de Adicionar Skin (Verificação melhorada)
            const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
            if (mainSkin !== "") {
                const existingSkins = Array.from(document.querySelectorAll('.skin')).map(i => i.src);
                if (!existingSkins.some(s => s.includes(mainSkin)) && addBtn) {
                    addBtn.click();
                }
            }

            setTimeout(() => {
                // 2. Sincronização de Inputs (P1 e Dual)
                forceSync(document.querySelector('input[placeholder*="Nick"]:not(#eclipse-overlay input)'), inputs.nickname.value);
                forceSync(document.querySelector('input[placeholder*="Skin"]:not(#eclipse-overlay input)'), mainSkin);

                const dualFields = document.querySelectorAll('input[placeholder*="Dual"]');
                if (dualFields.length >= 2) {
                    forceSync(dualFields[0], inputs.dualNickname.value);
                    forceSync(dualFields[1], inputs.dualSkin.value);
                }

                // 3. INJEÇÃO DE SEGURANÇA NO CLIENT (Resolve a skin default)
                if (window.client && window.client.settings) {
                    window.client.settings.skinUrl = mainSkin;
                    window.client.settings.skin = mainSkin;
                    // Se o jogo tiver função de carregar skin, forçamos aqui
                    if (typeof window.client.updateSkin === 'function') window.client.updateSkin(mainSkin);
                }

                if (window.client && window.client.connect) window.client.connect();
                
                setTimeout(() => { 
                    if (window.client && window.client.spawn) window.client.spawn(inputs.nickname.value); 
                }, 600);
            }, 300);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
