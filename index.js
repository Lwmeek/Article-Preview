window.addEventListener("resize", sharing);
window.addEventListener("load", sharing);

const sharing = () => {
	const shareBtn = document.querySelectorAll(".share_btn");
	const footerOne = document.querySelector("#footer-one");
	const footerTwo = document.querySelector("#footer-two");
	const btnPrimary = document.querySelector(".btn-primary");
	const btnSecondary = document.querySelector(".btn-secondary");

	shareBtn.forEach((share) => {
		share.addEventListener("click", (event) => {
			event.preventDefault();

			if (window.innerWidth >= 1050) {
				footerTwo.classList?.toggle("hide");
			} else {
				footerOne.classList?.toggle("hide");
				footerTwo.classList?.toggle("hide");
				btnSecondary.classList?.toggle("hide");
			}
		});
	});
};
