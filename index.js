








	
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
			btnPrimary.classList?.toggle("btn-secondary");
		} else {
			console.log("clicked");
			footerTwo.style.height=("80%")
		}
	});
});

