var settingsmenu = document.querySelector(".settings-menu");
var darkButn = document.getElementById("dark-butn")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkButn.onclick=function(){
    darkButn.classList.toggle("dark-butn-on");
    document.body.classList.toggle("dark-theme");
if(localStorage.getItem("theme")=="light"){
    localStorage.setItem("theme","dark");
}
else{
    localStorage.setItem("theme","light");

}

}   
if(localStorage.getItem("theme")=="light"){
    darkButn.classList.remove("dark-butn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkButn.classList.add("dark-butn-on");
    document.body.classList.add("dark-theme");

}
else{
    localStorage.setItem("theme","light");
}