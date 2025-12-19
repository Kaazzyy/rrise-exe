// ==UserScript==
// @name         Eclipse - Control & Switch Fix v7.6
// @version      7.6.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function loadEclipse() {
        try {
            const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await response.text();

            const launcher = document.createElement('div');
            launcher.id = "eclipse-launcher";
            launcher.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.95); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
            launcher.innerHTML = html;
            document.body.appendChild(launcher);

            launcher.querySelector('#btn-activate').onclick = function() {
                const style = document.createElement('style');
                style.innerText = `
                    /* 1. FUNDO DOS MODALS */
                    .modal .wrapper, .modal .content, .modal .container, .fade-box {
                        background: #0d0d0f !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 30px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* 2. SLIDERS (Barra e Bolinha) */
                    input[type="range"] {
                        -webkit-appearance: none;
                        background: #1a1a1f !important;
                        border: 1px solid #333 !important;
                        border-radius: 10px;
                        height: 8px;
                    }
                    input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 18px;
                        height: 18px;
                        background: #7c3aed !important;
                        border-radius: 50%;
                        cursor: pointer;
                        box-shadow: 0 0 10px #7c3aed !important;
                    }

                    /* 3. P-SWITCH (Interruptores) */
                    .pretty.p-switch input:checked ~ .state label:after {
                        background-color: #7c3aed !important;
                        box-shadow: 0 0 12px #7c3aed !important;
                    }
                    .pretty.p-switch .state label:before {
                        border-color: #333 !important;
                        background: #16161a !important;
                    }

                    /* 4. BOLINHAS E NOTIFICAÇÕES (Roxo Vibrante) */
                    .notification-dot, .status-dot, .orange-dot, 
                    [style*="background-color: rgb(255, 165, 0)"], 
                    [style*="background: orange"] { 
                        background-color: #a855f7 !important; 
                        box-shadow: 0 0 15px #a855f7 !important; 
                    }

                    /* 5. TABS E SELETORES (Region/Tabs) */
                    .tabs-container, .region-selector {
                        border: 1px solid #7c3aed !important;
                        background: #111 !important;
                        border-radius: 8px !important;
                        overflow: hidden;
                    }
                    .tabs-container button.active, .region-selector .active {
                        background: #7c3aed !important;
                        color: white !important;
                    }

                    /* 6. SKINS CIRCULARES */
                    .skin-item, .perk-item, .skin-container {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                    }
                    .skin-item img { border-radius: 50% !important; }

                    /* 7. REMOVER BORDAS EXTERNAS */
                    .privacy-policy, .terms-link, .bottom-links, .social-links {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                    }

                    /* 8. BOTÃO PLAY */
                    .play-btn { 
                        background: linear-gradient(135deg, #7c3aed, #4f46e5) !important; 
                        border: none !important; 
                        box-shadow: 0 0 15px rgba(124, 58, 237, 0.5) !important;
                    }
                `;
                document.head.appendChild(style);
                launcher.remove();
            };
        } catch (err) { console.error(err); }
    }
    setTimeout(loadEclipse, 1000);
})();
