document.addEventListener("DOMContentLoaded", function (e) {
	let aboutBtn = document.getElementById("aboutBtn");

	aboutBtn.addEventListener("click", function (e) {
		new About();
	});
});
