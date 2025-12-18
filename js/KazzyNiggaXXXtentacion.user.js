// ==UserScript==
// @name         Eclipse - UI Precision & Colors v7.1
// @version      7.1.0
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
                    /* 1. FIX PARA OS GRUPOS DE OPÇÕES (EU/NA/AS) - Remove bordas duplas */
                    .tabs-container, .region-selector, .options-group {
                        display: flex !important;
                        border: 1px solid #7c3aed !important;
                        border-radius: 8px !important;
                        overflow: hidden !important;
                        background: #16161a !important;
                    }

                    .tabs-container > *, .region-selector > * {
                        border: none !important; /* Remove bordas individuais internas */
                        margin: 0 !important;
                        flex: 1;
                        text-align: center;
                    }

                    /* 2. MUDAR BOLAS LARANJAS PARA ROXO (Notificações/Status) */
                    .notification-dot, .status-dot, .orange-dot, 
                    [style*="background-color: rgb(255, 165, 0)"],
                    [style*="background: orange"] {
                        background-color: #7c3aed !important;
                        box-shadow: 0 0 10px #7c3aed !important;
                    }

                    /* 3. CONTAINERS PRINCIPAIS (Eclipse Style) */
                    main-container, .main-container, box-container, .modal .wrapper {
                        background-color: #0d0d0f !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* 4. MODALS INTERNOS (Settings/Keyboard) */
                    .modal .content, .modal .container {
                        background: transparent !important;
                        border: none !important;
                    }

                    .modal .header { color: #7c3aed !important; border-bottom: 1px solid #222 !important; }

                    /* 5. REMOVER BORDAS EXTERNAS (Privacy/Social) */
                    .bottom-links, .social-links, .privacy-policy, .terms-link {
                        border: none !important;
                        box-shadow: none !important;
                        background: transparent !important;
                    }

                    /* 6. SKINS CIRCULARES */
                    .skin-item, .perk-item, .skin-container {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                    }
                    .skin-item img { border-radius: 50% !important; }

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
