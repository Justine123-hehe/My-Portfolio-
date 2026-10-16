ocument.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navlinks");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
