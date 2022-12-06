const shareBtn = document.querySelectorAll(".share_btn");
const footerOne = document.querySelector("#footer-one");
const footerTwo = document.querySelector("#footer-two");
const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");

shareBtn.forEach((share) => {
	share.addEventListener("click", (event) => {
		event.preventDefault();
		
		footerOne.classList?.toggle("hide");
		footerTwo.classList?.toggle("hide");
		btnSecondary.classList?.toggle("hide");
	});
});

let btnColor = () => {
	if(window.innerWidth >= 1050) {
		return true;
	} else {
		return false;
	}
};

console.log(btnColor());

const changeColor = () => {
	if(btnColor() === true) {
		console.log("yes");
		btnPrimary.style.background = "blue";
	} else {
		console.log("no");
		btnPrimary.style.background = "black"
	}
}
changeColor();
window.addEventListener("resize", changeColor);
window.addEventListener("load", changeColor);