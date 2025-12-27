(function() {
    'use strict';
    console.log("[ECLIPSE] Inicializando Modificações...");

    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';
    
    // Funções de UI e Lógica (Skins, Vídeo, etc. )
    window.openEclipseMenu = async () => {
        try {
            const res = await fetch(GITHUB_URL + '?v=' + Date.now());
            const html = await res.text();
            let wrap = document.getElementById('eclipse-main-wrap');
            if (wrap) wrap.remove();
            wrap = document.createElement('div');
            wrap.id = 'eclipse-main-wrap';
            wrap.innerHTML = html;
            document.body.appendChild(wrap);
            
            setTimeout(() => {
                const injectBtn = wrap.querySelector('#btn-inject');
                if(injectBtn) injectBtn.onclick = window.eclipseInjectSystem;
                const closeBtn = wrap.querySelector('#btn-activate');
                if(closeBtn) closeBtn.onclick = () => { wrap.remove(); };
            }, 100);
        } catch(e) { console.error("Erro ao carregar menu:", e); }
    };

    // Botão flutuante para abrir o menu
    const trig = document.createElement('div');
    trig.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000000; width:45px; height:45px; background:rgba(124,58,237,0.5); border:1px solid #7c3aed; border-radius:10px; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;";
    trig.innerHTML = `<div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div>`;
    trig.onclick = window.openEclipseMenu;
    document.body.appendChild(trig);

    console.log("[ECLIPSE] Mods prontas.");
})();
