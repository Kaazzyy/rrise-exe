// ==UserScript==
// @name         Eclipse Nebula - Full Deep Overhaul v9.0
// @version      9.0.0
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // 1. INJETAR ESTILOS GLOBAIS IMEDIATAMENTE
    const nebulaStyle = document.createElement('style');
    nebulaStyle.id = "nebula-core-theme";
    nebulaStyle.innerText = `
        /* --- FORÇA TOTAL NOS CONTAINERS DO JOGO --- */
        main-container, .main-container, .box-container, .left-container, .right-container, .center-container,
        .modal .wrapper, .modal .content, .modal .container, .fade-box {
            background: rgba(10, 10, 12, 0.98) !important;
            background-image: none !important;
            border: 2px solid #7c3aed !important;
            border-radius: 24px !important;
            box-shadow: 0 0 40px rgba(124, 58, 237, 0.3) !important;
            backdrop-filter: blur(15px) !important;
            color: white !important;
        }

        /* --- FIX PARA ELEMENTOS INTERNOS DOS MODALS (SETTINGS/THEME) --- */
        .modal .header, .modal .title, .section .header {
            color: #7c3aed !important;
            text-transform: uppercase !important;
            font-weight: 800 !important;
            border-bottom: 1px solid #1a1a1f !important;
        }

        /* --- SLIDERS E SWITCHES (O QUE ESTAVA EM LARANJA) --- */
        input[type="range"]::-webkit-slider-thumb { background: #7c3aed !important; box-shadow: 0 0 10px #7c3aed !important; }
        .p-switch input:checked + .state label:after { background-color: #7c3aed !important; box-shadow: 0 0 10px #7c3aed !important; }

        /* --- REMOVER LIXO (BOTÕES SOCIAIS E TERMOS) --- */
        .bottom-links, .social-links, .privacy-policy, .terms-link, .policy-container {
            display: none !important;
        }

        /* --- SKINS CIRCULARES --- */
        .skin-item, .perk-item, .skin-container {
            border: 2px solid #7c3aed !important;
            border-radius: 50% !important;
        }
        .skin-item img { border-radius: 50% !important; }

        /* --- BOTÃO PLAY --- */
        .play-btn {
            background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
            border: none !important;
            border-radius: 12px !important;
        }
    `;

    async function loadEclipse() {
        try {
            const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await res.text();

            const launcher = document.createElement('div');
            launcher.id = "eclipse-nebula-launcher";
            launcher.style.cssText = "position:fixed; inset:0; z-index:9999999; background:#050505; display:flex; align-items:center; justify-content:center; animation: fadeIn 0.4s ease;";
            launcher.innerHTML = html;
            document.body.appendChild(launcher);

            launcher.querySelector('#btn-activate').onclick = function() {
                document.head.appendChild(nebulaStyle);
                
                // Sincronizar dados com o jogo
                const n1 = document.getElementById('main-nick').value;
                const s1 = document.getElementById('main-skin').value;
                document.querySelectorAll('input').forEach(i => {
                    if (i.placeholder?.toLowerCase().includes('nick')) { i.value = n1; i.dispatchEvent(new Event('input', {bubbles:true})); }
                    if (i.placeholder?.toLowerCase().includes('skin')) { i.value = s1; i.dispatchEvent(new Event('input', {bubbles:true})); }
                });

                launcher.style.opacity = '0';
                setTimeout(() => launcher.remove(), 400);
            };
        } catch (e) { console.error(e); }
    }

    // Esperar o jogo carregar para mostrar o Launcher
    window.addEventListener('load', () => setTimeout(loadEclipse, 500));
})();
