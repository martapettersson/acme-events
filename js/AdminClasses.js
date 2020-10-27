class Event {
	constructor(artistName, date, category, arena) {
		this.artistName = artistName;
		this.date = date;
		this.category = category;
		this.arena = arena;
	}
}

class Arena {
	constructor() {
		this.arenaArray = ["Globen", "Tele2 Arena", "Friend's arena", "Annexet"];
	}

	addArena() {}

	removeArena() {}
}

class Category {
	constructor() {
		this.categoryArray = ["Jazz", "Schlager", "Rock", "Klassiskt", "Pop"];
	}

	addCategory() {}

	removeCategory() {}
}

class EventControl {
	//Skapar ett nytt objekt: eventstorage som innehåller en id-counter och alla eventobjekt.
	//koden i konstruktorn körs bara första gången man laddar sidan.
	constructor() {
		if (localStorage.getItem("eventStorage") === null) {
			localStorage.setItem("eventStorage", JSON.stringify({ idCounter: 0 }));
		}
	}

	createEvent() {
		//skapa ett nytt eventobjekt. Hämtar eventStorage från localstorage och lägger in det nya objektet. Lägger till ++ på id-counter
		//och uppdaterar eventStorage i localStorage
		let artist = document.getElementById("artist-name").value;
		let date = document.getElementById("date").value;
		let category = document.getElementById("category-select").value;
		let arena = document.getElementById("arena-select").value;

		let event = new Event(artist, date, category, arena);

		let eventStorage = JSON.parse(localStorage.getItem("eventStorage"));
		eventStorage[eventStorage.idCounter] = event;
		eventStorage.idCounter++;

		localStorage.setItem("eventStorage", JSON.stringify(eventStorage));
	}

	removeEventObject(id) {
		//Hämtar eventStorage från localStorage, tar bort eventet med id:et som användaren klickade på, skriver över eventStorage i localStorage.
		let eventStorage = JSON.parse(localStorage.getItem("eventStorage"));
		delete eventStorage[id];
		localStorage.setItem("eventStorage", JSON.stringify(eventStorage));
	}

	editEventObject(id) {
		//Uppdaterar ett event.
		//Hämtar eventStorage från localStorange. Värdena från eventet som användaren tryckte på läggs in i form.
		//eventlistener-funktionen skapar ett nytt event-objekt och skriver över det gamla objektet i eventStorage. Sedan läggs eventStorage in i localStorage igen.
		//I slutet av eventlistenerfunktionen tas eventlistener bort, redigera-knappen blir osynlig och visar den ursprungliga submit-knappen.
		let eventStorage = JSON.parse(localStorage.getItem("eventStorage"));

		document.getElementById("artist-name").value = eventStorage[id].artistName;
		document.getElementById("date").value = eventStorage[id].date;
		document.getElementById("category-select").value =
			eventStorage[id].category;
		document.getElementById("arena-select").value = eventStorage[id].arena;

		let saveFunction = () => {
			let artist = document.getElementById("artist-name").value;
			let date = document.getElementById("date").value;
			let category = document.getElementById("category-select").value;
			let arena = document.getElementById("arena-select").value;

			let event = new Event(artist, date, category, arena);

			eventStorage[id] = event;
			localStorage.setItem("eventStorage", JSON.stringify(eventStorage));
			saveBtn.removeEventListener("click", saveFunction);

			document.getElementById("event-submit-btn").style.display = "inline";
			document.getElementById("event-edit-btn").style.display = "none";
			AdminUI.clearForm();
			AdminUI.clearTable();
			AdminUI.showEvents();
		};

		let saveBtn = document.getElementById("event-edit-btn");
		saveBtn.addEventListener("click", saveFunction);
	}
}

class AdminUI {
	//Kontrollerar vad som visar på skärmen i admingränssnittet

	static showEvents() {
		//Går igenom alla events i localstorage och skriver ut dem i en tabell. Om key är idCounter hoppar den över
		let eventStorage = JSON.parse(localStorage.getItem("eventStorage"));
		let keys = Object.keys(eventStorage).sort();
		for (let key of keys) {
			if (key !== "idCounter") {
				//let eventObject = JSON.parse(localStorage.getItem(key));
				let eventObject = eventStorage[key];
				let table = document.getElementById("event-table");
				let tr = document.createElement("tr");
				tr.id = key;
				tr.innerHTML += `
                <td>${eventObject.artistName}</td>
                <td>${eventObject.date}</td>
                <td>${eventObject.category}</td>
                <td>${eventObject.arena}</td>
                <td><span class='delete'>DELETE</span></td> 
                <td><span class='edit'>EDIT</span></td>
           		 `;
				table.append(tr);
			}
		}
	}

	static clearTable() {
		//Rensar tabellen med events.
		let eventTable = document.getElementById("event-table");
		eventTable.innerHTML =
			"<tr>" + eventTable.firstElementChild.innerHTML + "</tr>";
	}

	static clearForm() {
		//Återställer formuläret
		document.getElementById("event-flex-form").reset();
	}

	static showCategories() {
		//metod som visar en lista/tabell kategorierna
	}

	static showArenas() {
		//metod som visar en lista/tabell med arenorna
	}
}
