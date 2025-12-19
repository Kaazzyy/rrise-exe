// ==UserScript==
// @name         Eclipse Nebula - v8.0
// @version      8.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const wrap = document.createElement('div');
        wrap.id = "nebula-wrap";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; background:radial-gradient(circle at center, rgba(20,20,25,0.8) 0%, rgba(5,5,5,1) 100%); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            const style = document.createElement('style');
            style.innerText = `
                /* UI DO JOGO - ESTILO NEBULA */
                main-container, .main-container, box-container, .modal .wrapper {
                    background: rgba(13, 13, 15, 0.9) !important;
                    backdrop-filter: blur(15px) !important;
                    border: 1px solid rgba(124, 58, 237, 0.5) !important;
                    border-radius: 20px !important;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.6) !important;
                }

                /* MODALS E DEFINIÇÕES */
                .modal .header { color: #7c3aed !important; font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; }
                
                /* CONTROLES (SLIDERS E SWITCHES) EM ROXO NEON */
                input[type="range"]::-webkit-slider-thumb { background: #a855f7 !important; box-shadow: 0 0 15px #7c3aed !important; }
                .pretty.p-switch input:checked ~ .state label:after { background-color: #a855f7 !important; box-shadow: 0 0 10px #7c3aed !important; }

                /* SKINS (Perfeição Circular) */
                .skin-item, .perk-item {
                    border: 2px solid rgba(124, 58, 237, 0.5) !important;
                    border-radius: 50% !important;
                    transition: 0.3s;
                }
                .skin-item:hover { border-color: #a855f7 !important; transform: scale(1.05); }

                /* REMOVER RUIDO VISUAL EXTERNO */
                .bottom-links, .social-links, .privacy-policy { border: none !important; background: transparent !important; }
                
                /* HUD CLEAN */
                #overlay { background: rgba(0,0,0,0.3) !important; }
                .play-btn { background: linear-gradient(90deg, #7c3aed, #4f46e5) !important; border-radius: 12px !important; border: none !important; }
            `;
            document.head.appendChild(style);
            wrap.style.opacity = '0';
            setTimeout(() => wrap.remove(), 500);
        };
    }
    setTimeout(init, 1000);
})();
