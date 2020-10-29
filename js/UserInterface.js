const contentDiv = document.getElementById("divContent");
class UI {
	//statisk klass som uppdaterar allt som visas på skärmen

	static createWrapper() {
		contentDiv.innerHTML = "";
		let wrapper = document.createElement("div");
		wrapper.id = "wrapper";
		contentDiv.append(wrapper);
	}

	static displayHeadline() {
		let wrapper = document.getElementById("wrapper");
		let headline = document.createElement("h4");
		headline.textContent = "EVENTS";
		headline.classList.add("event-headline");
		wrapper.append(headline);
	}

	static displayEvents() {
		let wrapper = document.getElementById("wrapper");
		let eventStorage = JSON.parse(localStorage.getItem("eventStorage"));
		delete eventStorage.idCounter;
		let sortedArray = UI.sortEventDates(eventStorage);
		for (let array of sortedArray) {
			let data = array[1];
			let event = document.createElement("a");
			event.addEventListener("click", UI.showEventDetailed);
			event.className = "event-a all " + data.category + " " + data.arena;
			event.setAttribute("href", "#");

			event.innerHTML = `
				<p>${data.category}</p>
				<h3>${data.artistName}</h3>
				<span>${data.date}</span>
				<span>${data.arena}</span>
				`;

			wrapper.append(event);
		}
	}

	static displaySortMenu() {
		let wrapper = document.getElementById("wrapper");
		//Skapar en select-meny för att välja kategori att filtrera fram
		let categories = JSON.parse(localStorage.getItem("categoryStorage"));
		let sortDiv = document.createElement("div");
		sortDiv.id = "sortDiv";
		let select = document.createElement("select");
		select.id = "category-select";
		select.innerHTML = "<option value='all'>Visa alla kategorier</option>";
		for (let category of categories) {
			select.innerHTML += `<option value="${category}">${category}</option>`;
		}
		sortDiv.append(select);

		//Skapa select-meny för att filtrera
		let arenas = JSON.parse(localStorage.getItem("arenaStorage"));
		let select1 = document.createElement("select");
		select1.id = "arena-select";
		select1.innerHTML = "<option value='all'>Visa alla arenor</option>";
		for (let arena of arenas) {
			select1.innerHTML += `<option value="${arena}">${arena}</option>`;
		}
		sortDiv.append(select1);
		//Skapar knappen som filtrera arena

		let arenaButton = document.createElement("button");
		arenaButton.textContent = "Filtrera";
		arenaButton.setAttribute("type", "button");

		arenaButton.addEventListener("click", (e) => {
			UI.filterEvents();
		});

		sortDiv.append(arenaButton);

		wrapper.append(sortDiv);
	}

	static sortEventDates(eventStorage) {
		//sprid ut eller loopa igenom.

		let entryArray = Object.entries(eventStorage);
		return entryArray.sort((a, b) => {
			return a[1].date.split("-").join("") - b[1].date.split("-").join("");
		});
	}

	static filterEvents() {
		let events = document.querySelectorAll("a.event-a");
		let arena = document.getElementById("arena-select").value;
		let category = document.getElementById("category-select").value;

		for (let event of events) {
			if (
				event.classList.contains(arena) &&
				event.classList.contains(category)
			) {
				event.style.display = "block";
			} else {
				event.style.display = "none";
			}
		}
	}

	static showFrontPage() {
		let divContent = document.getElementById("divContent");
		divContent.innerHTML = "";
		divContent.innerHTML = `
		<div class="frontDiv">
			<div class="pic">
				<img src="img/kiss.jpg" />
			</div>
			<div class="text">
				<h1>KISS: End Of The Road World Tour + support Steel Panther</h1>
				<p>
					KISS konserten flyttats fram till 23 juni 2021. Vi följer noga
					utvecklingen och sett till rådande situation kommer konserten inte att
					kunna genomföras som planerat. Håll i din biljett - den kommer fortfarande
					att gälla för det nya datumet. Kontakta Ticketmaster för eventuella
					biljettfrågor!
				</p>
			</div>
		</div>
		<div class="frontDiv">
			<div class="pic">
				<img src="img/loreen.jpg" />
			</div>
			<div class="text">
				<h1>Loreen:</h1>
				<p>
					Loreen konserten flyttats fram till 28 juni 2021. Vi följer noga
					utvecklingen och sett till rådande situation kommer konserten inte att
					kunna genomföras som planerat. Håll i din biljett - den kommer fortfarande
					att gälla för det nya datumet. Kontakta Ticketmaster för eventuella
					biljettfrågor!
				</p>
			</div>
		</div>	
		`;
	}

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
		
