// ==UserScript==
// @name         Eclipse - Precision UI v6.3
// @version      6.3.0
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
                    /* 1. VOLTAR COM O ROXO NOS CONTAINERS PRINCIPAIS (v5.6 Style) */
                    main-container, .main-container, box-container, .box-container {
                        background-color: #0d0d0f !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* 2. REMOVER APENAS O QUE PEDISTE (Sem Borda e Sem Roxo em volta) */
                    .bottom-links, 
                    .social-links, 
                    .privacy-policy, 
                    .terms-link, 
                    .policy-container,
                    [class*="footer"] a,
                    .social-links a {
                        border: none !important;
                        box-shadow: none !important;
                        background: transparent !important;
                        outline: none !important;
                    }

                    /* 3. AJUSTE DAS SKINS (Círculo Perfeito e Ajustado) */
                    .skin-item, .perk-item, .skin-container {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                        background: transparent !important;
                        overflow: hidden !important;
                        padding: 0 !important;
                        box-shadow: 0 0 10px rgba(124, 58, 237, 0.3) !important;
                    }
                    
                    .skin-item img { border-radius: 50% !important; }

                    /* 4. HUD FIX (Jogo Visível) */
                    #overlay { background: rgba(0,0,0,0.4) !important; backdrop-filter: none !important; }
                    
                    /* 5. BOTÃO PLAY */
                    .play-btn, .primary {
                        background: #7c3aed !important;
                        border: none !important;
                    }

                    /* 6. ÍCONES DO TOPO (Settings, etc) */
                    .tabs-container i, .header-icon { color: #7c3aed !important; }
                `;
                document.head.appendChild(style);

                // Sync Dados
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
