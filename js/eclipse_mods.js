
(function() {
    'use strict';
    console.log("[ECLIPSE] Inicializando Modificações Completas...");

    

(function() {
    'use strict';

    console.log("[ECLIPSE] v40.3.7 Loaded - Skin Persistence Fixed");

    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';
    const VALID_SKIN_PREFIX = "https://skins.aetlis.io/s/";
    
    window.eclipse_showLines = true;

    // --- VARIÁVEIS GERAIS ---
    window.eclipseSkinBackups = new Map();
    window.hiddenSkinPids = new Set();

    let targetPid = null;
    let contextMenu = null;
    let spectateTargetId = null;
    let eclipseSpectateTicker = null;
    window.eclipseModeActive = false;

    // Variáveis para o sistema de Decoy
    let realCameraRefs = null;
    let decoyCamera = {
        position: { x: 0, y: 0 },
        scale: { x: 1, y: 1, set: function(s) { this.x = s; this.y = s; } }
    };

    // --- NOVO MOTOR DE REPLAY (DUAL ENGINE) ---
    const REC_DURATION = 20000;
    const REC_OFFSET = 10000;
    let activeStream = null;
    let isProcessing = false;

    let recorders = [
        { id: 0, rec: null, chunks: [], startTime: 0, timer: null },
        { id: 1, rec: null, chunks: [], startTime: 0, timer: null }
    ];

    // --- 1. UI UTILS ---
    const showToast = (msg, isError = false) => {
        let container = document.getElementById('eclipse-toast-container') || document.createElement('div');
        if (!container.id) {
            container.id = 'eclipse-toast-container';
            container.style.cssText = "position:fixed; bottom:30px; left:50%; transform:translateX(-50%); z-index:2000001; pointer-events:none;";
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        const borderColor = isError ? '#ef4444' : '#7c3aed';
        toast.style.cssText = `background:#0a0a0f; border-left:4px solid ${borderColor}; color:#fff; padding:12px 25px; border-radius:8px; font-family:'Outfit', sans-serif; margin-top:10px; box-shadow:0 10px 30px #000; font-weight: 500; transition: opacity 0.5s;`;
        toast.innerText = msg;
        container.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 500); }, 3000);
    };

    // --- FUNÇÃO AUXILIAR: SAVE SKIN (Mesma lógica do Yoink) ---
    const saveSkinToHistory = (url) => {
        if (!url || !url.includes(VALID_SKIN_PREFIX)) return false;

        let storedSkins = [];
        try { 
            const raw = localStorage.getItem('skins'); 
            if(raw) storedSkins = JSON.parse(raw); 
        } catch(e) { storedSkins = []; }
        
        if(!Array.isArray(storedSkins)) storedSkins = [];

        // Remove a skin se já existir (para mover para o topo)
        storedSkins = storedSkins.filter(s => s !== url);
        
        // Adiciona ao topo
        storedSkins.unshift(url);
        
        localStorage.setItem('skins', JSON.stringify(storedSkins));
        // Força esta skin como a atual
        localStorage.setItem('skinUrl', url);
        return true;
    };

    // --- FUNÇÃO CRÍTICA: RESTAURAR CÂMARA ---
    window.stopSpectate = () => {
        const g = window.game;
        window.eclipseModeActive = false;
        spectateTargetId = null;

        if (g && g.ticker && eclipseSpectateTicker) {
            g.ticker.remove(eclipseSpectateTicker);
            eclipseSpectateTicker = null;
        }

        if (g && g.camera && realCameraRefs) {
            g.camera.position = realCameraRefs.position;
            g.camera.scale = realCameraRefs.scale;
            realCameraRefs = null;
            console.log("[ECLIPSE] Camera control returned to game.");
        }

        const btn = document.getElementById('eclipse-stop-spectate');
        if (btn) btn.remove();
        showToast("Camera Reset.");
    };

    // --- SISTEMA DE INJEÇÃO (ATUALIZADO & SEGURO) ---
    window.eclipseInjectSystem = () => {
        console.log("[ECLIPSE] Validating & Injecting Identity...");
        
        const wrap = document.getElementById('eclipse-main-wrap');
        if (!wrap) return showToast("Menu error", true);

        // Captura Inputs
        const inputs = Array.from(wrap.querySelectorAll('input[type="text"]'));
        const mainNick = (document.getElementById('e_main_nick') || inputs[0])?.value.trim();
        const mainSkin = (document.getElementById('e_main_skin') || inputs[1])?.value.trim();
        const dualNick = (document.getElementById('e_dual_nick') || inputs[2])?.value.trim();
        const dualSkin = (document.getElementById('e_dual_skin') || inputs[3])?.value.trim();

        // 1. APLICAR MAIN (Se válido)
        if (mainNick) {
            const gameNickInput = document.getElementById('nickname');
            if (gameNickInput) {
                gameNickInput.value = mainNick;
                gameNickInput.dispatchEvent(new Event('input', { bubbles: true }));
                localStorage.setItem('nickname', mainNick);
            }
        }

        // Lógica de Skin Main (Baseada no Yoink)
        if (mainSkin && mainSkin.includes(VALID_SKIN_PREFIX)) {
            const gameSkinInput = document.getElementById('skinurl');
            
            // 1. Atualizar Visualmente o Input
            if (gameSkinInput) {
                gameSkinInput.value = mainSkin;
                gameSkinInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
            
            // 2. Salvar no Histórico e Definir como Atual (Lógica Yoink)
            const saved = saveSkinToHistory(mainSkin);
            if(saved) console.log("[ECLIPSE] Main Skin saved to history.");

        } else if (mainSkin && !mainSkin.includes(VALID_SKIN_PREFIX)) {
            showToast("Invalid Main Skin URL ⚠️", true);
        }

        // 2. APLICAR DUAL (Se válido)
        if (dualNick) {
            localStorage.setItem('dualNickname', dualNick);
            if (window.game?.dualIdentity) window.game.dualIdentity.nickname = dualNick;
        }

        if (dualSkin && dualSkin.includes(VALID_SKIN_PREFIX)) {
            localStorage.setItem('dualSkinUrl', dualSkin);
            if (window.game?.dualIdentity) window.game.dualIdentity.skin = dualSkin;
        } else if (dualSkin && !dualSkin.includes(VALID_SKIN_PREFIX)) {
            showToast("Invalid Dual Skin URL ⚠️", true);
        }

        // 3. ENVIAR PACOTES
        if (window.game && typeof window.game.sendDualIdentity === 'function') {
            window.game.sendDualIdentity();
            console.log("[ECLIPSE] Dual Identity Packet Sent");
        }
        
        showToast("Identity Injected! 💉");
        // Remove menu após injeção
        wrap.remove();
    };

    // --- 2. LÓGICA DE VÍDEO ---
    const findGameCanvas = () => {
        const canvases = document.querySelectorAll('canvas');
        if (canvases.length === 0) return null;
        let largestCanvas = null;
        let maxArea = 0;
        canvases.forEach(cvs => {
            const area = cvs.width * cvs.height;
            if (area > maxArea && cvs.style.display !== 'none' && cvs.width > 100) {
                maxArea = area;
                largestCanvas = cvs;
            }
        });
        return largestCanvas;
    };

    const initDualRecordingSystem = () => {
        const canvas = findGameCanvas();
        if (!canvas) {
            setTimeout(initDualRecordingSystem, 1000);
            return;
        }

        try {
            activeStream = canvas.captureStream(60);
            startSingleRecorder(0);
            setTimeout(() => { startSingleRecorder(1); }, REC_OFFSET);
        } catch (e) {
            setTimeout(initDualRecordingSystem, 2000);
        }
    };

    const startSingleRecorder = (idx) => {
        if (!activeStream) return;
        let mimeType = 'video/webm';
        if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) mimeType = "video/webm;codecs=vp9";
        else if (MediaRecorder.isTypeSupported("video/webm;codecs=vp8")) mimeType = "video/webm;codecs=vp8";

        const rObj = recorders[idx];
        rObj.chunks = [];
        rObj.startTime = Date.now();
        if (rObj.timer) clearTimeout(rObj.timer);
        try {
            rObj.rec = new MediaRecorder(activeStream, { mimeType: mimeType, videoBitsPerSecond: 6000000 });
            rObj.rec.ondataavailable = (e) => { if (e.data && e.data.size > 0) rObj.chunks.push(e.data); };
            rObj.rec.onstop = () => { if (!isProcessing) startSingleRecorder(idx); };

            rObj.rec.start(1000);
            rObj.timer = setTimeout(() => {
                if (rObj.rec.state !== 'inactive' && !isProcessing) rObj.rec.stop();
            }, REC_DURATION);
        } catch (e) { console.error(`Recorder ${idx} error:`, e); }
    };

    const saveBlob = (chunks) => {
        try {
            const blob = new Blob(chunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            const d = new Date();
            const ts = `${d.getHours()}h${d.getMinutes()}m${d.getSeconds()}s`;
            a.href = url;
            a.download = `Eclipse-${ts}.webm`;
            a.click();
            showToast("Clip Saved! ♻️");
            setTimeout(() => { window.URL.revokeObjectURL(url); a.remove(); }, 1000);
        } catch(e) { showToast("Save Failed ❌", true); }
    };

    const triggerSave = () => {
        if (isProcessing) return showToast("System Busy... ⚠️", true);
        if (!recorders[0].rec && !recorders[1].rec) {
            initDualRecordingSystem();
            return showToast("Initializing... Try again in 5s ⏳", true);
        }
        isProcessing = true;
        const now = Date.now();
        const dur0 = now - recorders[0].startTime;
        const dur1 = now - recorders[1].startTime;
        let targetIdx = (dur0 > dur1) ? 0 : 1;
        if (recorders[targetIdx].chunks.length === 0) targetIdx = targetIdx === 0 ? 1 : 0;

        const target = recorders[targetIdx];
        const clipLength = Math.round((now - target.startTime) / 1000);
        showToast(`Processing Clip (${clipLength}s)... 🎬`);
        target.rec.onstop = () => {
            saveBlob(target.chunks);
            isProcessing = false;
            startSingleRecorder(targetIdx);
        };
        target.rec.stop();
        if (target.timer) clearTimeout(target.timer);
    };

    // --- 3. LÓGICA DE JOGO ---
    const getTargetNode = (pid) => {
        if (window.game && window.game.nodelist) return window.game.nodelist.find(n => n.pid === pid);
        return null;
    };
    const getRealSkinUrl = (pid) => {
        if (window.eclipseSkinBackups.has(pid)) return window.eclipseSkinBackups.get(pid);
        const node = getTargetNode(pid);
        const pManager = window.game?.playerManager?.players?.[pid];
        if (pManager && pManager.skin) return pManager.skin;
        if (pManager && pManager.skinUrl) return pManager.skinUrl;
        if (node && node.skin) return node.skin;
        return null;
    };

    const simulateContext = (pid) => {
        const selector = `.message-from[data-pid="${pid}"]`;
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            const targetEl = elements[elements.length - 1];
            const ev = new MouseEvent('contextmenu', {
                bubbles: true, cancelable: true, view: window, buttons: 2,
                clientX: targetEl.getBoundingClientRect().x,
                clientY: targetEl.getBoundingClientRect().y
            });
            targetEl.dispatchEvent(ev);
            return true;
        }
        return false;
    };

    const injectSystemMessage = async (pid, pName) => {
        const chatEl = document.getElementById('chatbox');
        if (!chatEl || !chatEl.__vue__) return false;
        const vm = chatEl.__vue__;
        let msgArrayKey = vm.messages ? 'messages' : null;
        if (!msgArrayKey) return false;

        const ghostMsg = { name: pName || "Player", pid: pid, message: ".", isGhost: true, time: Date.now() };
        vm[msgArrayKey].push(ghostMsg);
        await new Promise(r => setTimeout(r, 50));
        const clicked = simulateContext(pid);
        if (clicked) {
            const idx = vm[msgArrayKey].indexOf(ghostMsg);
            if (idx > -1) vm[msgArrayKey].splice(idx, 1);
        }
        return clicked;
    };

    const openProfileMenu = async (pid, pName) => {
        if (simulateContext(pid)) { showToast("Menu Opened (Chat)"); return; }
        showToast("Injecting Menu...", false);
        const success = await injectSystemMessage(pid, pName);
        if (success) showToast("Menu Opened ✨");
        else showToast("Could not open menu", true);
    };

    window.eclipseAction = async (type) => {
        if (targetPid === null) return;
        const g = window.game;
        const pManager = g?.playerManager?.players?.[targetPid];
        const pName = pManager?.name || "Player";
        const skinUrl = getRealSkinUrl(targetPid);
        switch(type) {
            case 'spectate': {
                if (window.eclipseModeActive) window.stopSpectate();
                window.eclipseModeActive = true;
                spectateTargetId = targetPid;
                realCameraRefs = { position: g.camera.position, scale: g.camera.scale };
                g.camera.position = decoyCamera.position;
                g.camera.scale = decoyCamera.scale;
                const btn = document.createElement('button');
                btn.id = 'eclipse-stop-spectate';
                btn.innerHTML = `❌ STOP VIEW (${pName})`;
                btn.style.cssText = "position:fixed; top:80px; left:50%; transform:translateX(-50%); z-index:1000002; padding:12px 24px; background:#ef4444; color:white; border:none; border-radius:10px; cursor:pointer; font-family:'Outfit';";
                btn.onclick = window.stopSpectate;
                document.body.appendChild(btn);
                eclipseSpectateTicker = () => {
                    if (!spectateTargetId || !window.eclipseModeActive || !realCameraRefs) return;
                    const nodes = g.nodelist.filter(n => n.pid === spectateTargetId);
                    if (nodes.length > 0) {
                        let tx = 0, ty = 0, tMass = 0;
                        for (const n of nodes) { const m = n.size * n.size; tx += n.x * m; ty += n.y * m; tMass += m; }
                        if (tMass > 0) {
                            const finalX = tx / tMass;
                            const finalY = ty / tMass;
                            realCameraRefs.position.x += (finalX - realCameraRefs.position.x) * 0.15;
                            realCameraRefs.position.y += (finalY - realCameraRefs.position.y) * 0.15;
                            const targetZoom = g.zoom || 0.1;
                            const zoomSmooth = (g.settings && g.settings.cameraZoomSmoothing) ? g.settings.cameraZoomSmoothing : 0.14;
                            realCameraRefs.scale.set(realCameraRefs.scale.x + (targetZoom - realCameraRefs.scale.x) * zoomSmooth);
                            g.center.x = finalX; g.center.y = finalY;
                        }
                    }
                };
                if (g.ticker) g.ticker.add(eclipseSpectateTicker);
                break;
            }
            case 'block': { openProfileMenu(targetPid, pName); break; }
            case 'hide': { window.hiddenSkinPids.add(targetPid); if (skinUrl) window.eclipseSkinBackups.set(targetPid, skinUrl); showToast("Skin Hidden"); break; }
            case 'show': { window.hiddenSkinPids.delete(targetPid); showToast("Skin Shown"); break; }
            case 'yoink': { if (skinUrl) saveSkinToHistory(skinUrl) && showToast("Skin Saved! 💾"); else showToast("No skin found", true); break; }
            case 'copy': { if(skinUrl) { navigator.clipboard.writeText(skinUrl); showToast("Copied!"); } break; }
        }
        contextMenu.style.display = 'none';
    };

    // --- TAB SWITCHER CORRIGIDO (VISUAL & CORES) ---
    window.eclipseTab = function(id) {
        const wrap = document.getElementById('eclipse-main-wrap');
        if (!wrap) return;

        // 1. Alternar Conteúdo
        const tabIds = ['player', 'visuals', 'dual', 'settings', 'stats'];
        tabIds.forEach(tabId => {
            const el = wrap.querySelector('#tab-' + tabId);
            if (el) el.style.setProperty('display', (tabId === id) ? 'block' : 'none', 'important');
        });

        // 2. Alternar Cores (Roxo Ativo)
        const btns = wrap.querySelectorAll('[onclick*="eclipseTab"]');
        btns.forEach(btn => {
            const onclickAttr = btn.getAttribute('onclick');
            if (onclickAttr.includes(`'${id}'`)) {
                btn.style.setProperty('background-color', '#7c3aed', 'important'); // Roxo
                btn.style.setProperty('color', '#fff', 'important');
            } else {
                btn.style.setProperty('background-color', 'transparent', 'important');
                btn.style.setProperty('color', '#aaa', 'important');
            }
        });
    };

    const openEclipseMenu = async () => {
        if(document.getElementById('eclipse-main-wrap')) return;
            const html = `<html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <meta name="description" content="balls and pieces, pieces and balls"> <title>Aetlis.io</title> <link rel="shortcut icon" type="image/png" href="img/favicon.png"> <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> <script type="text/javascript" async="" charset="utf-8" src="https://www.gstatic.com/recaptcha/releases/7gg7H51Q-naNfhmCP3_R47ho/recaptcha__pt_pt.js" crossorigin="anonymous" integrity="sha384-dziPKOmA/B/E8YLZ8LGwLVzohhdGFKYtbJFkYx/9JDc2SqBEbuol7YvdIXF9cY8q"></script><script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/2Mfykwl2mlvyQZQ3PEgoH710/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-Cx10SI4nRyIf/4CfTL8bj2s8I5ccz18HDscUBxSzsbe1SPnhchceoHtCw2m0nc/h"></script> <script src="https://www.google.com/recaptcha/api.js?render=explicit" async="" defer=""></script> <link href="css/style.css" rel="stylesheet"> <style type="text/css" id="operaUserStyle"></style><script src="http://api.adinplay.com/libs/aiptag/pub/VAN/aetlis.io/tag.min.js"></script><style id="tournament-banner-style">.tournament-banner{position:fixed;top:16px;left:50%;transform:translateX(-50%);padding:12px 28px;background:rgba(12,18,28,0.68);border-radius:16px;color:#fff;font-family:'Roboto',sans-serif;text-align:center;backdrop-filter:blur(12px);box-shadow:0 20px 45px rgba(0,0,0,0.35);pointer-events:none;z-index:200;min-width:240px;}.tournament-banner__label{font-size:13px;letter-spacing:0.26em;text-transform:uppercase;font-weight:600;margin-bottom:6px;color:#9cd2ff;opacity:0.92;}.tournament-banner__countdown{font-size:24px;font-weight:700;letter-spacing:0.08em;}.tournament-banner--queue .tournament-banner__label{color:#ffe28f;}.tournament-banner--scheduled .tournament-banner__label{color:#b8f7ff;}.tournament-banner--prep .tournament-banner__label{color:#ffbdf3;}.tournament-banner--active .tournament-banner__label{color:#7bfbc5;}</style><style id="betting-sidebar-styles"> /* 🎰 BETTING SIDEBAR - COMPACT DESIGN */ .betting-sidebar { position: fixed !important; left: 16px !important; top: 120px !important; width: 240px; max-height: calc(100vh - 140px); overflow-y: auto; background: linear-gradient(145deg, rgba(15, 20, 32, 0.96) 0%, rgba(8, 12, 20, 0.96) 100%); border-radius: 14px; border: 1.5px solid rgba(255, 215, 0, 0.35); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.75), 0 0 25px rgba(255, 215, 0, 0.12); padding: 14px; backdrop-filter: blur(16px); z-index: 99999 !important; font-family: 'Roboto', 'Arial', sans-serif; opacity: 1 !important; pointer-events: auto !important; cursor: default; display: block !important; visibility: visible !important; } .betting-sidebar * { pointer-events: auto !important; } .betting-sidebar button { pointer-events: auto !important; } /* Custom scrollbar */ .betting-sidebar::-webkit-scrollbar { width: 4px; } .betting-sidebar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); border-radius: 2px; } .betting-sidebar::-webkit-scrollbar-thumb { background: rgba(78, 205, 196, 0.4); border-radius: 2px; } .betting-sidebar::-webkit-scrollbar-thumb:hover { background: rgba(78, 205, 196, 0.6); } .betting-header { text-align: center; margin-bottom: 10px; border-bottom: 1px solid rgba(255, 215, 0, 0.15); padding-bottom: 10px; } .betting-title { font-size: 15px; font-weight: 800; color: #FFD700; text-shadow: 0 0 15px rgba(255, 215, 0, 0.4); letter-spacing: 0.5px; margin-bottom: 3px; } .betting-subtitle { font-size: 10px; color: #B8B8C8; letter-spacing: 0.3px; text-transform: uppercase; } .pulse-animation { animation: betting-pulse 2s ease-in-out infinite; } @keyframes betting-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.85; } } .user-xp-display { text-align: center; font-size: 12px; color: #FFD700; font-weight: 700; padding: 8px 12px; background: rgba(255, 215, 0, 0.08); border-radius: 8px; margin-bottom: 10px; border: 1px solid rgba(255, 215, 0, 0.2); } .betting-countdown { text-align: center; font-size: 28px; font-weight: 900; color: #4ECDC4; text-shadow: 0 0 20px rgba(78, 205, 196, 0.5); margin-bottom: 12px; letter-spacing: 1px; } .betting-finalists { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; } .finalist-card { background: linear-gradient(135deg, rgba(35, 45, 65, 0.85) 0%, rgba(20, 30, 45, 0.85) 100%); border: 1.5px solid rgba(78, 205, 196, 0.3); border-radius: 10px; padding: 10px 14px; cursor: pointer !important; transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; pointer-events: auto !important; user-select: none; } .finalist-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(78, 205, 196, 0.15), transparent); transition: left 0.4s; } .finalist-card.hovered::before { left: 100%; } .finalist-card:hover { border-color: #4ECDC4; transform: translateX(4px) scale(1.01); box-shadow: 0 4px 15px rgba(78, 205, 196, 0.25); } .finalist-card.selected { border-color: #FFD700; border-width: 2px; background: linear-gradient(135deg, rgba(55, 65, 85, 0.9) 0%, rgba(35, 45, 65, 0.9) 100%); box-shadow: 0 0 20px rgba(255, 215, 0, 0.35); } .finalist-name { font-size: 14px; font-weight: 700; color: #FFFFFF; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .finalist-label { font-size: 9px; color: #4ECDC4; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 600; } .betting-finalists { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; } .betting-amounts { animation: fadeInUp 0.3s ease-out; } @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } } .betting-amounts-title { font-size: 11px; color: #B8B8C8; margin-bottom: 8px; text-align: center; font-weight: 600; letter-spacing: 0.3px; } .betting-amounts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; margin-bottom: 10px; } .bet-button { background: linear-gradient(135deg, rgba(78, 205, 196, 0.12) 0%, rgba(78, 205, 196, 0.04) 100%); border: 1.5px solid rgba(78, 205, 196, 0.35); border-radius: 8px; color: #4ECDC4; font-size: 12px; font-weight: 700; padding: 10px; cursor: pointer !important; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; pointer-events: auto !important; user-select: none; } .bet-button::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background: rgba(78, 205, 196, 0.25); transform: translate(-50%, -50%); transition: width 0.4s, height 0.4s; } .bet-button:hover::before { width: 200px; height: 200px; } .bet-button:hover { border-color: #4ECDC4; transform: scale(1.03); box-shadow: 0 4px 15px rgba(78, 205, 196, 0.25); } .bet-button.selected { background: linear-gradient(135deg, rgba(255, 215, 0, 0.22) 0%, rgba(255, 215, 0, 0.12) 100%); border-color: #FFD700; border-width: 2px; color: #FFD700; box-shadow: 0 0 15px rgba(255, 215, 0, 0.35); } .confirm-bet-button { width: 100%; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); border: none; border-radius: 10px; color: #000000; font-size: 13px; font-weight: 900; padding: 12px; cursor: pointer !important; transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); text-transform: uppercase; letter-spacing: 1.2px; box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4); pointer-events: auto !important; user-select: none; } .confirm-bet-button:hover:not(:disabled) { transform: translateY(-2px) scale(1.01); box-shadow: 0 8px 28px rgba(255, 215, 0, 0.55); } .confirm-bet-button:active:not(:disabled) { transform: translateY(0) scale(0.98); } .confirm-bet-button:disabled { background: linear-gradient(135deg, #555 0%, #333 100%); color: #888; cursor: not-allowed; box-shadow: none; opacity: 0.5; } .bet-prediction { background: rgba(78, 205, 196, 0.08); border: 1px solid rgba(78, 205, 196, 0.2); border-radius: 8px; padding: 10px; margin-bottom: 10px; font-size: 11px; line-height: 1.6; } .prediction-win { color: #4ECDC4; font-weight: 600; margin-bottom: 4px; } .prediction-lose { color: #FF6B6B; font-weight: 600; } .fade-in { animation: fadeIn 0.25s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } </style></head> <body> <div id="app"><!----> <!----> <div data-v-339660d2="" id="hud"><!----> <!----> <div data-v-0875ad82="" data-v-339660d2="" class="stats" style="display: none;"><div data-v-0875ad82="">FPS: -</div> <div data-v-0875ad82="">Ping: -</div> <div data-v-0875ad82="" style="display: none;">Mass: 0</div> <div data-v-0875ad82="" style="display: none;">Score: 0</div> <div data-v-0875ad82="" style="display: none;">Cells: 0</div></div> <div data-v-4900a413="" data-v-339660d2="" id="chatbox" style="display: none;"><!----> <div data-v-4900a413="" id="message-list"></div> <input data-v-4900a413="" id="chatbox-input" type="text" spellcheck="false" autocomplete="off" maxlength="100" tabindex="-1" placeholder="Type your message here"></div> <div data-v-8a0c31c6="" data-v-339660d2="" id="leaderboard" style="display: none;"><div data-v-8a0c31c6="" class="leaderboard-title">Leaderboard</div> <div data-v-8a0c31c6=""></div></div> <div data-v-4c95bd45="" data-v-339660d2=""><div data-v-4c95bd45="" class="minimap-stats" style="bottom: 10px;"><div data-v-4c95bd45="">04:00:55</div> <div data-v-4c95bd45="">5min session</div> <div data-v-4c95bd45="" style="display: none;">0 players</div> <div data-v-4c95bd45="" style="display: none;">0 spectators</div></div> <div data-v-4c95bd45="" class="container" style="display: none;"><canvas data-v-4c95bd45="" id="locations" height="220" width="220"></canvas> <canvas data-v-4c95bd45="" id="minimap" width="220" height="220" style=""></canvas></div></div> <div data-v-b7599310="" data-v-339660d2="" class="cautions"><!----> <!----> <!----></div></div> <!----> <div id="overlay"><canvas id="starfield" width="913" height="1002"></canvas> <div data-v-6843da33="" class="container"><a data-v-6843da33="" href="privacy.html" target="_blank" style="margin-left: 20.59px;">Privacy Policy</a> <span data-v-6843da33="" class="line">|</span> <a data-v-6843da33="" href="tos.html" target="_blank">Terms of Service</a></div> <div data-v-3249d726="" class="container" style="display: none;"><div data-v-3249d726="" class="fade-box box-1"><div data-v-3249d726="" style="padding: 4px;">Baso Network</div> <div data-v-3249d726="" style="padding: 0px 10px 10px;"><div data-v-3249d726="" id="vanis-io_300x250_2"></div></div></div> <!----></div> <div data-v-ebed1606="" id="main-container"><div data-v-ebed1606="" class="bar"><div data-v-ebed1606="" id="vanis-io_728x90"></div></div> <div data-v-0647fbb0="" data-v-ebed1606="" id="tab-menu" class="fade-box two"><div data-v-0647fbb0="" class="tabs"><div data-v-0647fbb0="" class="tab active"> EU </div><div data-v-0647fbb0="" class="tab"> NA </div><div data-v-0647fbb0="" class="tab"> AS </div></div> <div data-v-0647fbb0="" class="server-list"><div data-v-0647fbb0="" tip="Create your own or join someone else's server" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><i data-v-0647fbb0="" class="fas fa-plus"></i> Lobbies</div></div> <div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> FFA</div> <div data-v-0647fbb0="">0 / 60</div></div><div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> Instant</div> <div data-v-0647fbb0="">0 / 60</div></div><div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> Gigasplit</div> <div data-v-0647fbb0="">2 / 60</div></div><div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> Megasplit</div> <div data-v-0647fbb0="">0 / 60</div></div><div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> Crazy</div> <div data-v-0647fbb0="">0 / 60</div></div><div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> HOLLY SHIT FEED</div> <div data-v-0647fbb0="">0 / 60</div></div><div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> Self-Feed</div> <div data-v-0647fbb0="">0 / 60</div></div><div data-v-0647fbb0="" class="vanis-list-item"><div data-v-0647fbb0="" class="server-name"><!----> Terasplit</div> <div data-v-0647fbb0="">0 / 60</div></div></div></div> <div data-v-1bcde71e="" data-v-ebed1606="" id="player-container" class="fade-box two"><div data-v-1bcde71e="" class="tabs"><i data-v-1bcde71e="" class="tab fas fa-cog"></i> <i data-v-1bcde71e="" class="tab fas fa-palette"></i> <i data-v-1bcde71e="" class="tab far fa-keyboard"></i> <i data-v-1bcde71e="" class="tab fas fa-film"></i> <i data-v-1bcde71e="" class="tab fas fa-clipboard-list"></i> <i data-v-1bcde71e="" class="tab fas fa-robot"></i></div> <div data-v-1bcde71e="" id="player-data"><div data-v-1bcde71e="" style="text-align: center; height: 286px;"><div data-v-1bcde71e="" style="padding: 4px;">No advertisement.. (for now)</div> <div data-v-1bcde71e="" id="vanis-io_300x250"></div></div> <div data-v-1bcde71e="" class="row"><input data-v-1bcde71e="" id="nickname" type="text" spellcheck="false" placeholder="Nickname" maxlength="15" style="flex: 2 1 0%; min-width: 1px;"> <input data-v-1bcde71e="" id="teamtag" type="text" spellcheck="false" placeholder="Tag" maxlength="15" class="confidential" style="flex: 1 1 0%; min-width: 1px;"></div> <input data-v-1bcde71e="" id="skinurl" type="text" spellcheck="false" placeholder="https://skins.aetlis.io/s/" maxlength="80" class="confidential"> <div data-v-1bcde71e="" style="color: rgb(255, 204, 0); font-size: 12px; margin-top: 5px; font-weight: bold;">Only skins from skins.aetlis.io are supported!</div> <div data-v-1bcde71e="" id="game-buttons" class=""><button data-v-1bcde71e="" id="play-button" disabled="disabled" class="">Play</button> <button data-v-1bcde71e="" id="spec-button" disabled="disabled"><i data-v-1bcde71e="" class="fa fa-eye"></i></button></div></div> <!----> <!----> <!----> <!----> <!----> <div data-v-0eaeaf66="" data-v-1bcde71e="" class="modal"><div data-v-0eaeaf66="" class="overlay"></div> <i data-v-0eaeaf66="" class="fas fa-times-circle close-button"></i> <div data-v-0eaeaf66="" class="wrapper"><div data-v-0eaeaf66="" class="content fade-box"><div data-v-dual-controls="" data-v-1bcde71e="" id="dual-controls-container"><div data-v-dual-controls="" class="dual-section"><div data-v-dual-controls="" class="dual-section-header">Dual Settings</div> <div data-v-dual-controls="" class="dual-section-content"><div data-v-dual-controls="" class="p-switch pretty" p-checkbox=""><input type="checkbox" value=""> <div class="state"> <label>Remember Ejecting</label></div> <!----> <!----> <!----></div> <div data-v-dual-controls="" class="p-switch pretty" p-checkbox=""><input type="checkbox" value=""> <div class="state"> <label>Remember Mouse Position</label></div> <!----> <!----> <!----></div> <div data-v-dual-controls="" class="p-switch pretty" p-checkbox=""><input type="checkbox" value=""> <div class="state"> <label>Multibox Camera Sync</label></div> <!----> <!----> <!----></div> <div data-v-dual-controls="" class="p-switch pretty" p-checkbox=""><input type="checkbox" value=""> <div class="state"> <label>Hide Outlines</label></div> <!----> <!----> <!----></div> <div data-v-dual-controls="" class="p-switch pretty" p-checkbox=""><input type="checkbox" value=""> <div class="state"> <label>Minion Controls</label></div> <!----> <!----> <!----></div></div></div> <div data-v-dual-controls="" class="dual-section"><div data-v-dual-controls="" class="dual-section-header">Dual Identity</div> <div data-v-dual-controls="" class="dual-section-content"><input data-v-dual-controls="" type="text" placeholder="Dual Nickname" class="input-text"> <input data-v-dual-controls="" type="text" placeholder="Dual Skin URL" class="input-text confidential"><div data-v-dual-controls="" class="info-text">If left empty, dual player will use same nickname and skin.</div></div></div> <div data-v-dual-controls="" class="dual-section"><div data-v-dual-controls="" class="dual-section-header">Minion Keybindings</div> <div data-v-dual-controls="" class="dual-section-content keybindings-content disabled"><div data-v-dual-controls="" class="overlay-message"><i data-v-dual-controls="" class="fas fa-lock"></i><span data-v-dual-controls="">Enable Minion Controls to customize keys</span></div> <div data-v-dual-controls="" class="hotkeys"><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Split</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Feed</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Feed Macro</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Respawn</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Doublesplit</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Triplesplit</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Quadsplit</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Split 32</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Split 64</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Split 128</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Split 256</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Diagonal Linesplit</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div><div data-v-dual-controls="" class="row"><span data-v-dual-controls="" class="action">Minion Lock Linesplit</span> <span data-v-dual-controls="" tabindex="0" class="bind">...</span></div></div></div></div></div></div></div></div></div> <div data-v-661435cd="" data-v-ebed1606="" class="fade-box" style="padding: 17px;"><!----> <div data-v-661435cd="" class="account"><div data-v-661435cd="" style="margin-bottom: 3px;"><img data-v-661435cd="" src="https://cdn.discordapp.com/embed/avatars/0.png" class="avatar"> <div data-v-661435cd="" class="player-info"><div data-v-661435cd="" id="account-name" style="display: flex; align-items: center; gap: 5px;"><img data-v-661435cd="" src="https://aetlis.io/img/badge/level_100.png" height="20" title="Level 100" style="vertical-align: middle;"> lembratedosucessoroleplay</div> <div data-v-661435cd="">Level 190</div> <div data-v-661435cd="">3593216 Total XP</div> <div data-v-661435cd="">17750 Season XP</div></div></div> <div data-v-661435cd="" style="position: relative;"><div data-v-4e838c74="" data-v-661435cd="" class="progress progress-striped xp-progress"><div data-v-4e838c74="" class="progress-bar" style="width: 55.715%;"></div></div> <div data-v-661435cd="" class="xp-data"><div data-v-661435cd="" style="flex: 1 1 0%; margin-left: 8px;">3593216</div> <div data-v-661435cd="" style="margin-right: 7px;">3610000</div></div></div> <div data-v-661435cd="" class="logout"><i data-v-661435cd="" class="fas fa-sign-out-alt"></i> Logout </div></div></div> <div data-v-ebed1606="" class="tab-menu fade-box"><div class="tabs"><div class="tab active"> Skins </div> <div class="tab"><span style="position: relative;"> Perks <!----></span></div></div> <div id="customization"><div id="skins"><div data-v-1c614894="" id="skins-container"><div data-v-1c614894="" id="skins"><span data-v-1c614894="" class="skin-container"><img data-v-1c614894="" src="https://skins.aetlis.io/s/IF3g6oU" alt="" class="skin"> <i data-v-1c614894="" class="fas fa-times skin-remove-button"></i></span><span data-v-1c614894="" class="skin-container"><img data-v-1c614894="" src="https://skins.aetlis.io/s/ZYlU79x" alt="" class="skin"> <i data-v-1c614894="" class="fas fa-times skin-remove-button"></i></span><span data-v-1c614894="" class="skin-container"><img data-v-1c614894="" src="https://skins.aetlis.io/s/Y4hWCgD" alt="" class="skin"> <i data-v-1c614894="" class="fas fa-times skin-remove-button"></i></span><span data-v-1c614894="" class="skin-container"><img data-v-1c614894="" src="https://skins.aetlis.io/s/W1caOQO" alt="" class="skin"> <i data-v-1c614894="" class="fas fa-times skin-remove-button"></i></span><span data-v-1c614894="" class="skin-container"><img data-v-1c614894="" src="https://skins.aetlis.io/s/Vi6vsVQ" alt="" class="skin selected"> <i data-v-1c614894="" class="fas fa-times skin-remove-button"></i></span><span data-v-1c614894="" class="skin-container"><img data-v-1c614894="" src="https://skins.aetlis.io/s/fCwBVEl" alt="" class="skin"> <i data-v-1c614894="" class="fas fa-times skin-remove-button"></i></span> <img data-v-1c614894="" src="img/skin-add.png" alt="" class="skin add-skin"></div></div></div> <div class="perks" style="display: none;"><div class="section row"><div class="header"> Colored name <!----></div> <div class="options"><!----> <div class="confirm-row"><span><div> Unused <b>2</b> weeks </div> <div> Expires in <b>1 week</b></div></span> <button class="confirm-button"> Extend </button></div> <!----> <div class="perk-color-wrapper bottom-margin"><span>Name</span> <span class="perk-color-label">Color</span> <input type="text" spellcheck="false" minlength="2" maxlength="15" placeholder="Kazzy" class="perk-name"> <span class="perk-color-option"><div class="color-picker-wrapper"><div class="color-button" style="background-color: rgb(124, 58, 237);"></div> <!----></div></span> <button class="perk-color-update">Set</button></div> <!----></div></div> <div class="section row"><div class="header"> Badges <!----></div> <div class="options"> Click to toggle. <b>Only one</b> shows <div class="perk-badges-scroll"><span class="badge-list"><span data-tip="Level 100 reached" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/level_100.png" height="32" class="badge-icon selected"></span><span data-tip="Level 200 reached" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/level_200.png" height="32" class="badge-icon dim"></span><span data-tip="Level 300 reached" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/level_300.png" height="32" class="badge-icon dim"></span><span data-tip="Topped season leaderboard" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/slb_winner.png" height="32" class="badge-icon dim"></span><span data-tip="Discord server booster" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/server_booster.png" height="32" class="badge-icon dim"></span><span data-tip="r/place contributor (2022)" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/place_contributor_2022.png" height="32" class="badge-icon dim"></span><span data-tip="r/place contributor (2023)" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/place_contributor_2023.png" height="32" class="badge-icon"></span><span data-tip="YouTuber" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/youtuber.png" height="32" class="badge-icon dim"></span><span data-tip="Editor" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/editor.png" height="32" class="badge-icon dim"></span><span data-tip="Contributor" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/contributor.png" height="32" class="badge-icon dim"></span><span data-tip="FFA tournament winner" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/ffa_winner.png" height="32" class="badge-icon dim"></span><span data-tip="Instant tournament winner" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/instant_winner.png" height="32" class="badge-icon dim"></span><span data-tip="Gigasplit tournament winner" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/gigasplit_winner.png" height="32" class="badge-icon dim"></span><span data-tip="Megasplit tournament winner" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/megasplit_winner.png" height="32" class="badge-icon dim"></span><span data-tip="Crazy tournament winner" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/crazy_winner.png" height="32" class="badge-icon dim"></span><span data-tip="Self-feed tournament winner" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/self-feed_winner.png" height="32" class="badge-icon dim"></span><span data-tip="Official tournament organizer" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/organizer.png" height="32" class="badge-icon dim"></span><span data-tip="Official tournament referee" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/referee.png" height="32" class="badge-icon dim"></span><span data-tip="Skin moderator" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/skin_mod.png" height="32" class="badge-icon dim"></span><span data-tip="Moderator" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/mod.png" height="32" class="badge-icon dim"></span><span data-tip="Administrator" class="badge-wrapper"><img draggable="false" src="https://aetlis.io/img/badge/admin.png" height="32" class="badge-icon dim"></span></span></div> <!----></div></div> <div class="section row"><div class="header"> Aura </div> <div> Rare awards for players<br> Coming soon (actually never <img src="img/troll.png" alt="troll" style="width: 20px; height: 20px; vertical-align: middle; margin-left: 5px;">) </div></div></div></div></div></div> <div data-v-4d0670e9="" class="social-container"><a data-v-4d0670e9="" href="https://discord.gg/7eTJFxQHjE" target="_blank" class="discord-link"><i data-v-4d0670e9="" class="fab fa-discord"></i> Official Discord </a> <a data-v-4d0670e9="" href="https://discord.gg/CwERc3dWgw" target="_blank" class="tournaments-link"><i data-v-4d0670e9="" class="fas fa-trophy"></i> Tournaments </a> <a data-v-4d0670e9="" href="https://discord.gg/7eTJFxQHjE" target="_blank" class="youtube-link"><i data-v-4d0670e9="" class="fab fa-youtube"></i> YouTube </a> <a data-v-4d0670e9="" href="https://skins.aetlis.io" target="_blank" id="skins-link"><i data-v-4d0670e9="" class="fas fa-images"></i> Skins </a></div> <p class="preload font1">text</p> <p class="preload font2">text</p> <div data-v-76d60428="" class="image-captcha-overlay" style="display: none;"><div data-v-76d60428="" class="center-screen" style="z-index: 9999;"><div data-v-76d60428="" class="captcha-container" style="background: rgba(0, 0, 0, 0.9); padding: 30px; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px;"><div data-v-76d60428="" style="color: rgb(255, 255, 255); font-size: 24px; font-weight: bold; margin-bottom: 20px; text-align: center;">Bot Protection</div> <div data-v-76d60428="" style="color: rgb(170, 170, 170); margin-bottom: 15px; text-align: center;">Enter the text shown in the image:</div> <div data-v-76d60428="" style="margin-bottom: 20px; text-align: center;"><img data-v-76d60428="" src="" alt="Captcha" style="border: 2px solid rgb(68, 68, 68); border-radius: 5px; display: block; margin: 0px auto;"></div> <div data-v-76d60428="" style="margin-bottom: 15px;"><input data-v-76d60428="" type="text" placeholder="Enter text here" maxlength="10" style="width: 100%; padding: 12px; font-size: 18px; text-align: center; border: 2px solid rgb(68, 68, 68); border-radius: 5px; background: rgb(34, 34, 34); color: rgb(255, 255, 255); text-transform: uppercase;"></div> <!----> <div data-v-76d60428="" style="text-align: center;"><button data-v-76d60428="" style="padding: 12px 40px; font-size: 18px; font-weight: bold; background: rgb(78, 205, 196); color: rgb(255, 255, 255); border: none; border-radius: 5px; cursor: pointer; transition: 0.3s;">Submit</button></div></div></div></div></div></div> <canvas id="canvas" tabindex="0" width="1826" height="2004" style=""></canvas> <script type="text/javascript" src="js/vendor.js"></script> <script type="text/javascript" src="js/main.js"></script> <div id="referee-panel" class="hidden"> <div class="referee-group"> <button class="referee-btn start" onclick="TournamentUI.sendCommand('unfreeze')"><span>▶</span> Start</button> <button class="referee-btn pause" onclick="TournamentUI.sendCommand('pause')"><span>⏸</span> Pause</button> </div> <div class="referee-group"> <button class="referee-btn reset" onclick="TournamentUI.sendCommand('resetSpawn')"><span>⟲</span> Reset</button> <button class="referee-btn rematch" onclick="TournamentUI.confirmRematch()"><span>↩</span> Rematch</button> </div> <div class="referee-group"> <div class="referee-input-row"> <label>Time</label> <input type="number" id="tournament-timer-input" value="8" min="1" max="30"> <button onclick="TournamentUI.setTimer()">SET</button> </div> <div class="referee-input-row"> <label>Rnds</label> <input type="number" id="tournament-rounds-input" value="3" min="1" max="10"> <button onclick="TournamentUI.setRounds()">SET</button> </div> <div class="referee-input-row"> <label>Resp</label> <input type="number" id="tournament-respawn-input" value="5" min="0" max="30"> <button onclick="TournamentUI.setRespawnCooldown()">SET</button> </div> <div class="referee-input-row"> <label>Bots</label> <input type="number" id="tournament-bots-input" value="5" min="1" max="50"> <button onclick="TournamentUI.setBots()">ADD</button> <button onclick="TournamentUI.clearBots()">CLR</button> </div> </div> <div class="referee-group"> <button class="referee-btn filter" onclick="TournamentUI.sendCommand('filterChat')"><span>⊘</span> Filter</button> <button class="referee-btn near-death" id="near-death-btn" onclick="TournamentUI.sendCommand('nearDeathRespawn')"><span>⟳</span> Near</button> </div> </div><div id="tournament-scoreboard" class="hidden"> <div class="sb-team left" id="sb-team1"> <div class="sb-score-bg" id="sb-score1-bg">0</div> <div class="sb-name" id="team1-name">TEAM 1</div> <div class="sb-mass" id="team1-mass">0</div> </div> <div class="sb-center"> <div class="sb-timer" id="tournament-timer">8:00</div> <div class="sb-round" id="tournament-round">ROUND 1</div> </div> <div class="sb-team right" id="sb-team2"> <div class="sb-score-bg" id="sb-score2-bg">0</div> <div class="sb-name" id="team2-name">TEAM 2</div> <div class="sb-mass" id="team2-mass">0</div> </div> </div><div id="eclipse-ctx-menu" style="position: fixed; z-index: 1000001; background: rgb(10, 10, 15); border: 1px solid rgb(124, 58, 237); border-radius: 12px; width: 220px; display: none; font-family: Outfit, sans-serif; overflow: hidden; box-shadow: rgb(0, 0, 0) 0px 10px 40px;"></div><div style="position: fixed; top: 20px; right: 20px; z-index: 1000000; width: 45px; height: 45px; background: rgba(124, 58, 237, 0.5); border: 1px solid rgb(124, 58, 237); border-radius: 10px; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;"><div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div></div><canvas id="eclipse-lines-canvas" width="913" height="1002" style="position: fixed; inset: 0px; pointer-events: none; z-index: 9990;"></canvas></body></html>`;
            
            let wrap = document.createElement('div');
            wrap.id = "eclipse-main-wrap";
            wrap.style.cssText = "position:fixed; inset:0; z-index:2147483647; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.8);";
            if (!wrap.parentElement) document.body.appendChild(wrap);
            wrap.innerHTML = html;

            setTimeout(() => {
                window.eclipseTab('player');

                // Visuals toggle
                const visualsTab = wrap.querySelector('#tab-visuals');
                if(visualsTab && !document.getElementById('eclipse-lines-toggle')) {
                     const div = document.createElement('div');
                     div.innerHTML = `<br><label style="color:white;"><input type="checkbox" id="eclipse-lines-toggle" checked> Show Lines</label>`;
                     visualsTab.appendChild(div);
                     document.getElementById('eclipse-lines-toggle').onchange = (e) => window.eclipse_showLines = e.target.checked;
                }

                // Bind Buttons com a nova função segura
                const buttons = wrap.querySelectorAll('button, .btn, .vanis-button');
                buttons.forEach(btn => {
                    const txt = btn.innerText.toLowerCase();
                    if(txt.includes("inject") || txt.includes("apply") || btn.id.includes("inject")) {
                        btn.onclick = window.eclipseInjectSystem;
                    }
                });
            }, 100);

            const closeBtn = wrap.querySelector('#btn-activate');
            if(closeBtn) closeBtn.onclick = () => { wrap.remove(); };
    };

    const setupLines = () => {
        let canvas = document.getElementById('eclipse-lines-canvas') || document.createElement('canvas');
        canvas.id = 'eclipse-lines-canvas';
        canvas.style.cssText = "position:fixed; inset:0; pointer-events:none; z-index:9990;";
        if (!canvas.parentElement) document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const draw = () => {
            const g = window.game;
            canvas.width = window.innerWidth; canvas.height = window.innerHeight;
            if (!window.eclipse_showLines || !g?.camera || !g?.nodelist) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                requestAnimationFrame(draw); return;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const activeId = g.activePid || g.playerId;
            const mouse = g.rawMouse || {x: innerWidth/2, y: innerHeight/2};
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"; ctx.lineWidth = 1.5;
            for (let n of g.nodelist) {
                if (n && n.pid === activeId && !n.isDead) {
                    const cam = (window.eclipseModeActive && realCameraRefs) ? realCameraRefs : g.camera;
                    const s = cam.scale.x;
                    const sx = (n.x - cam.position.x) * s + (innerWidth / 2);
                    const sy = (n.y - cam.position.y) * s + (innerHeight / 2);
                    ctx.moveTo(sx, sy); ctx.lineTo(mouse.x, mouse.y);
                }
            }
            ctx.stroke();
            requestAnimationFrame(draw);
        };
        draw();
    };

    const init = () => {
        contextMenu = document.createElement('div');
        contextMenu.id = 'eclipse-ctx-menu';
        contextMenu.style.cssText = "position:fixed; z-index:1000001; background:#0a0a0f; border:1px solid #7c3aed; border-radius:12px; width:220px; display:none; font-family:'Outfit', sans-serif; overflow:hidden; box-shadow:0 10px 40px #000;";
        document.body.appendChild(contextMenu);

        window.addEventListener('keydown', (e) => {
            if (e.altKey && e.code === 'KeyC') { e.preventDefault(); triggerSave(); }
        });

        window.addEventListener('contextmenu', (e) => {
            const g = window.game;
            if (!g?.nodelist) return;
            const found = g.nodelist.find(n => n.pid !== g.playerId && Math.sqrt((n.x-g.mouse.x)**2 + (n.y-g.mouse.y)**2) < n.size);

            if (found) {
                e.preventDefault();
                targetPid = found.pid;
                const isHidden = window.hiddenSkinPids.has(targetPid);
                const pName = (g.playerManager?.players[targetPid]?.name) || "Player";
                contextMenu.innerHTML = `
                    <div style="background:#7c3aed; color:white; padding:12px; font-weight:bold; text-align:center;">${pName}</div>
                    <div style="padding:6px; color:#eee; cursor:pointer;">
                        <div id="ctx-spectate" style="padding:10px;">Spectate 🔭</div>
                        <div id="ctx-block" style="padding:10px; color:#ff4444;">Block/Profile ⚙️</div>
                        <div style="height:1px; background:#ffffff22; margin:4px;"></div>
                        ${isHidden ? `<div id="ctx-show" style="padding:10px;">Show Skin ✨</div>` : `<div id="ctx-hide" style="padding:10px;">Hide Skin 👁️</div>`}
                        <div id="ctx-yoink" style="padding:10px;">Yoink Skin 💎</div>
                        <div id="ctx-copy" style="padding:10px;">Copy URL 🔗</div>
                    </div>`;
                const actions = { 'ctx-spectate': 'spectate', 'ctx-block': 'block', 'ctx-show': 'show', 'ctx-hide': 'hide', 'ctx-yoink': 'yoink', 'ctx-copy': 'copy' };
                for (const [id, action] of Object.entries(actions)) {
                    const el = document.getElementById(id);
                    if (el) el.onclick = () => window.eclipseAction(action);
                }
                contextMenu.style.display = 'block';
                contextMenu.style.left = e.clientX + 'px'; contextMenu.style.top = e.clientY + 'px';
            } else { contextMenu.style.display = 'none'; }
        });

        const trig = document.createElement('div');
        trig.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000000; width:45px; height:45px; background:rgba(124,58,237,0.5); border:1px solid #7c3aed; border-radius:10px; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;";
        trig.innerHTML = `<div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div>`;
        trig.onclick = openEclipseMenu;
        document.body.appendChild(trig);
        
        window.addEventListener('click', () => contextMenu.style.display = 'none');
        setupLines();
        initDualRecordingSystem();

        setTimeout(openEclipseMenu, 1000);
    };
    init();
})();

    console.log("[ECLIPSE] Todas as funcionalidades foram carregadas.");
})();
