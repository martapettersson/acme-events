document.addEventListener("DOMContentLoaded", function (e) {
	let detailBtn = document.getElementById("detailBtn");
	detailBtn.addEventListener("click", function (e) {
		new EventDetailed();
	});
});
