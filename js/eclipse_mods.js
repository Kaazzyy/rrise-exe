(function() {
    'use strict';
    console.log("[ECLIPSE] A carregar versão de diagnóstico...");

    window.openEclipseMenu = function() {
        console.log("[ECLIPSE] A tentar abrir menu de teste...");
        var wrap = document.getElementById('eclipse-test-menu');
        if (wrap) wrap.remove();

        wrap = document.createElement('div');
        wrap.id = 'eclipse-test-menu';
        wrap.style.cssText = "position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:300px; height:200px; background:#7c3aed; color:white; z-index:2147483647; display:flex; flex-direction:column; align-items:center; justify-content:center; border-radius:20px; box-shadow:0 0 50px rgba(0,0,0,0.8); border:5px solid white;";
        wrap.innerHTML = '<h2 style="margin:0;">ECLIPSE BETA</h2><p>Se vês isto, o sistema de injeção está OK!</p><button id="test-close" style="padding:10px 20px; cursor:pointer;">FECHAR</button>';
        
        document.body.appendChild(wrap);
        document.getElementById('test-close').onclick = function() { wrap.remove(); };
    };

    // Botão de ativação
    var trig = document.createElement('div');
    trig.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000000; width:50px; height:50px; background:red; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold;";
    trig.innerHTML = "TEST";
    trig.onclick = window.openEclipseMenu;
    document.body.appendChild(trig);

    setTimeout(window.openEclipseMenu, 2000);
    console.log("[ECLIPSE] Diagnóstico pronto. Clica no botão vermelho 'TEST'.");
})();
