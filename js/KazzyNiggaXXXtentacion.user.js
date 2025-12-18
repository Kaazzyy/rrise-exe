// ==UserScript==
// @name         Eclipse - UI Force Overhaul
// @version      5.6.1
// @match        *://aetlis.io/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Link direto para o teu HTML no GitHub
    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';

    async function loadEclipse() {
        try {
            // Adiciona timestamp para evitar cache (?t=...)
            const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await response.text();

            // Cria o Launcher (Menu Inicial Eclipse)
            const launcher = document.createElement('div');
            launcher.id = "eclipse-launcher";
            launcher.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.95); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
            launcher.innerHTML = html;
            document.body.appendChild(launcher);

            // Lógica do botão "Activate"
            launcher.querySelector('#btn-activate').onclick = function() {
                const data = {
                    n1: document.getElementById('main-nick').value,
                    s1: document.getElementById('main-skin').value,
                    n2: document.getElementById('dual-nick').value,
                    s2: document.getElementById('dual-skin').value
                };

                // Salvar dados do Dual no LocalStorage (para o script do Dual ler depois se necessário)
                if (data.n2) localStorage.setItem('dualNickname', data.n2);
                if (data.s2) localStorage.setItem('dualSkinUrl', data.s2);

                // Preencher Nick/Skin Principal no Aetlis automaticamente
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

                // --- INJEÇÃO DE CSS (ESTILO ECLIPSE) ---
                const style = document.createElement('style');
                style.innerText = `
                    /* Fundo escuro atrás do jogo */
                    #overlay { background: rgba(5,5,8,0.8) !important; }
                    
                    /* ESTILO PRINCIPAL (Mantém as bordas roxas nos painéis principais) */
                    main-container, [class*="container"], [class*="box"], .main-container {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* --- CORREÇÃO: REMOVER BORDAS DO RODAPÉ, SOCIAIS E PRIVACIDADE --- */
                    /* Esta regra cancela o roxo para as partes de baixo (Privacy, Discord, etc) */
                    footer, .footer, #footer,
                    [class*="social"], [class*="links"], 
                    .text-muted, a[href*="privacy"], a[href*="terms"] {
                        background: transparent !important;
                        border: none !important;
                        box-shadow: none !important;
                    }

                    /* Remove borda se houver containers específicos dentro do footer */
                    footer [class*="container"], .footer [class*="container"] {
                         border: none !important;
                         box-shadow: none !important;
                         background: transparent !important;
                    }
                    /* ------------------------------------------------------------- */

                    /* Estilo dos Botões (Play, Settings, etc) */
                    button, .play-btn, [class*="btn-primary"], .primary {
                        background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
                        border: none !important;
                        color: white !important;
                        box-shadow: 0 4px 10px rgba(124, 58, 237, 0.5) !important;
                    }

                    /* Ajuste In-Game (Remove o borrão/fundo quando começas a jogar) */
                    body.playing #overlay { 
                        backdrop-filter: none !important; 
                        background: transparent !important; 
                    }
                `;
                document.head.appendChild(style);

                // Marca o body como ativo
                document.body.classList.add('eclipse-active');

                // Remove o launcher da tela
                launcher.remove();
            };
        } catch (err) { console.error("Erro ao carregar Eclipse:", err); }
    }

    // Aguarda 1 segundo para garantir que o site carregou antes de injetar
    setTimeout(loadEclipse, 1000);
})();
