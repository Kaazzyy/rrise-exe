// ==UserScript==
// @name         Eclipse - Sync Fix
// @version      8.0.0
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
        document.documentElement.appendChild(overlay);

        const btn = overlay.querySelector('#playBtn');
        const nickInput = overlay.querySelector('#nickname');
        const skinInput = overlay.querySelector('#skin');

        nickInput.value = localStorage.getItem('eclipse_nick') || "";
        skinInput.value = localStorage.getItem('eclipse_skin') || "";

        btn.onclick = () => {
            const nick = nickInput.value || "EclipsePlayer";
            const skin = skinInput.value || "";
            
            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', skin);

            // --- NOVO SISTEMA DE INJEÇÃO DE DADOS ---
            if (window.client) {
                // 1. Atualiza as definições globais
                if (window.client.settings) {
                    window.client.settings.nickname = nick;
                    window.client.settings.skinUrl = skin;
                    window.client.settings.skin = skin; // Alguns clientes usam .skin em vez de .skinUrl
                }

                // 2. Procura o input original do jogo e injeta lá o texto (Sync Forçado)
                const originalInput = document.querySelector('input[placeholder*="Nickname"], #nick, .nick-input');
                if (originalInput) {
                    originalInput.value = nick;
                    originalInput.dispatchEvent(new Event('input', { bubbles: true }));
                }

                // 3. Executa a conexão e o spawn
                if (window.client.connect) window.client.connect();
                
                setTimeout(() => { 
                    if (window.client.spawn) {
                        // Forçamos o nick diretamente na chamada da função
                        window.client.spawn(nick); 
                    }
                }, 500);
            }

            overlay.remove();
        };
    }

    window.addEventListener('load', () => {
        setTimeout(init, 500);
    });
})();
