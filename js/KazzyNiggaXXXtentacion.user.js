// ==UserScript==
// @name         Eclipse - Full Modal Fix v7.0
// @version      7.0.0
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
                    /* 1. ESTILO GLOBAL PARA TODOS OS CONTAINERS E MODALS */
                    main-container, .main-container, box-container, .modal .wrapper, .modal .content {
                        background-color: #0d0d0f !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                        color: white !important;
                    }

                    /* 2. CORREÇÃO ESPECÍFICA PARA MODALS (Settings, Keyboard, etc.) */
                    .modal .container, .modal .section, .modal .header {
                        background: transparent !important;
                        border-color: #27272a !important;
                        color: white !important;
                    }

                    .modal .header { 
                        color: #7c3aed !important; 
                        font-weight: bold !important;
                        border-bottom: 1px solid rgba(124, 58, 237, 0.2) !important;
                    }

                    /* 3. REMOVER BORDAS DE LINKS E REDES SOCIAIS (O que pediste antes) */
                    .bottom-links, .social-links, .privacy-policy, .terms-link, .policy-container, [class*="footer"] {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                    }

                    /* 4. INPUTS E SLIDERS DENTRO DOS MODALS */
                    input[type="text"], input[type="range"], .bind, .vanis-button {
                        background: #16161a !important;
                        border: 1px solid #7c3aed !important;
                        color: white !important;
                        border-radius: 5px !important;
                    }

                    .vanis-button:hover { background: #7c3aed !important; }

                    /* 5. SKINS (Circulares) */
                    .skin-item, .perk-item, .skin-container {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                        overflow: hidden !important;
                    }
                    .skin-item img { border-radius: 50% !important; }

                    /* 6. HUD FIX */
                    #overlay { background: rgba(0,0,0,0.4) !important; backdrop-filter: none !important; }
                    .play-btn { background: #7c3aed !important; border: none !important; }
                `;
                document.head.appendChild(style);

                // Sincronização de Nick/Skin
                const data = {
                    n1: document.getElementById('main-nick').value,
                    s1: document.getElementById('main-skin').value
                };
                document.querySelectorAll('input').forEach(i => {
                    if (i.placeholder?.toLowerCase().includes('nick')) { i.value = data.n1; i.dispatchEvent(new Event('input', { bubbles: true })); }
                    if (i.placeholder?.toLowerCase().includes('skin')) { i.value = data.s1; i.dispatchEvent(new Event('input', { bubbles: true })); }
                });

                launcher.remove();
            };
        } catch (err) { console.error(err); }
    }
    setTimeout(loadEclipse, 1000);
})();
