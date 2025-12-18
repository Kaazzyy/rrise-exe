// ==UserScript==
// @name         Eclipse - Final Fix v5.3
// @version      5.3.0
// @match        *://aetlis.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function start() {
        try {
            const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await res.text();

            const wrap = document.createElement('div');
            wrap.id = "eclipse-wrapper";
            wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(5px);";
            wrap.innerHTML = html;
            document.body.appendChild(wrap);

            wrap.querySelector('#eclipse-launch-btn').onclick = () => {
                // 1. Capturar elementos de forma segura para evitar erro 'null'
                const n1 = wrap.querySelector('#main-nick');
                const s1 = wrap.querySelector('#main-skin');
                const n2 = wrap.querySelector('#dual-nick');
                const s2 = wrap.querySelector('#dual-skin');

                if (!n1 || !s1) return alert("Erro: Ficheiro HTML do GitHub desatualizado.");

                // 2. Salvar Duals no LocalStorage
                if (n2.value) localStorage.setItem('dualNickname', n2.value);
                if (s2.value) localStorage.setItem('dualSkinUrl', s2.value);

                // 3. Injetar no Jogo (Nick e Skin Principal)
                const gameInputs = document.querySelectorAll('input');
                gameInputs.forEach(i => {
                    if (i.placeholder && i.placeholder.includes('Nick')) {
                        i.value = n1.value;
                        i.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                    if (i.placeholder && i.placeholder.includes('Skin')) {
                        i.value = s1.value;
                        i.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                });

                // 4. Injetar o CSS de Overhaul para mudar a UI do jogo
                const style = document.createElement('style');
                style.innerText = `
                    #overlay { background: rgba(5,5,10,0.9) !important; backdrop-filter: blur(15px) !important; }
                    main-container { border: 2px solid #7c3aed !important; background: #0d0d0f !important; }
                    .play-btn, button.primary { background: #7c3aed !important; cursor: pointer !important; opacity: 1 !important; visibility: visible !important; }
                `;
                document.head.appendChild(style);

                // 5. REMOVER O WRAPPER (Liberta o botão de Play original)
                wrap.remove();
                console.log("Eclipse: UI Ativada com Sucesso.");
            };
        } catch (e) { console.error("Falha ao carregar Eclipse:", e); }
    }

    const check = setInterval(() => { if (document.body && document.querySelector('main-container')) { clearInterval(check); start(); } }, 500);
})();
