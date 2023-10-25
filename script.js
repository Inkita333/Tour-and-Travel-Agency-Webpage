let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');

});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');

});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// const swiper = new swiper(".review-slider", {
    // spaceBetween: 20,
    // loop:true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 1,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     },
    //     1024: {
    //         slidesPerView: 3,
    //     },
    // },
//   });

// var swiper = new swiper(".swiper review-slider", {
//     // navigation: {
//     //   nextEl: ".review-slider-button-next",
//     //   prevEl: ".review-slider-button-prev",
//     // },

//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },

// });
   
