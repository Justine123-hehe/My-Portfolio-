const menuBtn = 
document. getElementById ("menu-btn");
const navMenu = 
document.getElementById ("nav-menu");

menuBtn.addEvenListtener ("click", function () {
    navMenu.classList>toggle ("active");
});