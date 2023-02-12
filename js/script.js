// buttons
let view = document.querySelector("main > section:nth-child(3) > h2");
let hide = document.querySelector("main > section:nth-child(3) > h2:last-child");
console.log(view);

view.onclick = function () {
    document.getElementById("projects").style.display = "grid";
    document.getElementsByTagName("main")[0].style.height = "1300px";
    view.style.display = "none";
    hide.style.display = "block";
}

hide.onclick = function () {
    document.getElementById("projects").style.display = "none";
    document.getElementsByTagName("main")[0].style.height = "750px";
    view.style.display = "block";
    hide.style.display = "none";
}