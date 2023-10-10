const reviews = [
	{
		id: 1,
		img: "https://www.course-api.com/images/people/person-1.jpeg",
		name: "Ana Smith",
		job: "Travel Agency Manager",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ab eos sunt debitis ratione aspernatur officiis facilis cupiditate consequuntur nesciunt?",
	},
	{
		id: 2,
		img: "https://www.course-api.com/images/people/person-2.jpeg",
		name: "Susan Johnson",
		job: "Human Resource Capital",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ab eos sunt debitis ratione aspernatur officiis",
	},
	{
		id: 3,
		img: "https://www.course-api.com/images/people/person-3.jpeg",
		name: "Aaron Davidson",
		job: "Finance Executive",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ab eos sunt debitis ratione aspernatur officiis facilis",
	},
	{
		id: 4,
		img: "https://www.course-api.com/images/people/person-4.jpeg",
		name: "Peter Parker",
		job: "Landscape Architecture",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ab eos sunt debitis ratione aspernatur officiis facilis cupiditate consequuntur",
	},
	{
		id: 5,
		img: "https://www.course-api.com/images/people/person-5.jpeg",
		name: "John Anderson",
		job: "Finance Advisor",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ab eos sunt debitis ratione aspernatur officiis facilis cupiditate",
	},
];

// DOM
const avatar = document.getElementById("avatar");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector("#prev-button");
const nextBtn = document.querySelector("#next-button");
const randomBtn = document.querySelector("#random-button");

let currentItem = 0;

// load info

window.addEventListener("DOMContentLoaded", () => {
	showPerson();
});

function showPerson() {
	const item = reviews[currentItem];
	avatar.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

// next button
nextBtn.addEventListener("click", () => {
	currentItem++;
	if (currentItem > reviews.length - 1) currentItem = 0;
	showPerson();
});

// previous button
prevBtn.addEventListener("click", () => {
	currentItem--;
	if (currentItem < 0) currentItem = reviews.length;
	showPerson();
});

// random button

randomBtn.addEventListener("click", () => {
	currentItem = getRandomNumber();
	showPerson();
});

function getRandomNumber() {
	return Math.floor(Math.random() * reviews.length);
}
