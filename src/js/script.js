const IMG = document.getElementById("imgMENU");
const IMG2 = document.getElementById("imgMENU2");
const MENU2 = document.querySelector(".menuimg2");
const MENU = document.querySelector(".caixa");


IMG.addEventListener("click", (e) =>{

    MENU.style.height = "100vh";
    MENU.style.width = "180px";
    MENU.style.border = "5px solid black";
    MENU.style.borderLeft = "none";
    MENU.style.borderTop = "none";
    MENU.style.borderBottom = "none";
    MENU2.style.visibility = "visible";
    MENU.style.transition = "1s ease-out";
})
IMG2.addEventListener("click", (e) =>{

    MENU.style.height = "0px";
    MENU.style.width = "0px";
    MENU.style.border = "none";
    MENU.style.backgroundColor = "";
    MENU2.style.visibility = "collapse";
})