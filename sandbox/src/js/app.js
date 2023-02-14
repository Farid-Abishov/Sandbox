const Navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
     Navbar.classList.add("active_nav");
    }
    else{
        Navbar.classList.remove("active_nav");
    }
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