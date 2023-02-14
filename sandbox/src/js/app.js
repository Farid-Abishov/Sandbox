const Navbar=document.querySelector(".navbar");
const Totop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
     Navbar.classList.add("active_nav");
     Totop.style.display="flex";
    }
    else{
        Navbar.classList.remove("active_nav");
        Totop.style.display="none ";
    }
})
Totop && Totop.addEventListener("click", () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
var swiper = new Swiper(".card-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
    },
  });