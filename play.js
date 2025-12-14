// ... (dentro do if (mainJsContent))

            // Este código é executado logo a seguir ao main.js e força a inicialização do jogo
            const initializationCode = `
                console.log('[Eclipse] Inicialização pós-injeção: A forçar conexão.');
                
                // Define as variáveis de login globais
                window.Eclipse_Nickname = localStorage.nickname || "Eclipse Player";
                window.Eclipse_Skin = localStorage.skinUrl || "";

                // Força a variável de login principal do Aetlis.io se for conhecida
                // Substitua a 'client' (exemplo) pela variável que o jogo usa para o seu objeto principal, se souberes.
                // Se não souberes, mantemos 'client'.
                if (window.client && typeof window.client.setNickname === 'function') {
                    window.client.setNickname(window.Eclipse_Nickname);
                }
                
                // Tenta forçar o início do jogo / ligação ao servidor.
                // Isto faz com que o painel UI (a imagem que mostraste) apareça.
                if (window.client && typeof window.client.connect === 'function') {
                    // É a chamada mais provável para iniciar o jogo e mostrar a UI.
                    window.client.connect(); 
                } else if (window.initGame) {
                    // Segunda tentativa comum em mods
                    window.initGame();
                } else {
                    // Terceira tentativa (comum em jogos Pixi/HTML5)
                    setTimeout(() => { 
                         if (typeof window.startGame === 'function') window.startGame();
                    }, 500);
                }

                // Limpeza final 
                const launcher = document.getElementById('launcher-ui');
                if(launcher) launcher.style.display = 'none';
            `;
            // ... (restante do código injectScriptText)
