// ==UserScript==
// @name         Eclipse - FINAL FIX (Inline Vendor)
// @version      1.7.0
// @description  Aetlis.io Custom Launcher (Força Vendor.js INLINE)
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';
    
    const RAW_BASE_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    
    // --- 🚫 AdBlock Bypass: ESSENCIAL MANTER ---
    window.aiptag = window.aiptag || {};
    window.aiptag.cmd = window.aiptag.cmd || [];
    window.aiptag.cmd.push = function(fn) { try { fn(); } catch(e){} };
    window.aiptag.cmd.display = function() { console.log('[Eclipse] AdInPlay: Display mocked.'); };
    window.AdInPlay = { isLoaded: true, started: true };
    window.aiptag.loaded = true;
    window.isAdBlocked = false;
    window.adinplay = { 
        create: () => {}, 
        destroy: () => {}, 
        isLoaded: true,
        call: (method, ...args) => { console.log(`[Eclipse] AdInPlay method called: ${method}`); return true; }
    };
    // ------------------------------------------
    
    // Log function for debugging
    const log = (msg) => { console.log('[Eclipse]', msg); };

    async function fetchContent(path) {
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}?t=${Date.now()}`);
            if (!res.ok) {
                log(`Fetch failed for: ${path} ${res.status}. CHECK GITHUB PATH!`);
                return null;
            }
            return await res.text();
        } catch (e) {
            log(`Fetch error for ${path}: ${e}`);
            return null;
        }
    }
    
    // Ecrã de Loading Simples
    document.documentElement.innerHTML = '<body><h1 style="color:white;text-align:center;margin-top:20vh;">A carregar ficheiros Eclipse...</h1></body>';


    try {
        log('A buscar ficheiros essenciais (index.html, vendor.js, play.js)...');
        
        // Buscar todos os 3 ficheiros
        const [htmlContent, vendorContent, playJsContent] = await Promise.all([
            fetchContent('index.html'),
            fetchContent('vendor.js'),
            fetchContent('play.js')
        ]);

        if (!htmlContent || !vendorContent || !playJsContent) {
            throw new Error("Falha ao carregar um ou mais ficheiros essenciais do GitHub.");
        }

        log('Ficheiros baixados. A injetar o Vendor.js no HTML...');
        
        // 1. Inserir o vendor.js *antes* do fecho da tag </head>
        // Isto é o MAIS SEGURO que podemos fazer para garantir o timing.
        const injectedHtml = htmlContent.replace(
            '</head>',
            `    <script type="text/javascript" id="vendor-script">
${vendorContent}
    //# sourceURL=${RAW_BASE_URL}/vendor.js
    </script>
</head>`
        );

        // 2. Reescrever a página completamente com o Vendor.js já dentro
        document.open();
        document.write(injectedHtml);
        document.close();
        log('HTML e Vendor.js injetados.');


        // 3. Injetar play.js, que agora não precisa de carregar o vendor.js
        const script = document.createElement('script');
        script.textContent = playJsContent + `\n//# sourceURL=${RAW_BASE_URL}/play.js`;
        // Timeout para dar tempo ao DOM de processar os elementos do Launcher
        setTimeout(() => {
            document.body.appendChild(script);
            log('play.js injetado. Launcher deve estar pronto.');
        }, 50);

    } catch (e) {
        log(`ERRO CRÍTICO: ${e.message}`);
        document.body.innerHTML = `<h1 style="color:red;text-align:center;margin-top:20vh;">ERRO NO LANÇAMENTO: ${e.message}</h1><p style="color:white;text-align:center;">Verifica o caminho dos ficheiros no GitHub.</p>`;
    }
})();
