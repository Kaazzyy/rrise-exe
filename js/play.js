document.getElementById("playBtn").onclick = function () {
    const nick = document.getElementById("nickname").value || "Player";
    const skin = document.getElementById("skin").value || "";

    localStorage.nickname = nick;
    localStorage.skinUrl = skin;

    sessionStorage.setItem("kazzy_play", "1");

    window.location.href = "https://aetlis.io/";
};
