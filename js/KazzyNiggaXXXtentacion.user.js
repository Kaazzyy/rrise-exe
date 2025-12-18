// ==UserScript==
// @name         Eclipse - Instant Sync
// @version      10.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
        const html = await response.text();

        const overlay = document.createElement('div');
        overlay.id = "eclipse-overlay";
        overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(5px);";
        overlay.innerHTML = html;
        document.body.appendChild(overlay);

        const btn = overlay.querySelector('#playBtn');
        const nickInp = overlay.querySelector('#nickname');
        const skinInp = overlay.querySelector('#skin');

        nickInp.value = localStorage.getItem('eclipse_nick') || "";
        skinInp.value = localStorage.getItem('eclipse_skin') || "";

        btn.onclick = () => {
            const nick = nickInp.value || "EclipsePlayer";
            const skin = skinInp.value || "";
            
            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', skin);
            
            // Forçar no storage para o próximo F5 (backup)
            localStorage.setItem('nickname', nick);
            localStorage.setItem('skinUrl', skin);

            if (window.client) {
                // 1. FORÇAR RE-LEITURA DE SETTINGS
                if (window.client.settings) {
                    window.client.settings.nickname = nick;
                    window.client.settings.skinUrl = skin;
                }

                // 2. CONECTAR SE NÃO ESTIVER CONECTADO
                if (window.client.connect && !window.client.isConnected) {
                    window.client.connect();
                }

                // 3. O PULO DO GATO: Chamar o spawn com os dados forçados
                // Esperamos um pouco para o socket abrir
                setTimeout(() => {
                    if (typeof window.client.spawn === 'function') {
                        console.log("[Eclipse] Forçando Spawn Direto...");
                        // No motor do Aetlis, o spawn aceita o nick como argumento
                        window.client.spawn(nick);
                    }
                }, 500);
            }

            overlay.remove();
            // Disparar um resize para o jogo acordar o motor gráfico
            window.dispatchEvent(new Event('resize'));
        };
    }

    const checkBody = setInterval(() => {
        if (document.body) {
            clearInterval(checkBody);
            init();
        }
    }, 100);
})();
