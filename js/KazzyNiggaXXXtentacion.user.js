// ==UserScript==
// @name         Eclipse - UI Overhaul Engine
// @version      30.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await response.text();

        const overlay = document.createElement('div');
        overlay.id = "eclipse-overlay";
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px);";
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
                dNick: fields.dNick.value.trim(),
                dSkin: fields.dSkin.value.trim()
            };

            Object.keys(vals).forEach(k => localStorage.setItem('eclipse_' + k, vals[k]));

            // --- ATIVAR NOVO VISUAL DO JOGO ---
            document.body.classList.add('eclipse-ingame-ui');

            // Lógica de Skins e Dual (Mantida da v28 que funcionou)
            if (vals.dNick) localStorage.setItem('dualNickname', vals.dNick);
            if (vals.dSkin) localStorage.setItem('dualSkinUrl', vals.dSkin);

            // Injeção de dados e Spawn
            setTimeout(() => {
                const nInp = document.querySelector('input[placeholder*="Nick"]:not(#eclipse-overlay input)');
                const sInp = document.querySelector('input[placeholder*="Skin"]:not(#eclipse-overlay input)');
                
                if (nInp) nInp.value = vals.nick;
                if (sInp && vals.skin.startsWith('http')) sInp.value = vals.skin;
                [nInp, sInp].forEach(el => el && el.dispatchEvent(new Event('input', { bubbles: true })));

                if (window.client) {
                    window.client.connect?.();
                    setTimeout(() => window.client.spawn?.(vals.nick), 500);
                }
            }, 200);

            overlay.remove();
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
