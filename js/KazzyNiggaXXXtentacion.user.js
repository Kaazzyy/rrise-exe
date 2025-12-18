// ==UserScript==
// @name         Eclipse - Pixel Perfect v5.7
// @version      5.7.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function start() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const wrap = document.createElement('div');
        wrap.id = "eclipse-launcher";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            const data = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            // Injeção de CSS Corretiva
            const style = document.createElement('style');
            style.innerText = `
                /* 1. PAINÉIS PRINCIPAIS */
                main-container, .main-container, box-container {
                    background: #0d0d0f !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 12px !important;
                    box-shadow: 0 0 20px rgba(124, 58, 237, 0.4) !important;
                }

                /* 2. FIX PARA SKINS (Bordas Perfeitas) */
                .skin-container, .skin-item, .perk-item {
                    border: 2px solid #7c3aed !important;
                    border-radius: 10px !important;
                    background: #111 !important;
                    padding: 2px !important; /* Evita que a skin toque na borda */
                }

                /* 3. BOTÕES DE DEFINIÇÕES (Settings, Themes, etc) */
                .tabs-container button, .tab-item, [class*="tab-btn"] {
                    background: #16161a !important;
                    border: 1px solid #333 !important;
                    color: #7c3aed !important;
                    transition: 0.3s !important;
                }
                .tabs-container button.active, .tab-item.active {
                    background: #7c3aed !important;
                    color: white !important;
                    border-color: #7c3aed !important;
                }

                /* 4. BOTÃO PLAY E INTERFACE INFERIOR */
                .play-btn { background: linear-gradient(135deg, #7c3aed, #4f46e5) !important; }
                .bottom-links a { color: #7c3aed !important; text-shadow: 0 0 5px #7c3aed; }
                
                /* HUD CLEANER */
                #overlay { background: rgba(5,5,8,0.7) !important; }
            `;
            document.head.appendChild(style);

            // Sincronizar Nick/Skin
            if (data.n2) localStorage.setItem('dualNickname', data.n2);
            if (data.s2) localStorage.setItem('dualSkinUrl', data.s2);
            
            document.querySelectorAll('input').forEach(i => {
                if (i.placeholder?.includes('Nick')) { i.value = data.n1; i.dispatchEvent(new Event('input', { bubbles: true })); }
                if (i.placeholder?.includes('Skin')) { i.value = data.s1; i.dispatchEvent(new Event('input', { bubbles: true })); }
            });

            wrap.remove();
        };
    }
    setTimeout(start, 1000);
})();
