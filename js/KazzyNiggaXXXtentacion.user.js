// ==UserScript==
// @name         Eclipse Singularity - v32.1.0
// @version      32.1.0
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

    window.checkSkin = (v, type) => {
        const imgId = type === 'main' ? 'preview-main-img' : 'preview-dual-img';
        const imgEl = document.getElementById(imgId);
        if (v && v.startsWith('http')) {
            imgEl.src = v;
            imgEl.classList.add('loaded');
        } else {
            imgEl.classList.remove('loaded');
        }
        
        const m = document.getElementById('main-skin').value;
        const d = document.getElementById('dual-skin').value;
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
                .modal .wrapper { background: #08080a !important; border: 2px solid #7c3aed !important; border-radius: 20px !important; }
                main-container, .main-container, .left-container, .right-container {
                    background: rgba(15, 15, 20, 0.85) !important;
                    border: 1px solid rgba(124, 58, 237, 0.6) !important;
                    border-radius: 24px !important;
                    backdrop-filter: blur(20px) !important;
                }
                [class*="social"], [class*="links"], .privacy-policy, .bottom-links { border: none !important; background: transparent !important; }
            `;
            document.head.appendChild(style);

            const vals = {
                n1: document.getElementById('main-nick').value,
                s1: document.getElementById('main-skin').value,
                n2: document.getElementById('dual-nick').value,
                s2: document.getElementById('dual-skin').value
            };

            const doSync = () => {
                const allInputs = document.querySelectorAll('input');
                allInputs.forEach(input => {
                    const ph = (input.placeholder || "").toLowerCase();
                    const isDual = input.closest('[data-v-dual-controls]') || ph.includes('minion');
                    
                    let target = null;
                    if (isDual) {
                        if (ph.includes('nick')) target = vals.n2;
                        if (ph.includes('skin')) target = vals.s2;
                    } else {
                        if (ph.includes('nick') || ph.includes('name')) target = vals.n1;
                        if (ph.includes('skin') || ph.includes('url')) target = vals.s1;
                    }

                    if (target !== null) {
                        // FORÇA TOTAL: Altera o valor e dispara múltiplos eventos
                        input.value = target;
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                        input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
                        input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
                    }
                });
            };

            // Injeta repetidamente para garantir que o Dual não "limpe" os campos
            doSync();
            [200, 500, 1000, 2000].forEach(t => setTimeout(doSync, t));

            wrap.remove();
        };
    }
    setTimeout(load, 1000);
})();
