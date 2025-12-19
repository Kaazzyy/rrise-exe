// ==UserScript==
// @name         Eclipse Singularity - Ultimate Fix
// @version      28.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

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
            const style = document.createElement('style');
            style.innerText = `
                /* 1. MODALS */
                .modal .wrapper, .modal .content, .container, .fade-box {
                    background: #08080a !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 20px !important;
                }

                /* 2. PRIVACY / TERMS - LIMPANDO TUDO */
                .privacy-policy, .terms-link, .bottom-links, .social-links, 
                .policy-container, .terms-container, .text-muted, 
                [data-v-0eaeaf66] .bottom-links, a[href*="privacy"] {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    outline: none !important;
                }

                /* 3. FIX INTERNOS */
                .bind, .vanis-button { background: #111 !important; border: 1px solid #7c3aed !important; color: #7c3aed !important; }
                .p-switch input:checked + .state label:after { background-color: #7c3aed !important; }
            `;
            document.head.appendChild(style);

            // SYNC AGRESSIVO
            const vals = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                const placeholder = (input.placeholder || "").toLowerCase();
                const isDualContainer = input.closest('[data-v-dual-controls]') || placeholder.includes('minion');

                if (isDualContainer) {
                    if (placeholder.includes('nick')) input.value = vals.n2;
                    if (placeholder.includes('skin')) input.value = vals.s2;
                } else {
                    if (placeholder.includes('nick')) input.value = vals.n1;
                    if (placeholder.includes('skin')) input.value = vals.s1;
                }
                
                // Força o jogo a reconhecer que o texto mudou
                input.dispatchEvent(new Event('input', { bubbles: true }));
                input.dispatchEvent(new Event('change', { bubbles: true }));
                input.dispatchEvent(new Event('blur', { bubbles: true }));
            });

            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
