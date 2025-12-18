// ==UserScript==
// @name         Eclipse - Deep Sync Fix
// @version      9.0.0
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
            
            // 1. Salvar no nosso sistema
            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', skin);

            // 2. FORÇAR NO SISTEMA DO JOGO (Chaves comuns em clones de Vanis/Aetlis)
            localStorage.setItem('nickname', nick);
            localStorage.setItem('skinUrl', skin);
            
            // Se o jogo usa um objeto de definições complexo:
            try {
                let gameSettings = JSON.parse(localStorage.getItem('settings') || '{}');
                gameSettings.nickname = nick;
                gameSettings.skinUrl = skin;
                localStorage.setItem('settings', JSON.stringify(gameSettings));
            } catch(e) {}

            // 3. SINCRONIZAR COM O MOTOR EM EXECUÇÃO
            if (window.client) {
                // Tenta injetar em todas as propriedades possíveis
                const targets = [window.client, window.client.settings, window.client.options];
                targets.forEach(t => {
                    if (t) {
                        t.nickname = nick;
                        t.skinUrl = skin;
                        t.skin = skin;
                    }
                });

                // 4. INTERCEPTAR O INPUT REAL (Simular digitação)
                const realInput = document.querySelector('input[placeholder*="Nick"], #nickname:not(#eclipse-overlay #nickname)');
                if (realInput) {
                    realInput.value = nick;
                    // Disparar a sequência completa de eventos que o jogo espera
                    ['input', 'change', 'blur'].forEach(ev => {
                        realInput.dispatchEvent(new Event(ev, { bubbles: true }));
                    });
                }

                // 5. EXECUTAR CONEXÃO E SPAWN
                if (window.client.connect) window.client.connect();
                
                setTimeout(() => {
                    if (window.client.spawn) {
                        console.log("[Eclipse] Enviando spawn forçado para:", nick);
                        window.client.spawn(nick);
                    }
                }, 800);
            }

            overlay.remove();
        };
    }

    // Usamos um intervalo curto para garantir que o body já existe mas o jogo ainda não "trancou" os dados
    const checkBody = setInterval(() => {
        if (document.body) {
            clearInterval(checkBody);
            init();
        }
    }, 100);
})();
