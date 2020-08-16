const navigation_bar=document.querySelector('.scroll-nav-bar');
const nav_links=document.querySelectorAll('.nav-item');

window.onscroll=function(){documentScroll()};
function documentScroll(){
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        navigation_bar.style.backgroundColor="white";



        for (let i of nav_links){
            i.style.color="dodgerblue";
            i.style.padding="20px";
        }
    }
    else{
        navigation_bar.style.backgroundColor="dodgerblue";
        for (let i of nav_links){
           i.style.color="white";
        //    i.style.backgroundColor="dodgerblue";
        }
    }
}