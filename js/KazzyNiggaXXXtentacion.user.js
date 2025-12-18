// ==UserScript==
// @name         Eclipse - Focused UI v6.2
// @version      6.2.0
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
                const data = {
                    n1: document.getElementById('main-nick').value,
                    s1: document.getElementById('main-skin').value,
                    n2: document.getElementById('dual-nick').value,
                    s2: document.getElementById('dual-skin').value
                };

                const style = document.createElement('style');
                style.innerText = `
                    #overlay { background: rgba(0,0,0,0.4) !important; backdrop-filter: none !important; }
                    
                    /* PAINÉIS PRINCIPAIS (Roxo e Preto) */
                    main-container, .main-container, box-container {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* REMOVER BORDAS DE LINKS E REDES SOCIAIS */
                    .bottom-links, .social-links, .terms-link, [class*="footer"], .policy-container, 
                    a[href*="discord"], a[href*="youtube"], a[href*="twitter"], .privacy-policy {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                    }

                    /* AJUSTE DAS SKINS (Círculo Perfeito) */
                    .skin-item, .perk-item, [class*="skin-container"] {
                        border: 1px solid #7c3aed !important;
                        border-radius: 50% !important;
                        background: transparent !important;
                        box-shadow: 0 0 8px rgba(124, 58, 237, 0.5) !important;
                        overflow: hidden !important;
                        padding: 0 !important;
                    }
                    
                    .skin-item img { border-radius: 50% !important; }

                    /* BOTÃO PLAY */
                    .play-btn, .primary {
                        background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
                        border: none !important;
                        border-radius: 8px !important;
                    }

                    /* MINIMAP (Mantemos apenas uma borda muito fina e discreta) */
                    #minimap, .minimap-container {
                        border: 1px solid rgba(124, 58, 237, 0.5) !important;
                        border-radius: 4px !important;
                    }
                `;
                document.head.appendChild(style);

                if (data.n2) localStorage.setItem('dualNickname', data.n2);
                if (data.s2) localStorage.setItem('dualSkinUrl', data.s2);
                
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
