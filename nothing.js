function notyet() {
    document.getElementById("title").style.display = "none";
    document.getElementById("article").style.display = "none";
    document.getElementById("img_in_profile").style.display = "none";

    document.getElementById("trying").style.display = "block";
    document.getElementById("trying").innerHTML = "這裡跟我空虛的心一樣寂寞<br>";
    document.getElementById("trying").style.position = "absolute";
    document.getElementById("trying").style.top = "20vw";
    document.getElementById("trying").style.left = "25vw";
    document.getElementById("trying").style.fontSize = "100px";
}