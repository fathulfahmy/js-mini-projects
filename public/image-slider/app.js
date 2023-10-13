const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");

slides.forEach(function (slide, index) {
	slide.style.left = `${index * 100}%`;
});

let count = 0;

nextBtn.addEventListener("click", function () {
	count++;
	console.log(count);
	moveSlide();
});

prevBtn.addEventListener("click", function () {
	count--;
	console.log(count);
	moveSlide();
});

function moveSlide() {
	if (count < 0) count = slides.length - 1;
	if (count >= slides.length) count = 0;

	slides.forEach(function (slide) {
		slide.style.transform = `translateX(${count * -100}%)`;
	});
}
