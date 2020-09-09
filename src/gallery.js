/* let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text"); */

window.addEventListener('scroll', function(){
    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let road = document.getElementById("road");
    let text = document.getElementById("text");

    var value = window.scrollY;

    bg.style.top = value * 0 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.bottom = -value * 0.15 + 'px';
    text.style.bottom = -value * 1 + 'px';
})
