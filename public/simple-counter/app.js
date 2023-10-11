let count = 0;
// DOM
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// all button event listener
console.log(btns);
btns.forEach((btn) => {
	// each button event listener
	btn.addEventListener("click", function (e) {
		btnStyle = e.currentTarget.classList;
		// increment decrement
		if (btnStyle.contains("increase")) count++;
		else if (btnStyle.contains("decrease")) count--;
		else count = 0;
		// change text number
		value.textContent = count;
		// change color
		if (count < 0) value.style.color = "red";
		if (count > 0) value.style.color = "green";
		if (count === 0) value.style.color = "black";
	});
});
