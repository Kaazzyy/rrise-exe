// ==UserScript==
// @name         Eclipse Architect - v30.0.0
// @version      30.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // --- FUNÇÕES DE INTERFACE ---
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
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.9); backdrop-filter:blur(15px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            // --- 1. ESTILOS VISUAIS (CORREÇÃO DE MODALS E BORDAS) ---
            const style = document.createElement('style');
            style.innerText = `
                /* MODALS: Focar apenas no Wrapper para evitar bordas duplas */
                .modal .wrapper {
                    background: #08080a !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 20px !important;
                    box-shadow: 0 0 50px rgba(124, 58, 237, 0.2) !important;
                }
                /* Limpar estilos internos que causam conflito */
                .modal .content, .modal .container, .fade-box {
                    background: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                }

                /* TÍTULOS DOS MODALS */
                .modal .header, .section .header {
                    color: #7c3aed !important;
                    border-bottom: 1px solid #222 !important;
                    text-transform: uppercase;
                    font-weight: 800;
                }

                /* RESTAURO DA v5.6.4: REMOVER BORDAS DE LINKS/SOCIAL */
                [class*="social"], [class*="links"], .privacy-policy, .terms-link, .text-muted, 
                a[href*="privacy"], a[href*="terms"], .bottom-links {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    outline: none !important;
                }
                
                /* Força extra para remover a caixa específica que mostraste na print */
                div[style*="border"], div[class*="footer"] { border-color: transparent !important; }

                /* SWITCHES E SLIDERS */
                .p-switch input:checked + .state label:after { background-color: #7c3aed !important; }
                input[type="range"]::-webkit-slider-thumb { background: #7c3aed !important; }
                .bind, .vanis-button { background: #111 !important; border: 1px solid #7c3aed !important; color: #7c3aed !important; }
            `;
            document.head.appendChild(style);

            // --- 2. SYNC ENGINE (DUAL & MAIN) ---
            const data = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            // Função de injeção que vence o Vue.js
            const inject = () => {
                const inputs = document.querySelectorAll('input');
                inputs.forEach(i => {
                    // Tenta identificar se é Main ou Dual pelo placeholder ou localização
                    const ph = (i.placeholder || "").toLowerCase();
                    const parentHtml = i.parentElement ? i.parentElement.outerHTML : "";
                    
                    let val = null;

                    // Lógica de deteção melhorada
                    if (ph.includes('minion') || parentHtml.includes('dual')) {
                        if (ph.includes('nick')) val = data.n2;
                        if (ph.includes('skin')) val = data.s2;
                    } else if (ph.includes('nick') || ph.includes('name')) {
                         // Se não for minion, assume que é main
                         val = data.n1;
                    } else if (ph.includes('skin') || ph.includes('url')) {
                         val = data.s1;
                    }

                    if (val) {
                        i.value = val;
                        i.dispatchEvent(new Event('input', { bubbles: true }));
                        i.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                });
            };

            // Executa o SYNC várias vezes para garantir (0ms, 500ms, 1500ms)
            inject();
            setTimeout(inject, 500);
            setTimeout(inject, 1500);

            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
