const Navbar=document.querySelector(".navbar");
const Totop=document.querySelector(".to-top");
const Moblogo=document.querySelector(".mob_nav_logo");
const Normlogo=document.querySelector(".Normal_logo");
const Navlink=document.querySelectorAll(".navlink");
const Navlinkicon=document.querySelector("navlink_icon");
const ContactBtn=document.querySelector(".cntct-btn");
window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
     Navbar.classList.add("active_nav");
     Totop.style.display="flex";
     Moblogo.style.display="inline-block";
     Normlogo.style.display="none";
    for (const link of  Navlink ) {
       link.style.color="black"
    }
     ContactBtn.style.background="#3f78e0"
     ContactBtn.style.color="#fff"
    }
    else{
        Navbar.classList.remove("active_nav");
        Totop.style.display="none ";
        Moblogo.style.display="none";
        Normlogo.style.display="inline-block";
        ContactBtn.style.background="#fff"
        ContactBtn.style.color="black"
        for (const link of  Navlink ) {
          link.style.color="#fff"
       }
    }
})
Totop&&Totop.addEventListener("click", () =>{
    window.scrollTo({ top: 0, behavior: "smooth" });
})
var swiper = new Swiper(".card-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      240: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
const Bar=document.querySelector(".bi-bar-chart-steps");
const Mobile_nav=document.querySelector(".mob_nav");
Bar&&Bar.addEventListener("click",()=>{
  Mobile_nav.classList.toggle("active_mobnav");
}) 