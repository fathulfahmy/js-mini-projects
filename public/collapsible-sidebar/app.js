// DOM
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
// toggle
menuBtn.addEventListener("click", function() {
	navLinks.classList.toggle("w-0");
	navLinks.classList.toggle("h-0");
	navLinks.classList.toggle("w-1/3");
	navLinks.classList.toggle("h-screen");
	navLinks.classList.toggle("overflow-hidden");
});
