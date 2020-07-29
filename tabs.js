let tabHeader=document.querySelectorAll(".tabs-header");

tabHeader.forEach((button)=>{
    button.onclick=changeTabheader;
});
function changeTabheader(){
   console.log('click');
   let tabnumber=parseInt(this.dataset.tab);
   document.querySelector('.active-tab').classList.remove('active-tab');
   this.classList.add('active-tab');

   switch (tabnumber){
       case 1:
           changeTabsection(tabnumber);
           break;
       case 2:
           changeTabsection(tabnumber);
           break;
       case 3:
           changeTabsection(tabnumber);
           break;
        case 4:
           changeTabsection(tabnumber);
            break;     
        default:
            break;
 }
}
function changeTabsection(tabnumber){
    let currentTab=document.querySelector('.show-tab');
     currentTab.classList.remove('show-tab');
     currentTab.classList.add('hide-tab');

    let newSesction=document.getElementsById('.tabSection'+tabnumber);

    newSelection.classList.remove('hide-tab');

    newSesction.classList.add('show-tab');
}