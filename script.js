const widget = document.getElementById("widget");
const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("expanded");
})