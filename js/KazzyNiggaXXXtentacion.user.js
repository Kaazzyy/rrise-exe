// ==UserScript==
// @name         Eclipse - Zero-Footer v6.4
// @version      6.4.0
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
                    /* 1. BASE v6.1: ROXO EM TUDO */
                    main-container, [class*="container"], [class*="box"], .main-container {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* 2. REMOVER BORDAS APENAS DA POLÍTICA (TOPO) E LINKS (BAIXO) */
                    .privacy-policy, .terms-link, .policy-container,
                    .bottom-links, .social-links, [class*="footer"] {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                    }

                    /* 3. FIX DAS SKINS (AJUSTADO AO CÍRCULO) */
                    .skin-item, .perk-item, [class*="skin-container"] {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                        background: transparent !important;
                        box-shadow: 0 0 10px rgba(124, 58, 237, 0.3) !important;
                        overflow: hidden !important;
                    }
                    .skin-item img { border-radius: 50% !important; }

                    /* 4. HUD FIX (JOGO VISÍVEL) */
                    #overlay { background: rgba(0,0,0,0.4) !important; backdrop-filter: none !important; }

                    /* 5. BOTÕES */
                    .play-btn, .primary {
                        background: #7c3aed !important;
                        border: none !important;
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
