const Navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
     Navbar.classList.add("active_nav");
    }
    else{
        Navbar.classList.remove("active_nav");
    }
})