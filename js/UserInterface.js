const contentDiv = document.getElementById("divContent");

class UI {
	//statisk klass som uppdaterar allt som visas på skärmen
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

	showFrontPage() {}

	static showAbout() {
		let divContent = document.getElementById("divContent");
		divContent.innerHTML = "";

		let aboutContent = document.createElement("div");
		aboutContent.innerHTML = `
			<h1>OM OSS</h1>
			<p>
				Vi driver Nordens mest besökta arenor; Ericsson Globe, Hovet, Annexet, Tele2
				Arena och Friends Arena, samt attraktionen SkyView. Varje år besöker ca 3
				miljoner människor våra arenor och de över 330 idrotts- och
				underhållningsevenemang som de gästas av. Det gör oss till den absolut största
				arenaoperatören i Norden.
			</p>
			<h3>Vi arbetar med SCRUM</h3>
			<ul>
				<li>
					Scrum är ett av flera ramverk som implementerar det Agila tankesättet.
				</li>
				<li>Ramverket är lättviktigt och lättförståeligt.</li>
				<li>Arbetet är uppdelat i korta iterationer, s.k. Sprintar.</li>
				<li>
					Människorna inom ett Scrumteam är uppdelade i tre roller: Produktägare,
					Scrum Master och Utvecklingsteam.
				</li>
				<li>
					Genom ett antal definierade dokument kan Utvecklingsteamets arbete
					struktureras, kommuniceras och visualiseras i realtid.
				</li>
				<li>
					För att effektivisera processen, definierar Scrum de ceremonier och möten
					som behövs för att arbetet ska flöda.
				</li>
				<li>
					Buzzwords för att verka insatt: Sprint, Scrum Master, riskminimering,
					backlog, snabb TTM, Daily standup, ceremonier.
				</li>
			</ul>
			<h3>En snabb introduktion till SCRUM</h3>
			<iframe
				width="854"
				height="480"
				frameborder="0"
				allowfullscreen="allowfullscreen"
				src="https://www.youtube.com/embed/gy1c4_YixCo?autoplay=0&amp;start=0&amp;rel=0"
			></iframe>

			<h3>Grunderna i Scrum</h3>
			<p>
				Det Agila manifestet i sig specificerar inte några direkt konkreta krokar att
				hänga upp sitt arbetssätt på. Däremot finns det ett antal konkretiseringar och
				implementationer av hur den Agila filosofin kan tillämpas, såsom Scrum, Kanban
				eller DevOps. En populär ingång till att få igång sitt Agila arbete är att
				helt enkelt införa just Scrum som metodik, i stor eller liten skala. Det finns
				många anledningar till att Scrum blivit så populärt, men en av dem är att de
				praktiska delar som utgör ramverket är relativt okomplexa och konkreta, vilket
				vi kommer att se nedan. Vidare är en av de stora skillnaderna från
				traditionell projektmetodik är att Scrums ramverk är uppbyggt på empirism, det
				vill säga att beslut tas utifrån tidigare erfarenheter och information man
				faktiskt vet. Inga “vi är helt säkra på att det här är det bästa sedan skivat
				bröd, så vi bygger allt på en gång”-projekt, alltså. Snarare en kultur av att
				“vi tror att det här är en grym idé, men vi utvecklar lite i taget”.
			</p>
			<h3>Varför Scrum?</h3>
			<p>
				Alla vi som jobbat i den lite äldre skolans projekt känner nog igen att vi
				redan i projektets inledningsfas lägger stora resurser på att definiera
				slutresultatet och en detaljerad väg dit. Och vi känner nog också igen att den
				planen väldigt sällan håller hela vägen. Här kan Scrum erbjuda en minskad
				risk, snabbare time-to-market och en slutprodukt som är betydligt bättre
				anpassad till marknaden. Scrums uppbyggnad består av tre roller, tre
				artefakter och fem ceremonier. Alla dessa delar hänger ihop och binder samman
				det faktiska arbetet som utförs till en Agil helhet. Det som är det fina här,
				är att eftersom ramverket inte är stramt överallt, så finns det en hel del
				möjligheter att skräddarsy sin process och ändå jobba enligt Scrum.
			</p>
		`;
		divContent.appendChild(aboutContent);
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
