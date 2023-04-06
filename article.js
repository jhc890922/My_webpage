function profile() {
    document.getElementById("title").innerHTML = "Intro\n";
    document.getElementById("title").style.position = "absolute";
    document.getElementById("title").style.top = "10vw";
    document.getElementById("title").style.left = "25vw";
    document.getElementById("title").style.fontSize = "50px";
    document.getElementById("title").style.fontFamily = "'Inconsolata', monospace";
    document.getElementById("title").style.fontWeight = "100";
    document.getElementById("title").style.display = "block";
    document.getElementById("article").style.display = "block";

    document.getElementById("article").innerHTML = "姓名 : 許晟煒<br>年齡 : 19<br>性別 : 男<br>生日 : 2000/09/22<br>星座 : 處女座<br>職業 : 學生<br>就讀學校 : 國立中正大學資訊工程學系<br>Instagram : la_la__la_la<br>";
    document.getElementById("article").style.position = "absolute";
    document.getElementById("article").style.top = "20vw";
    document.getElementById("article").style.left = "25vw";
    document.getElementById("article").style.fontSize = "30px";

    document.getElementById("img_in_profile").style.display = "block";
    document.getElementById("trying").style.display = "none";


}