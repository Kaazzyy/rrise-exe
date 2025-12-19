// ==UserScript==
// @name         Eclipse Cyber-Glass - v33.0.0
// @version      33.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // Interface Logic
    window.eclipseTab = (id, el) => {
        document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById('tab-' + id).classList.add('active');
        el.classList.add('active');
    };

    window.checkSkin = (v, type) => {
        const img = document.getElementById(type === 'main' ? 'preview-main-img' : 'preview-dual-img');
        if (v?.startsWith('http')) { img.src = v; img.classList.add('loaded'); }
        else { img.classList.remove('loaded'); }
        const m = document.getElementById('main-skin').value, d = document.getElementById('dual-skin').value;
        const nav = document.getElementById('nav-skin-tab');
        if (m?.startsWith('http') || d?.startsWith('http')) nav.classList.remove('hidden'); else nav.classList.add('hidden');
    };

    async function load() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();
        const wrap = document.createElement('div');
        wrap.id = "eclipse-main-wrap";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.92); backdrop-filter:blur(20px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            const style = document.createElement('style');
            style.innerText = `
                /* --- TRANSFORMAÇÃO DO MAIN CONTAINER (aetlisindex.html) --- */
                main-container, .main-container, .left-container, .right-container, .center-container {
                    background: rgba(8, 8, 12, 0.75) !important;
                    border: 1px solid #7c3aed !important;
                    border-radius: 40px 5px 40px 5px !important; /* Bordas Assimétricas */
                    backdrop-filter: blur(25px) brightness(0.6) !important;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.8), inset 0 0 20px rgba(124,58,237,0.1) !important;
                    padding: 25px !important;
                }

                /* MODALS (Settings, Keyboard, etc.) - Visual mais agressivo */
                .modal .wrapper {
                    background: #050507 !important;
                    border: 2.5px solid #7c3aed !important;
                    border-radius: 0 30px 0 30px !important;
                    box-shadow: 0 0 40px rgba(124, 58, 237, 0.3) !important;
                }

                /* REVESTIMENTO DE TABELAS E LISTAS (Lobbies) */
                .lobby-list, .server-list, .table-container {
                    background: rgba(255,255,255,0.02) !important;
                    border-radius: 10px !important;
                }

                /* REMOVER BORDAS DE PRIVACY (Legacy v5.6.4 logic) */
                .privacy-tos, .privacy-policy, .bottom-links, .social-links, 
                [class*="social"], [class*="links"], a[href*="privacy"] {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                }

                /* SKIN CIRCLES NO JOGO */
                .skin-item, .skin-circle-game {
                    border: 2px solid #7c3aed !important;
                    box-shadow: 0 0 15px rgba(124,58,237,0.2) !important;
                    transition: 0.3s !important;
                }
                .skin-item:hover { transform: translateY(-5px) !important; border-color: white !important; }

                /* BOTÕES E INPUTS DO JOGO */
                .vanis-button, #play-button, .play-btn {
                    background: linear-gradient(135deg, #7c3aed, #4c1d95) !important;
                    border-radius: 5px 15px 5px 15px !important;
                    border: none !important;
                    font-weight: 800 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 1px !important;
                }
            `;
            document.head.appendChild(style);

            // FORCE SYNC ENGINE
            const vals = { n1: document.getElementById('main-nick').value, s1: document.getElementById('main-skin').value,
                           n2: document.getElementById('dual-nick').value, s2: document.getElementById('dual-skin').value };

            const doSync = () => {
                document.querySelectorAll('input').forEach(input => {
                    const ph = (input.placeholder || "").toLowerCase();
                    const isDual = input.closest('[data-v-dual-controls]') || ph.includes('minion');
                    let target = isDual ? (ph.includes('nick') ? vals.n2 : (ph.includes('skin') ? vals.s2 : null)) :
                                          (ph.includes('nick') || ph.includes('name') ? vals.n1 : (ph.includes('skin') || ph.includes('url') ? vals.s1 : null));
                    if (target !== null) {
                        input.value = target;
                        ['input', 'change'].forEach(e => input.dispatchEvent(new Event(e, { bubbles: true })));
                    }
                });
            };
            doSync(); [200, 500, 1500, 3000].forEach(t => setTimeout(doSync, t));
            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
