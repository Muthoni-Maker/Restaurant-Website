let openNavClick=document.querySelector(".nav-slider");
let closeNavClick=document.querySelector(".close-nave-slider");
let navSlidersection=document.querySelector(".nav-slider-section");

openNavClick.onclick=function(){
     
     navSlidersection.classList.remove("closeNav");
     navSlidersection.classList.add("openNav");

}
closeNavClick.onclick=function(){

   navSlidersection.classList.remove("openNav");
   navSlidersection.classList.add("closeNav");
}