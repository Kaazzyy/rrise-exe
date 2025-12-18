// ==UserScript==
// @name         Eclipse - Insta-Load v5.4
// @version      5.4.0
// @description  Força o carregamento do launcher e injeta a nova UI
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // ATENÇÃO: Verifica se o link abaixo está exatamente igual ao teu ficheiro no GitHub
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function loadEclipse() {
        console.log("Eclipse: A tentar carregar interface...");
        try {
            const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            if (!response.ok) throw new Error("GitHub não respondeu.");
            const html = await response.text();

            const overlay = document.createElement('div');
            overlay.id = "eclipse-full-wrapper";
            overlay.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
            overlay.innerHTML = html;
            document.body.appendChild(overlay);

            overlay.querySelector('#btn-activate').onclick = function() {
                const n1 = document.getElementById('main-nick').value;
                const s1 = document.getElementById('main-skin').value;
                const n2 = document.getElementById('dual-nick').value;
                const s2 = document.getElementById('dual-skin').value;

                // Salvar dados do Dual
                if (n2) localStorage.setItem('dualNickname', n2);
                if (s2) localStorage.setItem('dualSkinUrl', s2);

                // Injetar dados no jogo original
                const inputs = document.querySelectorAll('input');
                inputs.forEach(i => {
                    if (i.placeholder && i.placeholder.includes('Nick')) {
                        i.value = n1;
                        i.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                    if (i.placeholder && i.placeholder.includes('Skin')) {
                        i.value = s1;
                        i.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                });

                // FORÇAR MUDANÇA DA UI DO JOGO (Deep Injection)
                const style = document.createElement('style');
                style.innerText = `
                    #overlay { background: rgba(8,8,12,0.9) !important; backdrop-filter: blur(20px) !important; display: flex !important; }
                    main-container { border: 2px solid #7c3aed !important; background: #0d0d0f !important; box-shadow: 0 0 20px rgba(124,58,237,0.3) !important; }
                    .play-btn, button.primary { background: #7c3aed !important; cursor: pointer !important; opacity: 1 !important; visibility: visible !important; }
                    input.input-text { background: #000 !important; border-color: #7c3aed !important; color: #fff !important; }
                `;
                document.head.appendChild(style);

                // Remove o launcher para libertar o jogo
                overlay.remove();
                console.log("Eclipse: Interface ativada.");
            };
        } catch (err) {
            console.error("Erro Eclipse:", err);
        }
    }

    // Aguarda 1 segundo e carrega o launcher
    setTimeout(loadEclipse, 1000);
})();
