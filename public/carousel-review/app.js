const reviews = [
	{
		id: 1,
		img: "../assets/carousel-review/man-1.jpg",
		name: "James Mitchell",
		job: "IT Manager",
		text: "Reliable IT experts. Their solutions streamline operations and fortify cybersecurity. We've counted on them as a trusted, long-term partner for years.",
	},
	{
		id: 2,
		img: "../assets/carousel-review/man-2.jpg",
		name: "Robert Turner",
		job: "Data Analyst",
		text: "A game-changer for data analytics. Their cutting-edge data solutions have streamlined decision-making processes. They're an essential part of our team.",
	},
	{
		id: 3,
		img: "../assets/carousel-review/woman-1.jpg",
		name: "Sarah Parker",
		job: "Software Developer",
		text: "They've boosted our productivity significantly. Thanks to their expertise, we've achieved faster software releases. I'm truly impressed with their commitment to excellence.",
	},
	{
		id: 4,
		img: "../assets/carousel-review/man-3.jpg",
		name: "William Foster",
		job: "Network Administrator",
		text: "Proactive IT support at its finest. With minimal downtime, they ensure network security and efficiency, allowing us to focus on our core tasks.",
	},
	{
		id: 5,
		img: "../assets/carousel-review/woman-2.jpg",
		name: "Emma Garcia",
		job: "Business Analyst",
		text: "An invaluable support system for data analytics and automation. They've enhanced our decision-making processes significantly, and I highly recommend this IT service provider.",
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
window.addEventListener("DOMContentLoaded", function () {
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
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) currentItem = 0;
	showPerson();
});

// previous button
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) currentItem = reviews.length;
	showPerson();
});

// random button
randomBtn.addEventListener("click", function () {
	currentItem = getRandomNumber();
	showPerson();
});

function getRandomNumber() {
	return Math.floor(Math.random() * reviews.length);
}
