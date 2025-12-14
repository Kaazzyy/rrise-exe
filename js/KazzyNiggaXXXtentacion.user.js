// ==UserScript==
// @name         Eclipse Launcher Fix
// @version      2.0
// @description  Força o carregamento do Launcher Eclipse antes do jogo original
// @author       Kazzy
// @match        *://aetlis.io/*
// @run-at       document-start
// ==/UserScript==

(async () => {
    'use strict';

    // 1. PARAGEM DE EMERGÊNCIA: Impede o site original de carregar scripts/ads
    window.stop();

    // 2. Ecrã de Loading Temporário (para não ficar tudo branco)
    document.documentElement.innerHTML = `
        <style>
            body { background-color: #050505; color: white; font-family: monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
            .loader { width: 50px; height: 50px; border: 5px solid #333; border-top-color: #6366f1; border-radius: 50%; animation: spin 1s infinite linear; }
            @keyframes spin { to { transform: rotate(360deg); } }
        </style>
        <div class="loader"></div>
        <p style="margin-top: 20px;">Loading Eclipse...</p>
    `;

    const REPO_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main';
    // Timestamp para evitar cache (o browser lembrar-se da versão velha)
    const TS = `?t=${Date.now()}`;

    // Função para sacar o texto dos ficheiros
    async function fetchFile(filename) {
        try {
            const req = await fetch(`${REPO_URL}/${filename}${TS}`);
            if (!req.ok) throw new Error(`Falha ${req.status}`);
            return await req.text();
        } catch (e) {
            console.error(`[Eclipse] Erro ao baixar ${filename}:`, e);
            document.body.innerHTML += `<p style="color:red">Error loading ${filename}</p>`;
            return null;
        }
    }

    // 3. Baixar o Launcher (index.html) e a Lógica (play.js)
    console.log('[Eclipse] Downloading files...');
    const [htmlContent, playJsContent] = await Promise.all([
        fetchFile('index.html'),
        fetchFile('play.js')
    ]);

    if (!htmlContent || !playJsContent) return;

    // 4. Reescrever a página completamente
    document.open();
    document.write(htmlContent);
    document.close();

    // 5. Injetar a lógica do Launcher
    const script = document.createElement('script');
    script.textContent = playJsContent;
    document.body.appendChild(script);

    console.log('[Eclipse] Launcher Loaded.');
})();
