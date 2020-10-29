document.addEventListener("DOMContentLoaded", function (e) {
	UI.showFrontPage();

	let homeBtn = document.getElementById("homeBtn");
	homeBtn.addEventListener("click", function (e) {
		UI.showFrontPage();
	});

	let aboutBtn = document.getElementById("aboutBtn");

	aboutBtn.addEventListener("click", function (e) {
		UI.showAbout();
	});

	let divContent = document.getElementById("divContent");
	divContent.addEventListener("click", function (e) {
		if (e.target.parentElement.parentElement.classList.contains("frontDiv")) {
			UI.showEventDetailed();
		}
	});
	let eventBtn = document.getElementById("eventBtn");
	eventBtn.addEventListener("click", function (e) {
		UI.createWrapper();
		UI.displayHeadline();
		UI.displaySortMenu();
		UI.displayEvents();
	});
});
