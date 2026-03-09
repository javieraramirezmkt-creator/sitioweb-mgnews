/* MENU HAMBURGUESA */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

/* BOTON SUBIR */
const topBtn = document.getElementById("topBtn");
window.onscroll = function(){
if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
};

topBtn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};