// ==UserScript==
// @name         Eclipse - UI & HUD Fix
// @version      5.5.0
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

            const overlay = document.createElement('div');
            overlay.id = "eclipse-init-screen";
            overlay.style.cssText = "position:fixed; inset:0; z-index:9999999; background:#000; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
            overlay.innerHTML = html;
            document.body.appendChild(overlay);

            overlay.querySelector('#btn-activate').onclick = function() {
                const n1 = document.getElementById('main-nick').value;
                const s1 = document.getElementById('main-skin').value;
                const n2 = document.getElementById('dual-nick').value;
                const s2 = document.getElementById('dual-skin').value;

                // Sync Duals
                if (n2) localStorage.setItem('dualNickname', n2);
                if (s2) localStorage.setItem('dualSkinUrl', s2);

                // Injetar no Jogo (Busca profunda de inputs)
                document.querySelectorAll('input').forEach(i => {
                    if (i.placeholder?.includes('Nick')) { i.value = n1; i.dispatchEvent(new Event('input', { bubbles: true })); }
                    if (i.placeholder?.includes('Skin')) { i.value = s1; i.dispatchEvent(new Event('input', { bubbles: true })); }
                });

                // INJEÇÃO DE CSS INTELIGENTE
                const style = document.createElement('style');
                style.innerText = `
                    /* Só aplica o borrão se o menu estiver visível */
                    body:not(.playing) #overlay[style*="display: block"], 
                    body:not(.playing) #overlay:not([style*="display: none"]) {
                        background: rgba(8,8,12,0.8) !important;
                        backdrop-filter: blur(15px) !important;
                        display: flex !important;
                    }
                    
                    /* Remove borrão quando o menu some */
                    #overlay[style*="display: none"] { backdrop-filter: none !important; }

                    /* Estilo dos painéis */
                    main-container, box-container { 
                        border: 2px solid #7c3aed !important; 
                        background: #0d0d0f !important; 
                        box-shadow: 0 0 20px rgba(124,58,237,0.3) !important;
                    }

                    .play-btn, button.primary { background: #7c3aed !important; }
                `;
                document.head.appendChild(style);

                overlay.remove();
            };
        } catch (err) { console.error(err); }
    }

    setTimeout(loadEclipse, 1000);
})();
