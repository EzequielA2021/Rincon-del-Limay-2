const slider = document.querySelector("#slider");
let sliderSection = document.querySelector(".slider_seccion");
let SlidersctionLast = sliderSection[sliderSection.length - 1];

const btnleft = document.querySelector("#boton-izq");
const btnright = document.querySelector("#boton-der");

slider.insertAdjacentElement('afterbegin', SlidersctionLast);

function mover() {
    let sliderSectionfirst = document.querySelector(".slider_seccion")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionfirst);
        slider.style.marginleft = "-100%";
    }, 500);
}

function remover() {
    let sliderSectionfirst = document.querySelector(".slider_seccion")[0];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', SlidersctionLast);
        slider.style.marginleft = "-100%";
    }, 500);
}
btnright.addEventListener('click', function() {
    mover();
});
btnleft.addEventListener('click', function() {
    remover();
});