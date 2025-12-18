// ==UserScript==
// @name         Eclipse - Deep UI Injector
// @version      5.1.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // O CSS que vai "matar" o visual original do Aetlis
    const ECLIPSE_CSS = `
        #overlay {
            background: rgba(10, 10, 15, 0.9) !important;
            backdrop-filter: blur(20px) !important;
        }
        main-container {
            background: rgba(15, 15, 20, 0.95) !important;
            border: 2px solid #7c3aed !important;
            border-radius: 20px !important;
            box-shadow: 0 0 30px rgba(124, 58, 237, 0.3) !important;
        }
        .play-btn, button.primary, .btn-play {
            background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
            border: none !important;
            box-shadow: 0 5px 15px rgba(124, 58, 237, 0.5) !important;
        }
        input.input-text {
            background: #000 !important;
            border: 1px solid #7c3aed !important;
            color: #fff !important;
        }
        /* Esconder anúncios e lixo visual */
        social-links, .ad-container { display: none !important; }
    `;

    async function start() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const wrap = document.createElement('div');
        wrap.id = "eclipse-launcher";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; background:#000; display:flex; align-items:center; justify-content:center;";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            // 1. INJETAR O CSS NA PÁGINA
            const styleSheet = document.createElement("style");
            styleSheet.innerText = ECLIPSE_CSS;
            document.head.appendChild(styleSheet);

            // 2. SINCRONIZAR DADOS
            const dNick = wrap.querySelector('#nick-dual').value;
            const dSkin = wrap.querySelector('#skin-dual').value;
            if(dNick) localStorage.setItem('dualNickname', dNick);
            if(dSkin) localStorage.setItem('dualSkinUrl', dSkin);

            const nick = wrap.querySelector('#nick-main').value;
            const gameInput = document.querySelector('input[placeholder*="Nick"]');
            if(gameInput) {
                gameInput.value = nick;
                gameInput.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // 3. REMOVER LAUNCHER
            wrap.remove();
        };
    }

    const check = setInterval(() => { if(document.body) { clearInterval(check); start(); } }, 500);
})();
