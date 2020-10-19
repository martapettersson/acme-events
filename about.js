document.addEventListener("DOMContentLoaded", function (e) {
	let aboutBtn = document.getElementById("aboutBtn");

	aboutBtn.addEventListener("click", function (e) {
		let divContent = document.getElementById("divContent");
		divContent.innerHTML = "";

		let aboutDiv = document.createElement("div");
		divContent.appendChild(aboutDiv);
		let aboutPic = document.createElement("img");
		let aboutHeadline = document.createElement("h1");
		let aboutText = document.createElement("p");
		aboutDiv.appendChild(aboutPic);
		aboutDiv.appendChild(aboutHeadline);
		aboutDiv.appendChild(aboutText);
		aboutPic.src = "img/arena.jpg";
		aboutHeadline.innerHTML = "Om oss";
		aboutText.innerHTML =
			"Vi driver Nordens mest besökta arenor; Ericsson Globe, Hovet, Annexet, Tele2 Arena och Friends Arena, samt attraktionen SkyView. Varje år besöker ca 3 miljoner människor våra arenor och de över 330 idrotts- och underhållningsevenemang som de gästas av. Det gör oss till den absolut största arenaoperatören i Norden." +
			"<br />" +
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
			"<br />" +
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
			"<br />" +
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	});
});
