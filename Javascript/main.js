const hoverEffect = document.querySelector(".main-header");

hoverEffect.addEventListener("mouseenter", function (){
    hoverEffect.classList.add("active");
})

hoverEffect.addEventListener("mouseleave", function () {
    hoverEffect.classList.remove("active");
})