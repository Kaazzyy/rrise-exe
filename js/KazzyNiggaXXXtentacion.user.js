// ==UserScript==
// @name         Eclipse Obsidian Flux - v36.0.0
// @version      36.0.0
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

    async function showLauncher() {
        // Se já existir um launcher aberto, não abre outro
        if (document.getElementById('eclipse-main-wrap')) return;

        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();
        const wrap = document.createElement('div');
        wrap.id = "eclipse-main-wrap";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.85); backdrop-filter:blur(15px); animation: fadeIn 0.3s ease;";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);

        wrap.querySelector('#btn-activate').onclick = () => {
            applyStyles();
            doSync();
            wrap.remove();
        };
    }

    function applyStyles() {
        if (document.getElementById('eclipse-styles')) return;
        const style = document.createElement('style');
        style.id = 'eclipse-styles';
        style.innerText = `
            /* BOTÃO DE SETTINGS (Hambúrguer) */
            #eclipse-launcher-trigger {
                position: fixed; top: 20px; right: 20px; z-index: 9999;
                width: 45px; height: 45px; background: rgba(124, 58, 237, 0.2);
                border: 1px solid #7c3aed; border-radius: 12px;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                gap: 5px; cursor: pointer; transition: 0.3s; backdrop-filter: blur(10px);
            }
            #eclipse-launcher-trigger:hover { background: #7c3aed; transform: scale(1.1); box-shadow: 0 0 20px rgba(124, 58, 237, 0.5); }
            .bar { width: 22px; height: 2px; background: white; border-radius: 2px; }

            /* VISUAL FLUIDO PARA MODALS */
            .modal .wrapper {
                background: rgba(10, 10, 15, 0.9) !important;
                border: 2px solid #7c3aed !important;
                border-radius: 24px !important;
                backdrop-filter: blur(20px) !important;
                box-shadow: 0 0 40px rgba(124, 58, 237, 0.2) !important;
            }

            /* REDESIGN DOS CONTAINERS PRINCIPAIS (image_3d27c5.png) */
            .center-container, .right-container, .left-container, main-container > div {
                background: linear-gradient(145deg, rgba(15,15,20,0.9), rgba(5,5,5,0.95)) !important;
                border: 1px solid rgba(124, 58, 237, 0.4) !important;
                border-radius: 30px 5px 30px 5px !important;
                backdrop-filter: blur(15px) !important;
                box-shadow: 0 20px 50px rgba(0,0,0,0.9) !important;
            }

            #play-button, .play-btn {
                background: linear-gradient(135deg, #7c3aed, #5b21b6) !important;
                border-radius: 15px !important; box-shadow: 0 4px 15px rgba(124,58,237,0.4) !important;
            }

            /* PRIVACY CLEANUP */
            .privacy-tos, .bottom-links, social-links, [class*="social"], [class*="links"] { border: none !important; background: transparent !important; }
            
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `;
        document.head.appendChild(style);
        
        // Adicionar o botão visualmente
        if (!document.getElementById('eclipse-launcher-trigger')) {
            const btn = document.createElement('div');
            btn.id = 'eclipse-launcher-trigger';
            btn.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
            btn.onclick = showLauncher;
            document.body.appendChild(btn);
        }
    }

    function doSync() {
        const vals = { 
            n1: document.getElementById('main-nick')?.value || "", 
            s1: document.getElementById('main-skin')?.value || "",
            n2: document.getElementById('dual-nick')?.value || "", 
            s2: document.getElementById('dual-skin')?.value || "" 
        };
        
        const inject = () => {
            document.querySelectorAll('input').forEach(input => {
                const ph = (input.placeholder || "").toLowerCase();
                const isDual = input.closest('[data-v-dual-controls]') || ph.includes('minion');
                let target = isDual ? (ph.includes('nick') ? vals.n2 : (ph.includes('skin') ? vals.s2 : null)) :
                                      (ph.includes('nick') || ph.includes('name') ? vals.n1 : (ph.includes('skin') || ph.includes('url') ? vals.s1 : null));
                if (target) {
                    input.value = target;
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                }
            });
        };
        inject(); setTimeout(inject, 500);
    }

    // Inicialização
    setTimeout(() => {
        showLauncher();
        applyStyles(); // Garante que o botão e o estilo básico apareçam
    }, 1000);
})();
