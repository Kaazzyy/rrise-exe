// ==UserScript==
// @name         Eclipse Singularity - v28.0.0
// @version      28.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // FUNÇÕES GLOBAIS (O Cérebro)
    window.eclipseTab = function(tabId, el) {
        document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
        el.classList.add('active');
    };

    window.checkSkin = function(val) {
        const navSkin = document.getElementById('nav-skin-tab');
        const img = document.getElementById('skin-img-preview');
        if (val.length > 10 && val.startsWith('http')) {
            navSkin.classList.remove('hidden');
            img.src = val;
        } else {
            navSkin.classList.add('hidden');
        }
    };

    async function loadEclipse() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        const wrap = document.createElement('div');
        wrap.id = "eclipse-main-wrap";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        // AÇÃO AO ATIVAR
        wrap.querySelector('#btn-activate').onclick = function() {
            const style = document.createElement('style');
            style.innerText = `
                /* FIX MODALS (Settings, Keyboard, etc) */
                .modal .wrapper, .modal .content, .container, .fade-box {
                    background: #08080a !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 20px !important;
                    box-shadow: 0 0 30px rgba(124,58,237,0.3) !important;
                }
                
                /* FIX ELEMENTOS INTERNOS DO FICHEIRO ENVIADO */
                .bind, .vanis-button { background: #111 !important; border: 1px solid #7c3aed !important; color: #7c3aed !important; }
                .p-switch input:checked + .state label:after { background-color: #7c3aed !important; }
                input[type="range"]::-webkit-slider-thumb { background: #7c3aed !important; }

                /* ESCONDER ORIGINAIS */
                .bottom-links, .social-links, .privacy-policy { display: none !important; }
                
                /* HUD */
                .play-btn { background: #7c3aed !important; border: none !important; border-radius: 10px !important; }
            `;
            document.head.appendChild(style);
            
            // Sync Nick/Skin
            const nick = document.getElementById('main-nick').value;
            const skin = document.getElementById('main-skin').value;
            document.querySelectorAll('input').forEach(i => {
                if (i.placeholder?.toLowerCase().includes('nick')) { i.value = nick; i.dispatchEvent(new Event('input', {bubbles:true})); }
                if (i.placeholder?.toLowerCase().includes('skin')) { i.value = skin; i.dispatchEvent(new Event('input', {bubbles:true})); }
            });

            wrap.remove();
        };
    }

    setTimeout(loadEclipse, 800);
})();
