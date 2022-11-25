// mobile toggle menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");
let overlay = document.querySelector(".overlay");
let headerMenu = document.querySelectorAll(".header__menu li");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
        document.body.style.overflow = "hidden";
    } else{
        mainMenu.classList.remove("active-menu");
        document.body.style.overflow = "visible";
    }
})

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active-menu");
    mainMenu.classList.remove("active-menu");
    document.body.style.overflow = "visible";
})

headerMenu.forEach( item => {
    item.addEventListener("click", () => {
        mainMenu.classList.remove("active-menu");
        mobileMenu.classList.remove("active-menu");
        document.body.style.overflow = "visible";
    })
})