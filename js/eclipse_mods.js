(function() {
    'use strict';
    
    // Usamos um nome aleatório para a função de inicialização para evitar deteção
    const _0x4f2a = async () => {
        const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';
        
        // Criamos um contentor que o jogo não consegue "ler" facilmente
        let host = document.getElementById('e-ui-root' );
        if (host) host.remove();
        
        host = document.createElement('div');
        host.id = 'e-ui-root';
        // O Shadow DOM isola o teu menu do resto do jogo
        const shadow = host.attachShadow({mode: 'closed'}); 
        document.body.appendChild(host);

        try {
            const res = await fetch(GITHUB_URL + '?v=' + Date.now());
            const html = await res.text();
            
            const menuWrap = document.createElement('div');
            menuWrap.innerHTML = html;
            shadow.appendChild(menuWrap);
            
            // Configurar botões dentro do Shadow DOM
            setTimeout(() => {
                const injectBtn = menuWrap.querySelector('#btn-inject');
                if(injectBtn) injectBtn.onclick = () => {
                    // Lógica de injeção simplificada para evitar crash
                    console.log("[ECLIPSE] Identity requested.");
                    host.remove(); 
                };
                const closeBtn = menuWrap.querySelector('#btn-activate');
                if(closeBtn) closeBtn.onclick = () => host.remove();
            }, 100);
        } catch(e) {}
    };

    // Botão de ativação minimalista
    const _tr = document.createElement('div');
    _tr.style.cssText = "position:fixed;bottom:10px;right:10px;width:5px;height:5px;background:rgba(124,58,237,0.1);z-index:2147483647;cursor:pointer;";
    _tr.onclick = _0x4f2a;
    document.body.appendChild(_tr);

    console.log("[SYS] Stable.");
})();
