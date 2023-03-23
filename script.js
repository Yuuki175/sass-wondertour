const kamote = document.querySelectorAll(".tabs__item");
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.querySelector("ul").classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");

    })
})

const toggleBar = document.querySelector(".toggle__bar");
const toggleDot = document.querySelector(".toggle__dot");
const headerBar = document.querySelector(".left__nav");
const headerDot = document.querySelector(".right__nav");
toggleBar.addEventListener("click", () => {
  toggleBar.classList.toggle("open");
  headerBar.classList.toggle("open");
});
toggleDot.addEventListener("click", () => {
  toggleDot.classList.toggle("open");
  headerDot.classList.toggle("open");
});

// //coffee-------------------------------------------------------------
// const starNav=document.querySelectorAll(".star__nav__link");
// const starContent=document.querySelectorAll(".coffee__tab__content");
// starNav.forEach((star) => {
//     star.addEventListener("click", () => {
//         removeActiveStar();
//         star.classList.add("active");
//         const activeContent= document.querySelector(`#${star.id}-content`);
//         removeActiveContent();
//         activeContent.classList.add("active");
//     })
// })

// function removeActiveStar(){
//     starNav.forEach((star) =>{
//         star.classList.remove("active");
//     })
// }
// function removeActiveContent(){
//     starContent.forEach((star) =>{
//         star.classList.remove("active");
//     })
// }
// //coffee-------------------------------------------------------------

// const kamote = document.querySelectorAll(".links__item h4");
// kamote.forEach((kamoteq) => {
//     kamoteq.addEventListener("click", () => {
//         kamoteq.nextElementSibling.classList.toggle("open");
//         kamoteq.querySelector("i").classList.toggle("open");
//     })
// })

// const toggleMenu = document.querySelector(".toggle__menu");
// const headerNav = document.querySelector(".header__nav");
// toggleMenu.addEventListener("click", () => {
//   toggleMenu.classList.toggle("open");
//   headerNav.classList.toggle("open");
// });




// const btnShow = document.querySelector('.btn__show');
// const btnBack = document.querySelector('.btn__back');
// const body = document.querySelector('body');

// if(btnShow) {
//     btnShow.addEventListener('click', () => {
//         body.classList.add('show');
//     })
// }
// if(btnBack) {
//     btnBack.addEventListener('click', () => {
//         body.classList.remove('show');
//     })
// }