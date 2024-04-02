const hamburger = document.querySelector(".nav__toggle");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

let isMoved = false;
function toggleButton() {
	if (!isMoved) {
		nav.style.display = "flow-root";
	} else {
		nav.style.display = "none";
	}
	isMoved = !isMoved;
	console.log(isMoved);
}

hamburger.addEventListener("click", toggleButton);
