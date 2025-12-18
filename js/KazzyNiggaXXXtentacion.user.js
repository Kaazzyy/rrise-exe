// ==UserScript==
// @name         Eclipse - UI Force Overhaul & Modals
// @version      5.7.0
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
            const response = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await response.text();

            // --- CRIAR O LAUNCHER ---
            const launcher = document.createElement('div');
            launcher.id = "eclipse-launcher";
            launcher.style.cssText = "position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.95); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
            launcher.innerHTML = html;
            document.body.appendChild(launcher);

            // ============================================================
            // --- LÓGICA DOS MODAIS (NOVA) ---
            // ============================================================
            
            // Função auxiliar para abrir/fechar
            function setupModal(btnId, modalId, closeBtnClass = 'close-modal') {
                const btn = launcher.querySelector(`#${btnId}`);
                const modal = launcher.querySelector(`#${modalId}`);
                
                if (btn && modal) {
                    // Abrir
                    btn.onclick = () => {
                        modal.style.display = 'flex'; // ou 'block' dependendo do teu CSS
                        modal.classList.remove('hidden');
                    };
                    
                    // Fechar (procura botões de fechar dentro do modal)
                    const closeBtns = modal.querySelectorAll(`.${closeBtnClass}, .close-btn, [data-dismiss="modal"]`);
                    closeBtns.forEach(b => {
                        b.onclick = () => {
                            modal.style.display = 'none';
                            modal.classList.add('hidden');
                        };
                    });

                    // Fechar ao clicar fora (opcional)
                    modal.onclick = (e) => {
                        if (e.target === modal) {
                            modal.style.display = 'none';
                            modal.classList.add('hidden');
                        }
                    };
                }
            }

            // CONFIGURA OS MODAIS AQUI (Verifica se os IDs batem certo com o teu HTML)
            setupModal('btn-settings', 'modal-settings'); // Ex: Botão ID "btn-settings" abre Modal ID "modal-settings"
            setupModal('btn-controls', 'modal-controls');
            setupModal('btn-credits', 'modal-credits');
            // Adiciona outros se tiveres (ex: 'btn-dual', 'modal-dual')

            // ============================================================
            // --- AÇÃO DO BOTÃO PLAY (ACTIVATE) ---
            // ============================================================
            const playBtn = launcher.querySelector('#btn-activate') || launcher.querySelector('#play-btn');
            
            if (playBtn) {
                playBtn.onclick = function() {
                    const data = {
                        n1: document.getElementById('main-nick')?.value || '',
                        s1: document.getElementById('main-skin')?.value || '',
                        n2: document.getElementById('dual-nick')?.value || '',
                        s2: document.getElementById('dual-skin')?.value || ''
                    };

                    if (data.n2) localStorage.setItem('dualNickname', data.n2);
                    if (data.s2) localStorage.setItem('dualSkinUrl', data.s2);

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

                    injectEclipseCSS(); // Chama a função de CSS
                    document.body.classList.add('eclipse-active');
                    launcher.remove();
                };
            }

            // ============================================================
            // --- INJEÇÃO DE CSS ---
            // ============================================================
            function injectEclipseCSS() {
                const style = document.createElement('style');
                style.innerText = `
                    /* 1. Fundo escuro */
                    #overlay { background: rgba(5,5,8,0.8) !important; }
                    
                    /* 2. REGRA GERAL (Painéis) */
                    main-container, [class*="container"], [class*="box"], .main-container {
                        background-color: #0d0d0f !important;
                        background-image: none !important;
                        border: 2px solid #7c3aed !important;
                        border-radius: 15px !important;
                        box-shadow: 0 0 25px rgba(124, 58, 237, 0.4) !important;
                    }

                    /* 3. SKINS REDONDAS */
                    [class*="skin"], .skin-preview, img[src*="skin"] {
                        border-radius: 50% !important;
                        border: 2px solid #7c3aed !important;
                        box-shadow: 0 0 15px rgba(124, 58, 237, 0.5) !important;
                        background-color: transparent !important;
                    }

                    /* 4. LIMPEZA (Rodapé/Privacy sem borda) */
                    div:has(> a[href*="privacy"]), 
                    div:has(> a[href*="terms"]),
                    div:has(> .text-muted),
                    footer, .footer, #footer,
                    [class*="social"], [class*="links"] {
                        border: none !important;
                        box-shadow: none !important;
                        background: transparent !important;
                        border-radius: 0 !important;
                    }

                    a[href*="privacy"], a[href*="terms"], .text-muted {
                        border: none !important;
                        background: transparent !important;
                        box-shadow: none !important;
                    }

                    /* 5. BOTÕES */
                    button, .play-btn, [class*="btn-primary"], .primary {
                        background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
                        border: none !important;
                        color: white !important;
                        box-shadow: 0 4px 10px rgba(124, 58, 237, 0.5) !important;
                        border-radius: 8px !important;
                    }
                    
                    /* 6. MODAIS (Garante que ficam no topo se abertos depois) */
                    [id*="modal"] {
                        z-index: 10000000 !important;
                    }

                    body.playing #overlay { backdrop-filter: none !important; background: transparent !important; }
                `;
                document.head.appendChild(style);
            }

        } catch (err) { console.error("Erro Eclipse:", err); }
    }

    setTimeout(loadEclipse, 1000);
})();
