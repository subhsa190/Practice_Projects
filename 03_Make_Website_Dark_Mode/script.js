var icon = document.getElementById("icon");

icon.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "assets/sun.png";
    }else{
        icon.src ="assets/moon.png";
    }
})