// ==UserScript==
// @name         Eclipse Core UI - v34.0.0
// @version      34.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // Funções do Dashboard (Mantidas)
    window.eclipseTab = (id, el) => {
        document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById('tab-' + id).classList.add('active');
        el.classList.add('active');
    };

    window.checkSkin = (v, type) => {
        const imgId = type === 'main' ? 'preview-main-img' : 'preview-dual-img';
        const imgEl = document.getElementById(imgId);
        if (v && v.startsWith('http')) { imgEl.src = v; imgEl.classList.add('loaded'); }
        else { imgEl.classList.remove('loaded'); }
        const m = document.getElementById('main-skin').value, d = document.getElementById('dual-skin').value;
        const nav = document.getElementById('nav-skin-tab');
        if ((m && m.startsWith('http')) || (d && d.startsWith('http'))) nav.classList.remove('hidden');
        else nav.classList.add('hidden');
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
                /* 1. CONTAINER CENTRAL (Play / Nick / Skin) */
                .center-container, main-container > div:nth-child(2) {
                    background: #0a0a0c !important;
                    border: 2px solid #7c3aed !important;
                    border-radius: 25px !important;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(124,58,237,0.1) !important;
                }

                /* 2. CONTAINER DA DIREITA (Profile / Skins / Perks) */
                .right-container, [data-v-main-container] .right-side {
                    background: #0a0a0c !important;
                    border: 1px solid rgba(124, 58, 237, 0.5) !important;
                    border-radius: 20px !important;
                }

                /* 3. CONTAINER DA ESQUERDA (Regiões / Servidores) */
                .left-container, [data-v-main-container] .left-side {
                    background: #0a0a0c !important;
                    border: 1px solid rgba(124, 58, 237, 0.5) !important;
                    border-radius: 20px !important;
                }

                /* BOTÃO PLAY - Estilo Eclipse */
                #play-button, .play-btn, button.play {
                    background: #7c3aed !important;
                    border: none !important;
                    border-radius: 12px !important;
                    font-weight: 800 !important;
                    transition: 0.3s !important;
                }
                #play-button:hover { transform: scale(1.03); box-shadow: 0 0 20px #7c3aed; }

                /* INPUTS DENTRO DO MENU */
                .center-container input, .main-container input {
                    background: #111 !important;
                    border: 1px solid #222 !important;
                    border-radius: 10px !important;
                    color: #fff !important;
                }

                /* TABS DE SKINS / PERKS */
                .tabs .tab, .skin-tabs .tab-item {
                    border-bottom: 2px solid transparent !important;
                    color: #444 !important;
                }
                .tabs .tab.active, .skin-tabs .tab-item.active {
                    color: #7c3aed !important;
                    border-bottom-color: #7c3aed !important;
                }

                /* LIMPEZA PRIVACY (v5.6.4 Logic) */
                .privacy-tos, .bottom-links, social-links, [class*="social"], [class*="links"] {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                }
                
                /* Esconder Lobbies como solicitado */
                .lobbies-container, .lobby-list { display: none !important; }
            `;
            document.head.appendChild(style);

            // Sync Engine (Mantido para Dual funcionar)
            const vals = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

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
            doSync(); setTimeout(doSync, 500); setTimeout(doSync, 1500);
            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
