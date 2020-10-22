document.addEventListener("DOMContentLoaded", function (e) {
	localStorage.setItem(
		"1",
		JSON.stringify({
			category: "Jazz",
			artistName: "Ozzy",
			date: "19 oktober",
			arena: "Globen",
		})
	);

	localStorage.setItem(
		"2",
		JSON.stringify({
			category: "Jazz",
			artistName: "Ozzy",
			date: "19 oktober",
			arena: "Globen",
		})
	);
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
