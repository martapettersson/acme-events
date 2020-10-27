document.addEventListener("DOMContentLoaded", function (e) {
	UI.showFrontPage();

	let homeBtn = document.getElementById("homeBtn");
	homeBtn.addEventListener("click", function (e) {
		UI.showFrontPage();
	});

	let aboutBtn = document.getElementById("aboutBtn");

	// När användaren klickar på Om Oss/About-knappen skapas en ny instans av klassen About
	aboutBtn.addEventListener("click", function (e) {
		UI.showAbout();
	});

	let detailBtn = document.getElementById("detailBtn");
	detailBtn.addEventListener("click", function (e) {
		UI.showEventDetailed();
	});
	let eventBtn = document.getElementById("eventBtn");
	eventBtn.addEventListener("click", function (e) {
		UI.displayHeadline();
		UI.displaySortMenu();
		UI.displayEvents();
	});
});
