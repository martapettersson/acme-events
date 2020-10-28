class Event {
	constructor(artistName, date, category, arena) {
		this.artistName = artistName;
		this.date = date;
		this.category = category;
		this.arena = arena;
	}
}
/*--------------ARENA------------------*/
class Arena {
	constructor() {
		if (localStorage.getItem("arenaStorage") === null) {
			localStorage.setItem(
				"arenaStorage",
				JSON.stringify(["Globen", "Annexet"])
			);
		}
	}

	addArena() {
		// adderar ny arena från admin gränsnitt till localStorage och sparar i array

		let arenaStorage = JSON.parse(localStorage.getItem("arenaStorage"));
		let arenaName = document.getElementById("arena-name").value;

		arenaStorage.push(arenaName);

		// arenaStorage[arenaStorage.idCounter] = this.arenaArray;

		localStorage.setItem("arenaStorage", JSON.stringify(arenaStorage));
	}

	removeArena(arena_delete) {
		//Hämtar arenaStorage från localStorage, tar bort eventet med id:et som användaren klickade på,
		//skriver över arenaStorage i localStorage.
		let arenaStorage = JSON.parse(localStorage.getItem("arenaStorage"));
		arenaStorage.splice(arenaStorage.indexOf(arena_delete), 1);
		localStorage.setItem("arenaStorage", JSON.stringify(arenaStorage));
	}

	editArena(arena_edit) {
		let arenaStorage = JSON.parse(localStorage.getItem("arenaStorage"));
		document.getElementById("arena-name").value = arena_edit;
		//när admin trycker Ändra då vill vi spara detta nya värde

		let saveFunction = () => {
			let arenaName = document.getElementById("arena-name").value;
			arenaStorage[arenaStorage.indexOf(arena_edit)] = arenaName;
			localStorage.setItem("arenaStorage", JSON.stringify(arenaStorage));
			saveBtn.removeEventListener("click", saveFunction);

			document.getElementById("arena-submit-btn").style.display = "inline";
			document.getElementById("arena-edit-btn").style.display = "none";
			AdminUI.clearArenaForm();
			AdminUI.clearArenaTable();
			AdminUI.showArenas();
		};

		let saveBtn = document.getElementById("arena-edit-btn");
		saveBtn.addEventListener("click", saveFunction);
	}
}
/*--------------SLUT ARENA------------------*/

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

	createSelectMenus() {
		let categorySelect = document.getElementsById("category-select");
		let arenaSelect = document.getElementsById("arena-select");
	}

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

	/*------------ARENA---------------------------*/
	static showArenas() {
		//metod som visar en lista/tabell med arenorna
		let arenaStorage = JSON.parse(localStorage.getItem("arenaStorage"));

		for (let arena of arenaStorage) {
			let arenaTable = document.getElementById("arena-table");
			let arena_tr = document.createElement("tr");
			arena_tr.innerHTML += `
                <td>${arena}</td>
                <td><span class='delete'>DELETE</span></td> 
                <td><span class='edit'>EDIT</span></td>
           		 `;
			arenaTable.append(arena_tr);
		}
	}

	static clearArenaForm() {
		document.getElementById("arena-flex-form").reset();
	}

	static clearArenaTable() {
		//Rensar tabellen med events.
		let arenaTable = document.getElementById("arena-table");
		arenaTable.innerHTML =
			"<tr>" + arenaTable.firstElementChild.innerHTML + "</tr>";
	}
}
