// ==UserScript==
// @name         Eclipse - UI Force Overhaul
// @version      5.6.0
// @match        *://aetlis.io/*
// @run-at       document-end
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
                const data = {
                    n1: document.getElementById('main-nick').value,
                    s1: document.getElementById('main-skin').value,
                    n2: document.getElementById('dual-nick').value,
                    s2: document.getElementById('dual-skin').value
                };

                // Sync Dados
                if (data.n2) localStorage.setItem('dualNickname', data.n2);
                if (data.s2) localStorage.setItem('dualSkinUrl', data.s2);

                // Preencher Nick/Skin Principal
                document.querySelectorAll('input').forEach(i => {
                    if (i.placeholder?.toLowerCase().includes('nick')) { i.value = data.n1; i.dispatchEvent(new Event('input', { bubbles: true })); }
                    if (i.placeholder?.toLowerCase().includes('skin')) { i.value = data.s1; i.dispatchEvent(new Event('input', { bubbles: true })); }
                });

                // INJEÇÃO AGRESSIVA DE CSS
                const style = document.createElement('style');
                style.innerText = `
                    /* Alvos principais do Aetlis */
                    #overlay { background: rgba(5,5,8,0.8) !important; }
                    
                    /* Esta regra força o estilo em quase tudo que é painel */
                    main-container, [class*="container"], [class*="box"], .main-container {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* Forçar Botões */
                    button, .play-btn, [class*="btn-primary"], .primary {
                        background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
                        border: none !important;
                        color: white !important;
                        box-shadow: 0 4px 10px rgba(124, 58, 237, 0.5) !important;
                    }

                    /* Ajuste In-Game (Remove borrão ao jogar) */
                    body.playing #overlay { backdrop-filter: none !important; background: transparent !important; }
                `;
                document.head.appendChild(style);

                // Adiciona uma classe ao body para o CSS saber que estamos no modo Eclipse
                document.body.classList.add('eclipse-active');

                launcher.remove();
            };
        } catch (err) { console.error(err); }
    }

    setTimeout(loadEclipse, 1000);
})();
