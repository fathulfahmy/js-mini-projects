// select all .question
const questions = document.querySelectorAll(".question");

// listen to each button inside each question
questions.forEach(function (question) {
	const btn = question.querySelector(".expand-btn");

	// toggle .show-text
	btn.addEventListener("click", function () {
		// compare question(clicked) and item(other questions)
		questions.forEach(function (item) {
			if (item != question) item.classList.remove("show-text");
		});
		// else show text
		question.classList.toggle("show-text");
	});
});
