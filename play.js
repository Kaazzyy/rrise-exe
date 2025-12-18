function initEclipse() {
    console.log("[Eclipse] Play.js carregado.");
    const btn = document.getElementById("playBtn");
    if (!btn) return;

    // Ativa o botão à força
    btn.disabled = false;
    btn.innerText = "Play Now";

    btn.onclick = async () => {
        const nick = document.getElementById("nickname").value || "Player";
        localStorage.setItem('nickname', nick);
        
        btn.innerText = "Loading Engine...";
        
        // Injeção direta do motor
        const s = document.createElement('script');
        s.src = `https://raw.githubusercontent.com/kaazzyy/Eclipse/main/main.js?t=${Date.now()}`;
        document.head.appendChild(s);
        
        console.log("[Eclipse] Main.js solicitado ao GitHub.");
    };
}

// Tenta iniciar várias vezes caso o HTML demore a renderizar
let attempts = 0;
const checkExist = setInterval(() => {
    if (document.getElementById("playBtn")) {
        initEclipse();
        clearInterval(checkExist);
    }
    if (++attempts > 20) clearInterval(checkExist);
}, 200);
