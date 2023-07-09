/* swiper */
var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    
    autoplay: {
      delay: 755500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView:4,
            spaceBetween: 15,
        },
        900:{
            slidesPerView:5,
            spaceBetween: 20,
        },
    },
  });


let playButton = document.getElementById('.play-movie');
let video = document.getElementById('.video-container');
let myvideo = document.getElementById('#myvideo'); 
let closebtn = document.getElementById('.close-video');

playButton.onclick = () => {
  video.classList.add("show-video");

  myvideo.play();
 };

closebtn.onclick = () => {
  video.classList.remove("show-video");

  myvideo.pause();
 };
