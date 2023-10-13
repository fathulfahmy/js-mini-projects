const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
	const scrollHeight = window.scrollY;
	console.log(scrollHeight);
	if (scrollHeight > 500) navbar.classList.add("hidden");
	else navbar.classList.remove("hidden");
});
