// ==UserScript==
// @name         Eclipse - Final Fix
// @version      4.2.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function init() {
        try {
            const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await res.text();

            const wrapper = document.createElement('div');
            wrapper.id = "eclipse-main-wrapper";
            wrapper.style.cssText = "position:fixed; inset:0; z-index:1000000; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(5px);";
            wrapper.innerHTML = html;
            document.body.appendChild(wrapper);

            const startBtn = wrapper.querySelector('#btn-activate');

            startBtn.onclick = () => {
                // Seleção Segura de Elementos
                const elNick = wrapper.querySelector('#nick-main');
                const elSkin = wrapper.querySelector('#skin-main');
                const elDNick = wrapper.querySelector('#nick-dual');
                const elDSkin = wrapper.querySelector('#skin-dual');

                if (!elNick || !elDNick) {
                    console.error("Erro: Campos do Eclipse não carregaram corretamente.");
                    return;
                }

                const data = {
                    nick: elNick.value,
                    skin: elSkin ? elSkin.value.trim() : "",
                    dNick: elDNick.value,
                    dSkin: elDSkin ? elDSkin.value.trim() : ""
                };

                // Salvar para o Jogo
                if (data.dNick) localStorage.setItem('dualNickname', data.dNick);
                if (data.dSkin) localStorage.setItem('dualSkinUrl', data.dSkin);

                // Injetar no Jogo (Nick Principal)
                const gameNickInput = document.querySelector('input[placeholder*="Nickname"], .input-text');
                if (gameNickInput) {
                    gameNickInput.value = data.nick;
                    gameNickInput.dispatchEvent(new Event('input', { bubbles: true }));
                }

                // Destrancar o Jogo
                wrapper.remove();
                console.log("Eclipse: UI Sincronizada.");
            };

        } catch (e) {
            console.error("Erro ao carregar Eclipse:", e);
        }
    }

    // Espera o Body e o Jogo estarem prontos
    const check = setInterval(() => {
        if (document.body && document.querySelector('#app')) {
            clearInterval(check);
            init();
        }
    }, 500);
})();
