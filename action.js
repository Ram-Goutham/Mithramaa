let spinner = document.querySelector(".spinner");
let toggle = document.querySelector(".toggle");
let toggle__btn = document.querySelector(".toggle__btn");


function myFunction(){
//     spinner.classList.toggle("block");
//     toggle__btn.classList.toggle("none");
    let spin = spinner.style.display;
    let togg = toggle__btn.style.display;
    if(spin == "block" && togg == "none"){
        spinner.style.display = "none";
        toggle__btn.style.display = "block";
        console.log("chow",spin,togg);
        
    }
    else{
        spinner.style.display = "block";
        toggle__btn.style.display = "none";
        console.log("ram");
    }
    console.log(spin,togg);
}
