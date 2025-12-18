// ==UserScript==
// @name         Eclipse - Final Clean UI v6.5
// @version      6.5.0
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
                    /* 1. CONTAINERS PRINCIPAIS (Lobbies, Perfil, etc.) */
                    main-container, .main-container, box-container {
                        background-color: #0d0d0f !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 20px rgba(124, 58, 237, 0.3) !important;
                    }

                    /* 2. REMOVER BORDAS EXTERNAS (Fix para image_dc5469 e image_dc544c) */
                    .bottom-links, 
                    .social-links, 
                    .privacy-policy, 
                    .terms-link, 
                    .policy-container,
                    [class*="footer"],
                    [class*="terms"] {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                        padding: 5px !important;
                    }

                    /* 3. FIX DAS SKINS (Circulares e ajustadas - image_db6fe5) */
                    .skin-item, .perk-item, [class*="skin-container"] {
                        border: 1.5px solid #7c3aed !important;
                        border-radius: 50% !important;
                        background: transparent !important;
                        overflow: hidden !important;
                        box-shadow: 0 0 8px rgba(124, 58, 237, 0.4) !important;
                    }
                    .skin-item img { border-radius: 50% !important; }

                    /* 4. BOTÕES DE DEFINIÇÕES (Settings, etc.) */
                    .tabs-container button, .tab-btn {
                        background: #16161a !important;
                        color: #7c3aed !important;
                        border: 1px solid #333 !important;
                    }
                    .tabs-container button.active {
                        background: #7c3aed !important;
                        color: white !important;
                    }

                    /* 5. HUD E JOGO (image_db82ab) */
                    #overlay { background: rgba(0,0,0,0.4) !important; backdrop-filter: none !important; }
                    .play-btn { background: #7c3aed !important; border: none !important; }
                `;
                document.head.appendChild(style);

                // Sincronização
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
