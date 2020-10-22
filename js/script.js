document.addEventListener("DOMContentLoaded", function (e) {

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
		console.log("hejhej");
		UI.displayHeadline();
		UI.displayEvents();
	});
});
