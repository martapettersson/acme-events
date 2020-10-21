const contentDiv = document.getElementById("divContent");

class UI {
	//statisk klass
	static displayHeadline() {
		contentDiv.innerHTML = "";
		let headline = document.createElement("h4");
		headline.textContent = "EVENTS";
		headline.classList.add("event-headline");
		contentDiv.append(headline);
	}

	static displayEvents() {
		let keys = Object.keys(localStorage);
		for (let key of keys) {
			let data = JSON.parse(localStorage.getItem(key));
			let event = document.createElement("a");
			event.classList.add("event-a");
			event.setAttribute("href", "home.html");

			event.innerHTML = `
        <p>${data.category}</p>
        <h3>${data.artistName}</h3>
        <span>${data.date}</span>
        <span>${data.arena}</span>
      `;

			contentDiv.append(event);
		}
	}

	static showAbout() {
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
	}

	static showEventDetailed() {
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



