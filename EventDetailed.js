class EventDetailed {
	constructor() {
		this.showEventDetailed();
	}
	// Metod för att byta ut innehåll i divContent till detaljer om ett exempel-event
	// körs i constructorn på en gång
	showEventDetailed() {
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
		aboutPic.src = "img/kiss.jpg";
		aboutHeadline.innerHTML = "KISS ON TOUR";
		aboutText.innerHTML =
			"INFORMATION" +
			"<br />" +
			"19 juni, kl 19:30" +
			"<br />" +
			"475-975 SEK + serviceavgift" +
			"<br />" +
			"Åldersgräns: Ingen åldersgräns" +
			"<br />" +
			"Max antal blijetter: 10 per/person" +
			"<br />" +
			"Alla besökare måste ha biljett" +
			"<br />" +
			"Arrangör: Live Nation";
	}
}
