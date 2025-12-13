document.getElementById("playBtn").onclick = function () {
    const nick = document.getElementById("nickname").value || "Player";
    const skin = document.getElementById("skin").value || "";
    
    localStorage.nickname = nick;
    localStorage.skinUrl = skin;
    
    const targetUrl = new URL("https://aetlis.io/");
    targetUrl.searchParams.set("nickname", nick);
    if (skin) {
        targetUrl.searchParams.set("skin", skin);
    }
    
    window.location.href = targetUrl.toString();
};

window.onload = function() {
    if(localStorage.nickname) document.getElementById("nickname").value = localStorage.nickname;
    if(localStorage.skinUrl) document.getElementById("skin").value = localStorage.skinUrl;
};