		<h2>Kort sagt...</h2>
		<p>
			... är scrum en metodik för systemutveckling. Scrum uppfanns under 1990-talet
			och är idag en etablerad metodik för systemutveckling som används över hela
			världen. En fördel med scrum är fokuseringen på affärsnytta och möjligheten
			att förändra projektet på ett strukturerat sätt. I scrum finns det inte en
			klassisk kravspecifikation utan man har istället en backlog. En backlog är
			kort sagt en prioriterad och levande lista med önskemål. Detta innebär att i
			ett projekt kan önskemål som är aktuella vid projektets start falla bort om de
			prioriteras ned under projektets gång och nya önskemål kan också läggas till.
		</p>
		<h2>Vad betyder scrum?</h2>
		<p>
			Just ordet "scrum" är en term från sporten rugby, och är den täta axel mot
			axel-formation teamet använder för att föra bollen framåt när den sätts i
			spel. De japanska managementforskarna Hirotaka Takeuchi och Ikujiro Nonaka
			myntade uttrycket och tyckte rugby var en bra liknelse eftersom ett
			tvärfunktionellt team samarbetar för att göra klart produkten på samma sätt
			som ett rugbylag spelar tillsammans för att föra bollen uppför planen. Scrum
			skapades ursprungligen av Jeff Sutherland och Ken Schwaber.
		</p>
		<h2>Vilka roller finns i scrum?</h2>
		<p>I scrum finns tre uttalade roller.</p>
		<h3>Produktägare (product owner):</h3>
		
		<p>
			Produktägaren sammanställer och prioriterar önskemål om tillägg och ändringar
			främst utifrån affärsnytta. I ett webbprojekt är det vanligt att produktägaren
			är en projektledare hos beställaren.
		</p>
		<h3>Scrum master:</h3>
		<p>
			Scrum mastern coachar teamet och ser till att allt rullar på smidigt. Scrum
			mastern stämmer av mellan aktörer samt ser till att det inte finns några
			hinder för teamet.
		</p>
		<h3>Team:</h3>
		<p>
			Teamet är självorganiserande och bestämmer gemensamt vem som gör vad och hur
			man löser olika uppgifter.
		</p>
		<h2>Vilka komponenter finns inom scrum?</h2>
		<h3>Backlog (Product backlog)</h3>
		<p>
			En prioriterad lista med alla önskemål om produkten. Produktägaren prioriterar
			och ansvarar för backlogen. En backlog skrivs ofta i form av user stories men
			kan även vara organiserad på andra sätt. Genom att jämföra de tidsestimerade
			och prioriterade önskemålen med tillgänglig tid tas en sprint backlog fram som
			teamet åtar sig att genomföra.
		</p>
		<h3>Sprint backlog</h3>
		<p>
			Den del av produktbacklogen som teamet åtar sig att implementera under en
			sprint.
		</p>
		
		<h3>Sprint</h3>
		<p>
			I scrum delas arbetet in i sprintar. En sprint kan vara mellan 3 och 30 dagar
			lång. På Happiness arbetar vi gärna med 2 veckors sprintar. En sprint inleds
			med en planeringsmöte (Sprint planning) och avslutas med en demonstration och
			genomgång av det som utvecklats under sprinten (Sprint review). Under sprinten
			sker dagliga Daily scrums och sist i en sprint görs en återblick (Sprint
			retrospective).
		</p>
		<h3>Daily scrum</h3>
		<p>
			Ett kort statusmöte för teamet. Scrum master går igenom alla personer i teamet
			som besvarar tre frågor:
		</p>
		<ol>
			<li>Vad har jag gjort sedan igår?</li>
			<li>Vad ska jag göra till imorgon?</li>
			<li>Finns det något som hindrar mig?</li>
		</ol>
		<h3>Sprintgenomgång (Sprint review)</h3>
		<p>
			En genomgång av status på det arbete som genomförts i sprinten samt
			demonstration av funktionaliteten för produktägare, kunder och andra inbjudna
			intressenter. Syftet är att alla intressenter ska få bästa möjliga förståelse
			för dagsläget.
		</p>
		
		<h3>Återblick (Sprint retrospective)</h3>
		<p>
			Team, scrum master och produktägare går tillsammans igenom erfarenheter från
			sprinten och identifierar möjliga förbättringar i arbetssättet. Några punkter
			väljs ut och åtgärdas i kommande sprint. <br />
			Tips på sida att använda vid Sprint review:
			<a href="https://www.pointingpoker.com/retro/46381">Poiting Poker</a>
		</p>
		
		<h3>Sprint planning</h3>
		<p>
			Produktägaren, scrum master och teamet går igenom de önskemål som finns.
			Därefter bryter teamet ned kraven och tidsestimerar (ofta med planning poker
			och ibland med story points istället för timmar).
		</p>		
		`;
		divContent.appendChild(aboutContent);
	}

	static showEventDetailed() {
		let divContent = document.getElementById("divContent");
		divContent.innerHTML = "";

		let eventDiv = document.createElement("div");
		eventDiv.id = "eventDivDetailed";
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

		const guestbook = new GuestbookControler();
		GuestbookUI.displayGuestbook();
		GuestbookUI.displayGuestbookPosts();

		document.getElementById("PostsSubmitBtn").addEventListener("click", (e) => {
			guestbook.createPosts();
			GuestbookUI.clearGuestbookForm();
			GuestbookUI.clearGuestbookTable();
			GuestbookUI.displayGuestbookPosts();
		});

		document.getElementById("guestbookTbody").addEventListener("click", (e) => {
			if (e.target.classList.contains("delete")) {
				let id = e.target.parentElement.parentElement.id;
				guestbook.removeGuestbookPost(id);
				GuestbookUI.clearGuestbookTable();
				GuestbookUI.displayGuestbookPosts();
			}
		});
	}
}
