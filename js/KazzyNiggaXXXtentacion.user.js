// ==UserScript==
// @name         Eclipse Singularity - Final Fix
// @version      28.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // FUNÇÕES GLOBAIS
    window.eclipseTab = (id, el) => {
        document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById('tab-' + id).classList.add('active');
        el.classList.add('active');
    };

    window.checkSkin = (v) => {
        const nav = document.getElementById('nav-skin-tab');
        const img = document.getElementById('skin-img-preview');
        if (v.startsWith('http')) { nav.classList.remove('hidden'); img.src = v; }
        else { nav.classList.add('hidden'); }
    };

    async function load() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();
        const wrap = document.createElement('div');
        wrap.id = "eclipse-main-wrap";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            const s = document.createElement('style');
            s.innerText = `
                /* 1. FIX MODALS & CONTAINERS */
                .modal .wrapper, .modal .content, .container, .fade-box {
                    background: #08080a !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 20px !important;
                }

                /* 2. REMOVER O CONTORNO QUE TAPA O PRIVACY/TERMS */
                .privacy-policy, .terms-link, .bottom-links, .social-links, [class*="policy"], [class*="terms"] {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    padding: 5px !important;
                }

                /* 3. FIX INTERNOS (BIND & SWITCH) */
                .bind, .vanis-button { background: #111 !important; border: 1px solid #7c3aed !important; color: #7c3aed !important; }
                .p-switch input:checked + .state label:after { background-color: #7c3aed !important; }
                input[type="range"]::-webkit-slider-thumb { background: #7c3aed !important; }
            `;
            document.head.appendChild(s);

            // SYNC INTELIGENTE (MAIN & DUAL)
            const n1 = document.getElementById('main-nick').value;
            const s1 = document.getElementById('main-skin').value;
            const n2 = document.getElementById('dual-nick').value;
            const s2 = document.getElementById('dual-skin').value;

            document.querySelectorAll('input').forEach(i => {
                const ph = i.placeholder?.toLowerCase() || "";
                // Sync Player 1
                if (ph.includes('nick') && !i.closest('.row')) { i.value = n1; i.dispatchEvent(new Event('input', {bubbles:true})); }
                if (ph.includes('skin') && !i.closest('.row')) { i.value = s1; i.dispatchEvent(new Event('input', {bubbles:true})); }
                // Sync Dual (Minion) - Procura por inputs dentro de containers de Dual
                if (ph.includes('minion') || i.closest('[data-v-dual-controls]')) {
                    if (ph.includes('nick')) i.value = n2;
                    if (ph.includes('skin')) i.value = s2;
                    i.dispatchEvent(new Event('input', {bubbles:true}));
                }
            });

            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
