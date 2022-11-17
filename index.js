const shareBtn = document.querySelectorAll(".share_btn");
const footerOne = document.querySelector("#footer-one");
const footerTwo = document.querySelector("#footer-two");

shareBtn.forEach((share) => {
	share.addEventListener("click", (event) => {
		event.preventDefault();

		footerOne.classList?.toggle("hide");
		console.log(footerOne.classList.contains("hide"));

		footerTwo.classList?.toggle("hide");
	});
});
