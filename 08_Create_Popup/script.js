let submit = document.getElementsByClassName("btn")[0];
let ok = document.getElementsByClassName("ok")[0];
let popup = document.getElementById("popup");


submit.addEventListener("click", function Openpopup(){
popup.classList.add("open-popup");
});

ok.addEventListener("click", function Closepopup(){
    popup.classList.remove("open-popup");
});