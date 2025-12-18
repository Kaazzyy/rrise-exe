// ==UserScript==
// @name         Eclipse - God Mode Sync
// @version      20.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // Função para forçar o valor em elementos do Vue.js
    function setNativeValue(el, value) {
        if (!el) return;
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(el, value);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    async function init() {
        const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await response.text();

        const overlay = document.createElement('div');
        overlay.id = "eclipse-overlay";
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px);";
        overlay.innerHTML = html;
        document.body.appendChild(overlay);

        const btn = overlay.querySelector('#playBtn');
        const inputs = {
            nick: overlay.querySelector('#nickname'),
            skin: overlay.querySelector('#skin'),
            dNick: overlay.querySelector('#dualNickname'),
            dSkin: overlay.querySelector('#dualSkin')
        };

        // Carregar do Storage
        Object.keys(inputs).forEach(k => inputs[k].value = localStorage.getItem('eclipse_'+k) || "");

        btn.onclick = () => {
            const vals = {
                nick: inputs.nick.value,
                skin: inputs.skin.value,
                dNick: inputs.dNick.value,
                dSkin: inputs.dSkin.value
            };
            
            Object.keys(vals).forEach(k => localStorage.setItem('eclipse_'+k, vals[k]));

            // 1. ADICIONAR SLOT DE SKIN (Se não existir)
            const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
            const hasSkin = Array.from(document.querySelectorAll('img.skin')).some(img => img.src.includes(vals.skin));
            if (vals.skin && !hasSkin && addBtn) addBtn.click();

            // 2. SINCRONIZAÇÃO AGRESSIVA
            setTimeout(() => {
                // Main Player
                setNativeValue(document.querySelector('input[placeholder*="Nickname"]:not(#eclipse-overlay input)'), vals.nick);
                setNativeValue(document.querySelector('input[placeholder*="Skin URL"]:not(#eclipse-overlay input)'), vals.skin);

                // Dual Player (Multibox)
                const dualFields = document.querySelectorAll('input[placeholder*="Dual"]');
                if (dualFields.length >= 2) {
                    setNativeValue(dualFields[0], vals.dNick);
                    setNativeValue(dualFields[1], vals.dSkin);
                }

                // 3. INJEÇÃO NO CORE DO CLIENTE
                if (window.client) {
                    // Sobrescrever propriedades de forma permanente nesta sessão
                    if (window.client.settings) {
                        Object.defineProperty(window.client.settings, 'nickname', { value: vals.nick, writable: true });
                        Object.defineProperty(window.client.settings, 'skinUrl', { value: vals.skin, writable: true });
                    }
                    
                    if (window.client.connect) window.client.connect();
                    setTimeout(() => { 
                        if (window.client.spawn) window.client.spawn(vals.nick); 
                    }, 400);
                }
            }, 300);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
