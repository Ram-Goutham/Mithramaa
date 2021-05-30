let spinner = document.querySelector(".spinner");
let toggle = document.querySelector(".toggle");
let toggleBtn = document.querySelector(".toggle__btn");
let chow = 0;
let Button = document.querySelector(".Button");
let menuToggle = document.querySelector(".menu__toggle");
let element = document.querySelector('.menu__list');
console.log(element);

function myFunction(){
    spinner.classList.toggle("block");
    toggleBtn.classList.toggle("none");
    menuToggle.classList.toggle("show");
};
element.addEventListener("click",()=>{
    spinner.classList.toggle("block");
    toggleBtn.classList.toggle("none");
    menuToggle.classList.toggle("show");
    console.log("chow");
});




