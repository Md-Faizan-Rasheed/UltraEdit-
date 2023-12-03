
// // let rec= document.querySelector('.bar');
// // let list=document.querySelector('.barlist');


// // rec.addEventListener('click', ()=>{
// //     list.classList.toggle('hide');
// // });


// const hamburger = document.querySelector('.hamburger-menu');
// const navMenu = document.querySelector('.nav-menu');

// hamburger.addEventListener('click', () => {
//   navMenu.classList.toggle('hide');
// });

// const body=document.querySelector("body");
// const nav=document.querySelector("nav");
// const modeToggle=document.querySelector(".dark-light");

// modeToggle.addEventListener("click", () => {
//     modeToggle.classList.toggle("active");

//     body.classList.toggle("dark");
// })

// document.addEventListener("DOMContentLoaded", function () {
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const navMenu = document.getElementById('navMenu');

//     // Toggle the 'hide' class on the navMenu when the hamburger menu is clicked
//     hamburgerMenu.addEventListener('click', function () {
//         navMenu.classList.toggle('hide');
//     });
// });


var menubtn =document.querySelector(".hamburger-menu");
let list =document.querySelector("#show");

menubtn.addEventListener("click",function() {
// list.classList.toggle('hide');
list.style.backgroundColor="pink";
// list.classList.toggle('hide');
});
