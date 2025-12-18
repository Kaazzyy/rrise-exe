// ==UserScript==
// @name         Eclipse - Smart Sync Filter
// @version      26.0.0
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

            // Lógica de Validação: Só processa skin se houver um link válido
            const isValidSkin = vals.skin.startsWith('http');

            if (isValidSkin) {
                const allSkins = Array.from(document.querySelectorAll('.skin:not(.add-skin)'));
                let existingSlot = allSkins.find(img => img.src && img.src.includes(vals.skin));

                if (existingSlot) {
                    existingSlot.click();
                } else {
                    const currentSelected = document.querySelector('.skin.selected, .skin-item.selected img');
                    const isDefault = currentSelected ? currentSelected.src.includes("aetlis1") : true;
                    if (!isDefault) {
                        const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
                        if (addBtn) addBtn.click();
                    }
                }
            }

            setTimeout(() => {
                // Sincronizar Nick sempre
                simulateTyping(document.querySelector('input[placeholder*="Nick"]:not(#eclipse-overlay input)'), vals.nick);
                
                // Sincronizar Skin APENAS se for válida (não apaga a atual se estiver vazio)
                if (isValidSkin) {
                    simulateTyping(document.querySelector('input[placeholder*="Skin"]:not(#eclipse-overlay input)'), vals.skin);
                }

                // Sincronizar Dual (Mesma lógica de segurança)
                const dualSection = document.querySelector('.dual-section:nth-of-type(2)');
                if (dualSection) {
                    const dNickField = dualSection.querySelector('input[placeholder="Dual Nickname"]');
                    const dSkinField = dualSection.querySelector('input[placeholder="Dual Skin URL"]');
                    
                    if (dNickField) simulateTyping(dNickField, vals.dNick);
                    if (dSkinField && vals.dSkin.startsWith('http')) simulateTyping(dSkinField, vals.dSkin);
                }

                if (window.client) {
                    if (window.client.settings) {
                        window.client.settings.nickname = vals.nick;
                        if (isValidSkin) window.client.settings.skinUrl = vals.skin;
                    }
                    if (window.client.connect) window.client.connect();
                    setTimeout(() => { if (window.client.spawn) window.client.spawn(vals.nick); }, 500);
                }
            }, 200);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
