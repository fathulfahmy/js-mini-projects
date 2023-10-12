// DOM
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
// toggle
menuBtn.addEventListener("click", function () {
	navLinks.classList.toggle("w-0");
	navLinks.classList.toggle("h-0");
	navLinks.classList.toggle("overflow-hidden");
	navLinks.classList.toggle("w-52");
	navLinks.classList.toggle("sm:w-72");
	navLinks.classList.toggle("h-screen");
});
