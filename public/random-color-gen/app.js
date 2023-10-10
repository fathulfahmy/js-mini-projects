// array of color codes
const hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// DOM
const button = document.getElementById("button");
const colorCode = document.querySelector(".color-code");

// button event listener
button.addEventListener("click", () => {
	// append hex code
	let randomColor = "#";
	for (let i = 0; i < 6; i++) {
		randomColor += hexNum[getRandomNumber()];
	}
	// change color code text
	colorCode.textContent = randomColor;
	// change background color
	document.body.style.backgroundColor = randomColor;
});

function getRandomNumber() {
	return Math.floor(Math.random() * hexNum.length);
}
