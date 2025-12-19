// ==UserScript==
// @name         Eclipse Singularity - v31.0.0
// @version      31.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // --- FUNÇÕES DE INTERFACE ATUALIZADAS ---
    window.eclipseTab = (id, el) => {
        document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById('tab-' + id).classList.add('active');
        el.classList.add('active');
    };

    // Nova função checkSkin que suporta Main e Dual
    window.checkSkin = (v, type) => {
        const isUrl = v && v.startsWith('http');
        if (type === 'main') {
            const nav = document.getElementById('nav-skin-tab');
            const img = document.getElementById('skin-img-preview');
            if (isUrl) { nav.classList.remove('hidden'); img.src = v; }
            else { nav.classList.add('hidden'); }
        } else if (type === 'dual') {
            const box = document.getElementById('dual-skin-preview-box');
            const img = document.getElementById('dual-skin-img');
            if (isUrl) { box.classList.add('visible'); img.src = v; }
            else { box.classList.remove('visible'); }
        }
    };

    async function load() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();
        const wrap = document.createElement('div');
        wrap.id = "eclipse-main-wrap";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.9); backdrop-filter:blur(15px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            const style = document.createElement('style');
            style.innerText = `
                /* --- 1. ESTILO DOS MODALS (Settings, Keyboard) - MANTIDO v30 --- */
                .modal .wrapper {
                    background: #08080a !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 20px !important;
                    box-shadow: 0 0 50px rgba(124, 58, 237, 0.2) !important;
                }
                /* Limpar conteúdo interno dos modals */
                .modal .content, .modal .container, .fade-box {
                    background: transparent !important;
                    border: none !important; box-shadow: none !important;
                }
                .modal .header, .section .header { color: #7c3aed !important; border-bottom: 1px solid #222 !important; }

                /* --- 2. NOVO ESTILO PARA CONTAINERS PRINCIPAIS (Lobbies, Skin, etc.) --- */
                main-container, .main-container, .left-container, .right-container, .center-container {
                    background: rgba(15, 15, 20, 0.85) !important; /* Mais translúcido */
                    border: 1px solid rgba(124, 58, 237, 0.6) !important; /* Borda mais fina */
                    border-radius: 24px !important;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(124, 58, 237, 0.15) !important;
                    backdrop-filter: blur(20px) !important; /* Efeito de vidro forte */
                }

                /* --- 3. LIMPEZA DE BORDAS (Privacy/Terms) --- */
                [class*="social"], [class*="links"], .privacy-policy, .terms-link, .text-muted, a[href*="privacy"], a[href*="terms"], .bottom-links {
                    border: none !important; background: transparent !important; box-shadow: none !important; outline: none !important;
                }
                div[style*="border"], div[class*="footer"] { border-color: transparent !important; }

                /* --- 4. INTERNOS --- */
                .p-switch input:checked + .state label:after { background-color: #7c3aed !important; }
                input[type="range"]::-webkit-slider-thumb { background: #7c3aed !important; }
                .bind, .vanis-button { background: rgba(124,58,237,0.1) !important; border: 1px solid #7c3aed !important; color: #7c3aed !important; }
            `;
            document.head.appendChild(style);

            // SYNC ENGINE (Mantido da v30 para garantir funcionamento)
            const data = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            const inject = () => {
                document.querySelectorAll('input').forEach(i => {
                    const ph = (i.placeholder || "").toLowerCase();
                    const parentHtml = i.parentElement ? i.parentElement.outerHTML : "";
                    let val = null;
                    if (ph.includes('minion') || parentHtml.includes('dual')) {
                        if (ph.includes('nick')) val = data.n2;
                        if (ph.includes('skin')) val = data.s2;
                    } else if (ph.includes('nick') || ph.includes('name')) { val = data.n1; }
                    else if (ph.includes('skin') || ph.includes('url')) { val = data.s1; }

                    if (val) { i.value = val; i.dispatchEvent(new Event('input', { bubbles: true })); i.dispatchEvent(new Event('change', { bubbles: true })); }
                });
            };
            inject(); setTimeout(inject, 500); setTimeout(inject, 1500);

            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
