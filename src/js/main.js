// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("burger").addEventListener("click", function(){
//         document.querySelector("header").classList.toggle("menu_active")
//     })
// })
const menu = document.getElementById("menu")
const burger = document.getElementById("burger")
const body = document.getElementById("body")
const link = document.querySelectorAll(".menu__list-item")

link.forEach(element => {
    element.addEventListener("click", () => {
        menu.classList.remove("menu_active")
        body.classList.remove("body_fixed")});
    });

burger.addEventListener("click", () => {
    menu.classList.toggle("menu_active")
    body.classList.toggle("body_fixed")
});