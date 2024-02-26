// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("burger").addEventListener("click", function(){
//         document.querySelector("header").classList.toggle("menu_active")
//     })
// })
const menu = document.getElementById("menu")
const burger = document.getElementById("burger")
const body = document.getElementById("body")
burger.addEventListener("click", () => {
    menu.classList.toggle("menu_active")
})
burger.addEventListener("click", () => {
    body.classList.toggle("body_fixed")
})