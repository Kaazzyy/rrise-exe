(function() {
    'use strict';
    console.log("[ECLIPSE] Inicializando Versão Beta Estável...");

    window.openEclipseMenu = function() {
        var wrap = document.getElementById('eclipse-beta-menu');
        if (wrap) wrap.remove();

        wrap = document.createElement('div');
        wrap.id = 'eclipse-beta-menu';
        wrap.style.cssText = "position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:400px; padding:20px; background:#1a1a1a; color:white; z-index:2147483647; display:flex; flex-direction:column; align-items:center; border-radius:15px; box-shadow:0 0 30px rgba(124,58,237,0.5); border:2px solid #7c3aed; font-family: sans-serif;";
        
        wrap.innerHTML = `
            <h2 style="color:#7c3aed; margin-bottom:10px;">ECLIPSE BETA</h2>
            <p style="font-size:14px; text-align:center; opacity:0.8;">O menu original está em manutenção. Usa estes botões para testar as funções:</p>
            <div style="display:flex; gap:10px; margin-top:20px;">
                <button id="btn-inject" style="padding:10px 20px; background:#7c3aed; border:none; color:white; border-radius:5px; cursor:pointer; font-weight:bold;">INJECT IDENTITY</button>
                <button id="btn-activate" style="padding:10px 20px; background:#333; border:none; color:white; border-radius:5px; cursor:pointer;">FECHAR</button>
            </div>
            <p style="margin-top:15px; font-size:12px; color:#555;">v40.3.7 - Status: Stable</p>
        `;
        
        document.body.appendChild(wrap);

        document.getElementById('btn-inject').onclick = function() {
            if (window.eclipseInjectSystem) window.eclipseInjectSystem();
            else alert("Sistema de injeção não encontrado.");
        };
        document.getElementById('btn-activate').onclick = function() { wrap.remove(); };
    };

    // Botão de ativação (O "E" roxo que funcionou)
    var trig = document.createElement('div');
    trig.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000000; width:45px; height:45px; background:#7c3aed; border-radius:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; box-shadow:0 0 15px rgba(124,58,237,0.5);";
    trig.innerHTML = "E";
    trig.onclick = window.openEclipseMenu;
    document.body.appendChild(trig);

    // Injetar o resto das tuas funções (Skins, Yoink, etc.)
    try {
        /* Aqui incluirei o resto do teu código JS original sem os awaits problemáticos */
    } catch(e) { console.error(e); }

    setTimeout(window.openEclipseMenu, 2000);
})();
