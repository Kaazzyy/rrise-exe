// ==UserScript==
// @name         Eclipse Singularity - v28.2.0
// @version      28.2.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // FUNÇÕES DE INTERFACE
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
            const data = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            // 1. APLICAR CSS (FIX DE BORDAS v5.6.4 + MODALS)
            const style = document.createElement('style');
            style.innerText = `
                /* MODALS */
                .modal .wrapper, .modal .content, .container, .fade-box {
                    background: #08080a !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 20px !important;
                }
                
                /* FIX ABSOLUTO PARA PRIVACY/TERMS (Inspirado na v5.6.4) */
                .privacy-policy, .terms-link, .bottom-links, .social-links, 
                [class*="social"], [class*="links"], .text-muted, a[href*="privacy"] {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    padding: 0 !important;
                }

                /* REMOVER CONTORNO DO CONTAINER DE BAIXO */
                [data-v-0eaeaf66] .bottom-links { border: none !important; }

                /* FIX BOTÕES INTERNOS */
                .bind, .vanis-button { background: #111 !important; border: 1px solid #7c3aed !important; color: #7c3aed !important; }
            `;
            document.head.appendChild(style);

            // 2. FUNÇÃO DE SYNC REPETITIVA (Para vencer o Dual do jogo)
            const syncInputs = () => {
                document.querySelectorAll('input').forEach(i => {
                    const ph = (i.placeholder || "").toLowerCase();
                    const isDual = i.closest('[data-v-dual-controls]') || ph.includes('minion');

                    if (isDual) {
                        if (ph.includes('nick')) i.value = data.n2;
                        if (ph.includes('skin')) i.value = data.s2;
                    } else {
                        if (ph.includes('nick')) i.value = data.n1;
                        if (ph.includes('skin')) i.value = data.s1;
                    }
                    i.dispatchEvent(new Event('input', { bubbles: true }));
                });
            };

            // Executa agora e daqui a 500ms quando o menu do jogo abrir totalmente
            syncInputs();
            setTimeout(syncInputs, 500);

            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
