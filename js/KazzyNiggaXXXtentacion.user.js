// ==UserScript==
// @name         Eclipse - UI Master Fix v7.2
// @version      7.2.0
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
            launcher.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
            launcher.innerHTML = html;
            document.body.appendChild(launcher);

            launcher.querySelector('#btn-activate').onclick = function() {
                const style = document.createElement('style');
                style.innerText = `
                    /* 1. RECUPERAÇÃO DOS CONTAINERS PRINCIPAIS (v6.1 Style) */
                    main-container, .main-container, box-container, .modal .wrapper {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                        color: white !important;
                    }

                    /* 2. FIX PARA OS GRUPOS DE OPÇÕES (EU/NA/AS) - Sem bordas internas estranhas */
                    .tabs-container, .region-selector {
                        border: 1px solid #7c3aed !important;
                        border-radius: 8px !important;
                        overflow: hidden !important;
                        background: #16161a !important;
                        display: flex !important;
                    }

                    .tabs-container button, .region-selector > div {
                        border: none !important;
                        background: transparent !important;
                        margin: 0 !important;
                    }

                    .tabs-container button.active, .region-selector .active {
                        background: #7c3aed !important;
                        color: white !important;
                    }

                    /* 3. BOLAS DE STATUS (De Laranja para Roxo) */
                    .notification-dot, .status-dot, .orange-dot, 
                    [style*="background-color: rgb(255, 165, 0)"],
                    [style*="background: orange"],
                    .p-switch input:checked + .state label:after {
                        background-color: #7c3aed !important;
                        box-shadow: 0 0 10px #7c3aed !important;
                        border-color: #7c3aed !important;
                    }

                    /* 4. REMOVER BORDAS EXTERNAS (Policy, Social, etc.) */
                    .bottom-links, .social-links, .privacy-policy, .terms-link, [class*="footer"] {
                        border: none !important;
                        box-shadow: none !important;
                        background: transparent !important;
                    }

                    /* 5. SKINS (Circulares e Ajustadas) */
                    .skin-item, .perk-item, .skin-container {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                        background: transparent !important;
                    }
                    .skin-item img { border-radius: 50% !important; }

                    /* 6. MODALS E DEFINIÇÕES INTERNAS */
                    .modal .content, .modal .container { background: transparent !important; border: none !important; }
                    .modal .header { color: #7c3aed !important; }
                    input[type="range"]::-webkit-slider-thumb { background: #7c3aed !important; }

                    /* 7. HUD & PLAY */
                    #overlay { background: rgba(0,0,0,0.4) !important; backdrop-filter: none !important; }
                    .play-btn { background: #7c3aed !important; border: none !important; }
                `;
                document.head.appendChild(style);
                launcher.remove();
            };
        } catch (err) { console.error(err); }
    }
    setTimeout(loadEclipse, 1000);
})();
