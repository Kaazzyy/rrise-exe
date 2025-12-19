// ==UserScript==
// @name         Eclipse Obsidian Flux - v35.0.0
// @version      35.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // UI Logic (Dashboard)
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
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.85); backdrop-filter:blur(15px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            const style = document.createElement('style');
            style.innerText = `
                /* 1. VISUAL FLUIDO PARA MODALS (Settings, Keyboard, etc.) */
                .modal .wrapper {
                    background: rgba(10, 10, 15, 0.9) !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 24px !important;
                    backdrop-filter: blur(20px) !important;
                    box-shadow: 0 0 40px rgba(124, 58, 237, 0.2) !important;
                    animation: modalEntry 0.4s ease-out;
                }
                .modal .header { color: #7c3aed !important; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }

                /* 2. REDESIGN DOS CONTAINERS DO MENU PRINCIPAL (image_3d27c5.png) */
                .center-container, .right-container, .left-container, main-container > div {
                    background: linear-gradient(145deg, rgba(15,15,20,0.9), rgba(5,5,5,0.95)) !important;
                    border: 1px solid rgba(124, 58, 237, 0.4) !important;
                    border-radius: 30px 5px 30px 5px !important; /* Estilo assimétrico bonito */
                    backdrop-filter: blur(15px) !important;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.9) !important;
                    transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .center-container:hover { border-color: #7c3aed !important; transform: translateY(-2px); }

                /* 3. INPUTS E BOTÕES DO JOGO (Fluidez) */
                input[type="text"], input[type="password"], .center-container input {
                    background: rgba(0,0,0,0.4) !important;
                    border: 1px solid rgba(255,255,255,0.05) !important;
                    border-radius: 12px !important;
                    color: #7c3aed !important;
                    padding: 12px !important;
                    transition: 0.3s;
                }
                input:focus { border-color: #7c3aed !important; background: rgba(124,58,237,0.05) !important; outline: none; }

                #play-button, .play-btn {
                    background: linear-gradient(135deg, #7c3aed, #5b21b6) !important;
                    border-radius: 15px !important;
                    border: none !important;
                    box-shadow: 0 4px 15px rgba(124,58,237,0.4) !important;
                    transition: 0.3s;
                }
                #play-button:hover { transform: scale(1.05); box-shadow: 0 0 25px rgba(124,58,237,0.6); }

                /* 4. PRIVACY FIX (v5.6.4 Logic) */
                .privacy-tos, .bottom-links, social-links, [class*="social"], [class*="links"], a[href*="privacy"] {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                }

                /* 5. SKIN ITEMS (image_471090.png) */
                .skin-item, .skin-circle-game, img[src*="skin"] {
                    border: 2px solid #7c3aed !important;
                    border-radius: 50% !important;
                    padding: 2px;
                    background: #000;
                }

                @keyframes modalEntry { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
            `;
            document.head.appendChild(style);

            // Sync Logic
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
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                });
            };
            doSync(); [200, 500, 1500].forEach(t => setTimeout(doSync, t));
            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
