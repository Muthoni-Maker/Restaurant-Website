let tabHeader=document.querySelectorAll(".tabs-header");

tabHeader.forEach((button)=>{
    button.onclick=changeTabheader;
});
function changeTabheader(){
   console.log('click');
   let tabnumber=parseInt(this.dataset.tab);
   switch (tabnumber){
       case 1:
           break;
       case 2:
           break;
       case 3:
           break;
        case 4:
            break;     
        default:
            break;
 }
}
