document.getElementById("playBtn").onclick = function () {
    const nick = document.getElementById("nickname").value || "Player";
    const skin = document.getElementById("skin").value || "";
    
    const targetUrl = new URL("https://aetlis.io/");
    targetUrl.searchParams.set('username', nick);
    if (skin) {
        targetUrl.searchParams.set('skin', skin);
    }
    
    window.location.href = targetUrl.toString();
};
