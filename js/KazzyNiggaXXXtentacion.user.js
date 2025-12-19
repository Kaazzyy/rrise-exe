// ==UserScript==
// @name         Eclipse v10 - The Architect
// @version      10.0.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function loadEclipse() {
        const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await res.text();

        // 1. ESCONDER O MENU ORIGINAL DO JOGO
        const gameStyle = document.createElement('style');
        gameStyle.innerText = `
            /* Esconde as caixas originais mas mantém o jogo a correr por trás */
            main-container, .main-container, .left-container, .right-container { 
                visibility: hidden !important; 
                opacity: 0 !important;
                pointer-events: none !important;
            }
            
            /* Novo Estilo para Modals (Settings, etc) - Estilo Dark Modern */
            .modal .wrapper {
                background: #08080a !important;
                border: 1px solid #7c3aed !important;
                border-radius: 20px !important;
                box-shadow: 0 0 50px rgba(0,0,0,0.9) !important;
            }
        `;
        document.head.appendChild(gameStyle);

        // 2. CRIAR O NOSSO DASHBOARD
        const container = document.createElement('div');
        container.id = "eclipse-main-wrapper";
        container.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); transition: 0.5s;";
        container.innerHTML = html;
        document.body.appendChild(container);

        // Lógica de Tabs
        window.switchTab = (tab) => {
            document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.getElementById('tab-' + tab).classList.add('active');
            event.target.classList.add('active');
        };

        // Ativação
        container.querySelector('#btn-activate').onclick = () => {
            const n1 = document.getElementById('main-nick').value;
            const s1 = document.getElementById('main-skin').value;

            // Envia os dados para os inputs invisíveis do jogo original
            document.querySelectorAll('input').forEach(i => {
                if (i.placeholder?.toLowerCase().includes('nick')) { i.value = n1; i.dispatchEvent(new Event('input', {bubbles:true})); }
                if (i.placeholder?.toLowerCase().includes('skin')) { i.value = s1; i.dispatchEvent(new Event('input', {bubbles:true})); }
            });

            // Mostra o jogo e remove o nosso menu
            gameStyle.innerText += ` main-container, .main-container { visibility: visible !important; opacity: 1 !important; pointer-events: all !important; } `;
            container.style.opacity = '0';
            setTimeout(() => container.remove(), 500);
        };
    }

    setTimeout(loadEclipse, 1000);
})();
