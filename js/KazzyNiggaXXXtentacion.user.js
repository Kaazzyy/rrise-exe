// ==UserScript==
// @name         Eclipse Singularity - Hybrid Fix
// @version      28.1.0
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
        if (v && v.startsWith('http')) { nav.classList.remove('hidden'); img.src = v; }
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

                /* 2. LOGICA v5.6.4 - REMOVER BORDAS DO PRIVACY/TERMS */
                [class*="social"], [class*="links"], .privacy-policy, .terms-link, .text-muted, a[href*="privacy"], a[href*="terms"] {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    border-radius: 0 !important;
                }

                /* 3. FIX INTERNOS */
                .bind, .vanis-button { background: #111 !important; border: 1px solid #7c3aed !important; color: #7c3aed !important; }
                .p-switch input:checked + .state label:after { background-color: #7c3aed !important; }
            `;
            document.head.appendChild(style);

            // SYNC DUAL + MAIN
            const d = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            // Função para injetar valor com força no Vue/React do jogo
            const forceInput = (el, val) => {
                if(!el) return;
                el.value = val;
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
                // Disparar o "input" novamente após um mini-delay para garantir o Dual
                setTimeout(() => el.dispatchEvent(new Event('input', { bubbles: true })), 50);
            };

            document.querySelectorAll('input').forEach(i => {
                const ph = (i.placeholder || "").toLowerCase();
                const isDual = i.closest('[data-v-dual-controls]') || ph.includes('minion');

                if (isDual) {
                    if (ph.includes('nick')) forceInput(i, d.n2);
                    if (ph.includes('skin')) forceInput(i, d.s2);
                } else {
                    if (ph.includes('nick')) forceInput(i, d.n1);
                    if (ph.includes('skin')) forceInput(i, d.s1);
                }
            });

            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
