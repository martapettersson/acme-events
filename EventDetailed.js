class EventDetailed {
	constructor() {
		this.showEventDetailed();
	}
	// Metod för att byta ut innehåll i divContent till detaljer om ett exempel-event
	// körs i constructorn på en gång
	showEventDetailed() {
		let divContent = document.getElementById("divContent");
		divContent.innerHTML = "";

		let eventDiv = document.createElement("div");
		divContent.appendChild(eventDiv);
		let eventPic = document.createElement("img");
		let eventHeadline = document.createElement("h1");
		let eventSecondHeadline = document.createElement("h2");
		let eventText = document.createElement("p");
		eventDiv.appendChild(eventPic);
		eventDiv.appendChild(eventHeadline);
		eventDiv.appendChild(eventSecondHeadline);
		eventDiv.appendChild(eventText);
		eventPic.src = "img/kiss.jpg";
		eventHeadline.innerHTML = "KISS ON TOUR";
		eventSecondHeadline.innerHTML = "19 Juni - Friends Arena";
		eventText.innerHTML =
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
