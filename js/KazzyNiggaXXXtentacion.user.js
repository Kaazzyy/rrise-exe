// ==UserScript==
// @name         Eclipse Obsidian Flux - v37.0.0
// @version      37.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    // --- LÓGICA DO MENU DE CONTEXTO ---
    const createContextMenu = () => {
        const menu = document.createElement('div');
        menu.id = 'eclipse-context-menu';
        menu.style.cssText = `
            position: fixed; display: none; z-index: 10000000;
            background: rgba(10, 10, 15, 0.95); border: 1px solid #7c3aed;
            border-radius: 12px; padding: 8px 0; min-width: 160px;
            backdrop-filter: blur(15px); box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `;
        document.body.appendChild(menu);
        return menu;
    };

    const contextMenu = createContextMenu();

    window.addEventListener('contextmenu', (e) => {
        // Verifica se clicou num player (geralmente uma imagem de skin ou o nick na lista)
        const target = e.target.closest('.skin-item, .player-row, .leaderboard-item, img[src*="skin"]');
        if (target) {
            e.preventDefault();
            const skinUrl = target.src || target.querySelector('img')?.src || "";
            
            contextMenu.innerHTML = `
                <style>
                    .ctx-item { padding: 10px 15px; color: #ccc; cursor: pointer; font-family: 'Outfit', sans-serif; font-size: 13px; transition: 0.2s; }
                    .ctx-item:hover { background: rgba(124, 58, 237, 0.2); color: #7c3aed; }
                    .ctx-sep { height: 1px; background: rgba(255,255,255,0.05); margin: 5px 0; }
                </style>
                <div class="ctx-item" onclick="window.eclipseAction('hide', '${skinUrl}')">Hide Skin</div>
                <div class="ctx-item" onclick="window.eclipseAction('show', '${skinUrl}')">Show Skin</div>
                <div class="ctx-sep"></div>
                <div class="ctx-item" onclick="window.eclipseAction('spectate')">Spectate</div>
                <div class="ctx-item" onclick="window.eclipseAction('copy', '${skinUrl}')">Copy Skin</div>
                <div class="ctx-item" onclick="window.eclipseAction('yoink', '${skinUrl}')">Yoink Skin</div>
                <div class="ctx-sep"></div>
                <div class="ctx-item" style="color:#ff4444" onclick="window.eclipseAction('block')">Block</div>
            `;
            
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${e.pageX}px`;
            contextMenu.style.top = `${e.pageY}px`;
        } else {
            contextMenu.style.display = 'none';
        }
    });

    window.addEventListener('click', () => contextMenu.style.display = 'none');

    // Funções das Ações
    window.eclipseAction = (type, url) => {
        switch(type) {
            case 'copy':
                navigator.clipboard.writeText(url);
                break;
            case 'hide':
                const style = document.createElement('style');
                style.innerText = `img[src="${url}"] { display: none !important; }`;
                document.head.appendChild(style);
                break;
            case 'yoink':
                // Abre o launcher e coloca a skin no campo da Main
                window.showLauncher();
                setTimeout(() => {
                    const input = document.getElementById('main-skin');
                    if(input) { input.value = url; window.checkSkin(url, 'main'); }
                }, 500);
                break;
            case 'spectate':
                if(confirm("Deseja entrar em modo Spectator neste player?")) {
                    // Lógica de spectate depende da API do jogo, simulando tecla de atalho
                    window.dispatchEvent(new KeyboardEvent('keydown', { key: 's' }));
                }
                break;
        }
    };

    // --- LAUNCHER E VISUAIS (FIX DO TRAÇO) ---
    async function showLauncher() {
        if (document.getElementById('eclipse-main-wrap')) return;
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();
        const wrap = document.createElement('div');
        wrap.id = "eclipse-main-wrap";
        wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.85); backdrop-filter:blur(15px);";
        wrap.innerHTML = html;
        document.body.appendChild(wrap);
        wrap.querySelector('#btn-activate').onclick = () => { applyStyles(); wrap.remove(); };
    }
    window.showLauncher = showLauncher;

    function applyStyles() {
        const style = document.createElement('style');
        style.innerText = `
            /* REMOVER O TRAÇO ACIMA DO MENU */
            .main-container::before, .main-container::after, hr, .separator { display: none !important; }
            
            /* TRIGGER DASHBOARD */
            #eclipse-launcher-trigger {
                position: fixed; top: 20px; right: 20px; z-index: 9999;
                width: 45px; height: 45px; background: rgba(124, 58, 237, 0.15);
                border: 1px solid #7c3aed; border-radius: 12px;
                display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; cursor: pointer;
            }
            .bar { width: 20px; height: 2px; background: white; }

            /* REDESIGN CONTAINERS */
            .center-container, .right-container, .left-container {
                background: rgba(8, 8, 12, 0.95) !important;
                border: 1px solid #7c3aed !important;
                border-radius: 25px 5px 25px 5px !important;
                box-shadow: 0 10px 40px rgba(0,0,0,0.8) !important;
            }

            /* FIX SKIN ITEM */
            .skin-item { border: 2px solid #7c3aed !important; border-radius: 50% !important; overflow: hidden; }

            /* PRIVACY CLEANUP */
            .privacy-tos, .bottom-links { border: none !important; background: transparent !important; }
        `;
        document.head.appendChild(style);
        
        if (!document.getElementById('eclipse-launcher-trigger')) {
            const btn = document.createElement('div');
            btn.id = 'eclipse-launcher-trigger';
            btn.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
            btn.onclick = showLauncher;
            document.body.appendChild(btn);
        }
    }

    setTimeout(() => { applyStyles(); showLauncher(); }, 1000);
})();
