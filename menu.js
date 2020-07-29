let openNav=document.querySelector(".nav-slider");
let closeNav=document.querySelector(".close-nave-slider");
let navSlidersection=document.querySelector(".nav-slider-section");
let navLinks=document.querySelectorAll('.nav-links');

openNav.onclick=function(){
     
     navSlidersection.classList.remove("closeNav");
     navSlidersection.classList.add("openNav");

}
closeNav.onclick=closeNavSlider;

navLinks.forEach((link)=>{
   link.onclick=closeNavSlider;

})
function closeNavSlider(){
   navSlidersection.classList.remove("openNav");
   navSlidersection.classList.add("closeNav");
}