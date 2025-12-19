// ==UserScript==
// @name         Eclipse - Modal & Color Overhaul v7.5
// @version      7.5.0
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
                    /* 1. FUNDO E BORDAS DOS MODALS (Settings, Keyboard, etc) */
                    .modal .wrapper, .modal .content, .modal .container, .fade-box {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 30px rgba(124, 58, 237, 0.4) !important;
                        color: white !important;
                    }

                    /* 2. SUBSTITUIÇÃO DO LARANJA PELO CIANO NEON (Sliders, Switches, Dots) */
                    /* Sliders */
                    input[type="range"]::-webkit-slider-thumb { background: #00f2ff !important; box-shadow: 0 0 10px #00f2ff !important; }
                    input[type="range"] { background: #1a1a1f !important; }
                    
                    /* Switches (p-switch) */
                    .p-switch input:checked + .state label:after { background-color: #00f2ff !important; }
                    .pretty input:checked ~ .state label:after { background-color: #00f2ff !important; }
                    
                    /* Bolinhas de Notificação / Status */
                    .notification-dot, .status-dot, .orange-dot, 
                    [style*="background-color: rgb(255, 165, 0)"], 
                    [style*="background: orange"] { 
                        background-color: #00f2ff !important; 
                        box-shadow: 0 0 12px #00f2ff !important; 
                    }

                    /* 3. TEXTO E HEADERS DENTRO DOS MODALS */
                    .modal .header, .modal .title { 
                        color: #7c3aed !important; 
                        text-transform: uppercase; 
                        font-weight: bold;
                        border-bottom: 1px solid #222 !important;
                    }
                    .modal .section { border-bottom: 1px solid #1a1a1f !important; }

                    /* 4. BOTÕES INTERNOS E BINDS */
                    .bind, .vanis-button, .action-btn {
                        background: #16161a !important;
                        border: 1px solid #7c3aed !important;
                        color: #00f2ff !important;
                        border-radius: 6px !important;
                    }
                    .bind:hover, .vanis-button:hover { background: #7c3aed !important; color: white !important; }

                    /* 5. REMOVER BORDAS EXTERNAS (Policy, Social) */
                    .privacy-policy, .terms-link, .bottom-links, .social-links {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                    }

                    /* 6. FIX SKINS (Circulares) */
                    .skin-item, .perk-item, .skin-container {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                    }
                    .skin-item img { border-radius: 50% !important; }

                    /* 7. HUD FIX */
                    #overlay { background: rgba(0,0,0,0.5) !important; backdrop-filter: none !important; }
                    .play-btn { background: linear-gradient(135deg, #7c3aed, #00f2ff) !important; border: none !important; }
                `;
                document.head.appendChild(style);
                launcher.remove();
            };
        } catch (err) { console.error(err); }
    }
    setTimeout(loadEclipse, 1000);
})();
