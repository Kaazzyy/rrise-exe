// ==UserScript==
// @name         Eclipse Nebula - Hyper-Visual v8.5
// @version      8.5.0
// @match        *://aetlis.io/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        try {
            const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await res.text();

            const wrap = document.createElement('div');
            wrap.id = "eclipse-meta-launcher";
            wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; background:radial-gradient(circle at center, #101014 0%, #050505 100%); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(12px); animation: fadeIn 0.5s ease;";
            wrap.innerHTML = html;
            document.body.appendChild(wrap);

            wrap.querySelector('#btn-activate').onclick = () => {
                const style = document.createElement('style');
                style.innerText = `
                    /* 1. FORCE OVERHAUL - MODALS (Settings, Keyboard, Theme, etc) */
                    div[class*="modal"], .modal, .wrapper, .content, .fade-box, .container {
                        background: #0d0d0f !important;
                        background-image: none !important;
                        border: none !important;
                        box-shadow: none !important;
                    }

                    /* Cria a borda Nebula em volta do Modal real */
                    .modal .wrapper, .modal .content {
                        border: 2px solid #7c3aed !important;
                        border-radius: 20px !important;
                        box-shadow: 0 0 40px rgba(124, 58, 237, 0.4) !important;
                        position: relative !important;
                    }

                    /* 2. MENU PRINCIPAL (Lobbies, Skin, etc) */
                    main-container, .main-container, box-container, .left-container, .right-container, .center-container {
                        background: rgba(13, 13, 15, 0.95) !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 20px !important;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 15px rgba(124, 58, 237, 0.2) !important;
                        backdrop-filter: blur(10px) !important;
                    }

                    /* 3. CONTROLOS (O que faltava nos Modals) */
                    .p-switch input:checked + .state label:after, 
                    .pretty.p-switch input:checked ~ .state label:after {
                        background-color: #7c3aed !important;
                        box-shadow: 0 0 15px #7c3aed !important;
                    }
                    
                    input[type="range"] { -webkit-appearance: none; background: #222 !important; border-radius: 10px; height: 6px; }
                    input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none; width: 16px; height: 16px;
                        background: #7c3aed !important; border-radius: 50%; box-shadow: 0 0 10px #7c3aed;
                    }

                    /* 4. CABEÇALHOS E TEXTOS */
                    .modal .header, .section .header {
                        color: #7c3aed !important;
                        font-family: 'Plus Jakarta Sans', sans-serif !important;
                        text-transform: uppercase !important;
                        letter-spacing: 2px !important;
                        border-bottom: 1px solid #222 !important;
                        padding-bottom: 10px !important;
                    }

                    /* 5. REMOVER O LIXO VISUAL */
                    .bottom-links, .social-links, .privacy-policy, .terms-link { display: none !important; }

                    /* 6. PLAY BUTTON NEBULA */
                    .play-btn {
                        background: linear-gradient(90deg, #7c3aed, #4f46e5) !important;
                        border: none !important;
                        transition: 0.3s !important;
                        text-transform: uppercase !important;
                        font-weight: bold !important;
                    }
                    .play-btn:hover { transform: scale(1.05); filter: brightness(1.2); }
                `;
                document.head.appendChild(style);
                wrap.style.opacity = '0';
                setTimeout(() => wrap.remove(), 400);
            };
        } catch (e) { console.error(e); }
    }
    setTimeout(init, 500);
})();
