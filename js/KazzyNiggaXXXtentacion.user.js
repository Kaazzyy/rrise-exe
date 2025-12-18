// ==UserScript==
// @name         Eclipse - Deep UI Restored
// @version      5.2.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    const ECLIPSE_CSS = `
        #overlay { background: rgba(10, 10, 15, 0.9) !important; backdrop-filter: blur(20px) !important; }
        main-container { background: rgba(15, 15, 20, 0.95) !important; border: 2px solid #7c3aed !important; border-radius: 20px !important; }
        .play-btn, button.primary { background: linear-gradient(135deg, #7c3aed, #4f46e5) !important; border: none !important; }
        input.input-text { background: #000 !important; border: 1px solid #7c3aed !important; color: #fff !important; }
    `;

    async function start() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const wrap = document.createElement('div');
        wrap.id = "eclipse-launcher-v5";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; background:#000; display:flex; align-items:center; justify-content:center;";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            // 1. Injetar Visual
            const styleSheet = document.createElement("style");
            styleSheet.innerText = ECLIPSE_CSS;
            document.head.appendChild(styleSheet);

            // 2. Capturar TODOS os dados
            const data = {
                nick: wrap.querySelector('#nick-main').value,
                skin: wrap.querySelector('#skin-main').value,
                dNick: wrap.querySelector('#nick-dual').value,
                dSkin: wrap.querySelector('#skin-dual').value
            };

            // 3. Sincronizar Dual e Skin Principal
            if(data.dNick) localStorage.setItem('dualNickname', data.dNick);
            if(data.dSkin) localStorage.setItem('dualSkinUrl', data.dSkin);
            
            // Injetar Nick e Skin no Jogo Principal (Vue inputs)
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                if(input.placeholder && input.placeholder.includes('Nick')) {
                    input.value = data.nick;
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                }
                if(input.placeholder && input.placeholder.includes('Skin') && data.skin) {
                    input.value = data.skin;
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                }
            });

            wrap.remove();
        };
    }

    const check = setInterval(() => { if(document.body) { clearInterval(check); start(); } }, 500);
})();
