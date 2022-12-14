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
			footerTwo.classList?.toggle("show");
		} else {
			footerTwo.classList?.toggle("show");
			footerTwo.classList?.toggle("hide");
		}

		if (footerTwo.classList?.contains("show")) {
			btnPrimary.classList?.add("btn-secondary");
			console.log("yes");
		} else {
			btnPrimary.classList?.remove("btn-secondary");
			console.log("no");
		}
	});
});
