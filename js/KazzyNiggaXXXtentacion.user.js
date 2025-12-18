// ==UserScript==
// @name         Eclipse - UI Force Overhaul
// @version      5.6.2
// @match        *://aetlis.io/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // --- CONFIGURAÇÃO ---
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function loadEclipse() {
        try {
            // Adiciona timestamp para evitar cache
            const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await response.text();

            // --- CRIAR O LAUNCHER ---
            const launcher = document.createElement('div');
            launcher.id = "eclipse-launcher";
            launcher.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.95); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
            launcher.innerHTML = html;
            document.body.appendChild(launcher);

            // --- AÇÃO DO BOTÃO ACTIVATE ---
            launcher.querySelector('#btn-activate').onclick = function() {
                const data = {
                    n1: document.getElementById('main-nick').value,
                    s1: document.getElementById('main-skin').value,
                    n2: document.getElementById('dual-nick').value,
                    s2: document.getElementById('dual-skin').value
                };

                // Salvar dados Dual
                if (data.n2) localStorage.setItem('dualNickname', data.n2);
                if (data.s2) localStorage.setItem('dualSkinUrl', data.s2);

                // Preencher inputs do jogo
                document.querySelectorAll('input').forEach(i => {
                    if (i.placeholder?.toLowerCase().includes('nick')) { 
                        i.value = data.n1; 
                        i.dispatchEvent(new Event('input', { bubbles: true })); 
                    }
                    if (i.placeholder?.toLowerCase().includes('skin')) { 
                        i.value = data.s1; 
                        i.dispatchEvent(new Event('input', { bubbles: true })); 
                    }
                });

                // --- INJEÇÃO DE CSS (CORRIGIDO) ---
                const style = document.createElement('style');
                style.innerText = `
                    /* 1. Fundo escuro */
                    #overlay { background: rgba(5,5,8,0.8) !important; }
                    
                    /* 2. REGRA GERAL (Aplica o roxo nos painéis principais) */
                    main-container, [class*="container"], [class*="box"], .main-container {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* 3. EXCEÇÕES (REMOVE O ROXO ONDE NÃO DEVE ESTAR) */
                    
                    /* SKINS: Remove borda da caixa de seleção de skins */
                    [class*="skin"], #skin-list, .skin-list-container {
                        border: none !important;
                        box-shadow: none !important;
                        background: transparent !important;
                    }

                    /* PRIVACY / TERMS / FOOTER: Remove borda dos links lá em baixo */
                    /* Remove do container que segura os links (usando :has para detetar se tem link de privacy) */
                    div:has(> a[href*="privacy"]), 
                    div:has(> a[href*="terms"]),
                    div:has(> .text-muted),
                    footer, .footer, #footer,
                    [class*="social"], [class*="links"] {
                        border: none !important;
                        box-shadow: none !important;
                        background: transparent !important;
                    }

                    /* Remove borda direta dos links de texto */
                    a[href*="privacy"], a[href*="terms"], .text-muted {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                    }

                    /* 4. BOTÕES (Mantém o estilo bonito) */
                    button, .play-btn, [class*="btn-primary"], .primary {
                        background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
                        border: none !important;
                        color: white !important;
                        box-shadow: 0 4px 10px rgba(124, 58, 237, 0.5) !important;
                    }

                    /* 5. IN-GAME */
                    body.playing #overlay { 
                        backdrop-filter: none !important; 
                        background: transparent !important; 
                    }
                `;
                document.head.appendChild(style);

                document.body.classList.add('eclipse-active');
                launcher.remove();
            };
        } catch (err) { console.error("Erro Eclipse:", err); }
    }

    setTimeout(loadEclipse, 1000);
})();
