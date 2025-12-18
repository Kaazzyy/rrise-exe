// ==UserScript==
// @name         Eclipse - Skin Protection System
// @version      23.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';
    const DEFAULT_SKIN_URL = "https://skins.aetlis.io/s/aetlis1";

    function simulateTyping(element, value) {
        if (!element) return;
        element.value = value;
        ['input', 'change', 'blur'].forEach(type => {
            element.dispatchEvent(new Event(type, { bubbles: true }));
        });
    }

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
            const newSkin = skinInp.value.trim() || "";
            
            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', newSkin);

            // --- LÓGICA DE PROTEÇÃO DE SKIN ---
            if (newSkin !== "") {
                // 1. Verificar a skin selecionada atualmente no jogo
                const currentSelectedSkinImg = document.querySelector('.skin.selected, .skin-item.selected img');
                const currentSkinSrc = currentSelectedSkinImg ? currentSelectedSkinImg.src : "";

                // 2. Se a skin atual NÃO for a default E for diferente da nova que queremos colocar
                const isDefault = currentSkinSrc.includes("aetlis1");
                const isAlreadySelected = currentSkinSrc.includes(newSkin);

                if (!isDefault && !isAlreadySelected) {
                    // Protegemos a skin antiga criando um novo slot
                    const addSkinBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
                    if (addSkinBtn) {
                        console.log("[Eclipse] Skin antiga detetada. Criando novo slot...");
                        addSkinBtn.click();
                    }
                }
            }

            // Aguarda um curto espaço de tempo para o slot (se criado) estar pronto
            setTimeout(() => {
                const realNickInput = document.querySelector('input[placeholder*="Nick"], #nickname:not(#eclipse-overlay #nickname)');
                const realSkinInput = document.querySelector('input[placeholder*="Skin"], #skinUrl, #skin:not(#eclipse-overlay #skin)');
                
                simulateTyping(realNickInput, nick);
                simulateTyping(realSkinInput, newSkin);

                if (window.client) {
                    if (window.client.settings) {
                        window.client.settings.nickname = nick;
                        window.client.settings.skinUrl = newSkin;
                    }
                    if (window.client.connect) window.client.connect();
                    
                    setTimeout(() => {
                        if (window.client.spawn) window.client.spawn(nick);
                    }, 500);
                }
            }, 150);

            overlay.remove();
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
