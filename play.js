// Base URL for the game scripts
const GAME_MOD_BASE = 'https://kaazzyy.github.io/Eclipse'; 
const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main'; 

// Bypass AdInPlay (Anti-ban de ads)
// Isto cria um objeto falso para o jogo achar que os anúncios carregaram
window.aiptag = window.aiptag || {};
window.aiptag.cmd = window.aiptag.cmd || [];
window.aiptag.cmd.display = function() { console.log('Eclipse: Ad blocked successfully.'); };
window.aiptag.cmd.player = window.aiptag.cmd.player || [];

function hideLauncherUI() {
    // Agora escondemos apenas o container do launcher, deixando o canvas visível
    const launcherDiv = document.getElementById('launcher-ui');
    if (launcherDiv) {
        launcherDiv.style.display = 'none';
        // Removemos o fundo do launcher para ver o jogo
        document.body.style.background = 'none'; 
    }
}

async function injectScriptFromUrl(url) {
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
             console.error('Fetch failed for game file:', url, res.status, res.statusText);
             return false;
        }
        const text = await res.text();
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = text + '\n//# sourceURL=' + url;
        document.head.appendChild(s);
        return true;
    } catch (e) {
        console.error('Injection error for', url, e);
        return false;
    }
}

function initializeLauncher() {
    const playButton = document.getElementById("playBtn");
    const nickInput = document.getElementById("nickname");
    const skinInput = document.getElementById("skin");

    if (!playButton) return; 

    // Load previous data
    if(localStorage.nickname && nickInput) nickInput.value = localStorage.nickname;
    if(localStorage.skinUrl && skinInput) skinInput.value = localStorage.skinUrl;
    
    playButton.addEventListener('click', async function () {
        console.log('Play button clicked. Initiating game injection...');
        
        const nick = (nickInput && nickInput.value) || "Player";
        const skin = (skinInput && skinInput.value) || "";
        
        localStorage.nickname = nick;
        localStorage.skinUrl = skin;
        
        // 1. Esconder o Launcher
        hideLauncherUI();
    

        // 2. Injetar o Vendor primeiro (bibliotecas)
        const vendorSuccess = await injectScriptFromUrl(`${RAW_BASE_URL}/js/vendor.js`); 
        
        // 3. Injetar o Main.js e forçar a inicialização
        if (vendorSuccess) {
            
            // Pequeno delay para garantir que o PIXI (do vendor.js) está pronto
            setTimeout(async () => {
                const mainJsText = await fetchContent(`${RAW_BASE_URL}/js/main.js`); 
                if (mainJsText) {
                    // Adicionamos um pequeno snippet de código para forçar o start do jogo
                    const initializationCode = `
                        console.log('[Eclipse] Running post-injection initialization.');
                        // O Aetlis.io provavelmente tem uma função global de inicialização (e.g., window.startClient) 
                        // ou um evento de DOM. Como o main.js é ofuscado, podemos apenas confiar que a injeção 
                        // é suficiente, mas vamos forçar a variável global do nome.
                        
                        // Tenta definir o nome de usuário (varia conforme a versão do Aetlis.io/mod)
                        if (window.client && window.client.setNickname) {
                             window.client.setNickname(localStorage.nickname);
                        } else if (window.setupGame) {
                             // Tentativa de chamar uma função de start comum em mods
                             window.setupGame(); 
                        } else if (window.initGame) {
                             window.initGame(); 
                        }
                        
                        // Limpa o fundo para garantir que o jogo seja visto
                        document.body.style.background = 'none'; 
                    `;

                    // Injeta o main.js mais o código de inicialização
                    injectScriptText(mainJsText + initializationCode, `${RAW_BASE_URL}/js/main.js`);
                    console.log('Game scripts and initialization code injected.');
                } else {
                    console.error('Failed to inject main.js');
                }
            }, 100); 
        } else {
            console.error('Failed to inject vendor.js');
        }

// Inicia o listener se o DOM já estiver pronto, ou espera
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLauncher);
} else {
    initializeLauncher();
}

