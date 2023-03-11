let nav =document.getElementsByClassName("nav-link");
const ver =0;


nav[0].addEventListener("click", () => {
    nav[0].style.background = ("");
    nav[1].style.background = ("none");
    nav[2].style.background = ("none");
});

nav[1].addEventListener("click", () => {
    nav[0].style.background = ("none");
    nav[1].style.background = ("rgb(38, 32, 75)");ver=1;
    nav[2].style.background = ("none");
});

nav[2].addEventListener("click", () => {
    nav[0].style.background = ("none");
    nav[1].style.background = ("none");
    nav[2].style.background = ("rgb(61, 61, 61,0.2)");
});






