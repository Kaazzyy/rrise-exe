// ==UserScript==
// @name         Eclipse - Anti-Duplicate Skin System
// @version      24.0.0
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

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
        const nInp = overlay.querySelector('#nickname');
        const sInp = overlay.querySelector('#skin');

        nInp.value = localStorage.getItem('eclipse_nick') || "";
        sInp.value = localStorage.getItem('eclipse_skin') || "";

        btn.onclick = () => {
            const nick = nInp.value || "EclipsePlayer";
            const newSkin = sInp.value.trim();
            
            localStorage.setItem('eclipse_nick', nick);
            localStorage.setItem('eclipse_skin', newSkin);

            if (newSkin !== "") {
                // 1. Verificar se a skin já existe em QUALQUER slot
                const allSkins = Array.from(document.querySelectorAll('.skin:not(.add-skin)'));
                let existingSlot = allSkins.find(img => img.src && img.src.includes(newSkin));

                if (existingSlot) {
                    // Se já existe, apenas clicamos nesse slot para selecioná-lo
                    console.log("[Eclipse] Skin já existe no inventário. Selecionando...");
                    existingSlot.click();
                } else {
                    // 2. Se não existe, verificar se o slot ATUAL precisa de proteção
                    const currentSelected = document.querySelector('.skin.selected, .skin-item.selected img');
                    const currentSrc = currentSelected ? currentSelected.src : "";
                    const isDefault = currentSrc.includes("aetlis1") || currentSrc === "";

                    if (!isDefault) {
                        // O slot atual tem uma skin importante, criamos novo slot
                        const addBtn = document.querySelector('.add-skin, img[src*="skin-add.png"]');
                        if (addBtn) {
                            console.log("[Eclipse] Criando novo slot para skin inédita...");
                            addBtn.click();
                        }
                    }
                }
            }

            // Delay para garantir que o slot correto (novo ou existente) está ativo
            setTimeout(() => {
                const realNick = document.querySelector('input[placeholder*="Nick"], #nickname:not(#eclipse-overlay #nickname)');
                const realSkin = document.querySelector('input[placeholder*="Skin"], #skinUrl, #skin:not(#eclipse-overlay #skin)');
                
                simulateTyping(realNick, nick);
                simulateTyping(realSkin, newSkin);

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
            }, 200);

            overlay.remove();
            window.dispatchEvent(new Event('resize'));
        };
    }

    const check = setInterval(() => { if (document.body) { clearInterval(check); init(); } }, 100);
})();
