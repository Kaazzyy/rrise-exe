// ==UserScript==
// @name         Eclipse - HUD & Border Fix
// @version      6.0.0
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
        wrap.id = "eclipse-init";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center;";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            const data = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            const style = document.createElement('style');
            style.innerText = `
                /* 1. CORRIGIR HUD DESAPARECIDO: Removemos o background forçado do overlay */
                #overlay { background: rgba(0,0,0,0.4) !important; backdrop-filter: none !important; }
                
                /* 2. BORDAS DOS PAINÉIS: Apenas contorno, sem preencher por cima */
                main-container, .main-container, box-container {
                    background: #0d0d0f !important;
                    border: 1px solid #7c3aed !important;
                    box-shadow: 0 0 15px rgba(124, 58, 237, 0.2) !important;
                }

                /* 3. FIX DAS SKINS: Removemos o 'quadrado' em cima da imagem */
                .skin-item, .perk-item, .skin-container {
                    border: 1px solid #7c3aed !important;
                    background: transparent !important;
                }
                .skin-item img { border-radius: 50%; }

                /* 4. BOTÕES DE DEFINIÇÕES E PLAY */
                .tabs-container i, .header-icon, .tabs-container svg { color: #7c3aed !important; }
                .play-btn, button.primary, [style*="background-color: rgb(130, 30, 19)"] {
                    background-color: #7c3aed !important;
                    background-image: none !important;
                }

                /* 5. INPUTS DO JOGO */
                input.input-text { border: 1px solid #7c3aed !important; background: #000 !important; }
            `;
            document.head.appendChild(style);

            // Sincronizar dados
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
