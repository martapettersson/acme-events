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
	//Klass som skapar nya eventobjekt, gör om dem till JSON-objekt som den lägger till i localstorage
	//Tar även bort och uppdaterar events som ligger i local storage.
	constructor() {
		if (localStorage.getItem("idCounter") === null) {
			localStorage.setItem("idCounter", 0);
		}
	}

	createEvent() {
		//skapa ett nytt eventobjekt och lägger in det i localstorage. Uppdaterar id-counter i local storage.
		let artist = document.getElementById("artist-name").value;
		let date = document.getElementById("date").value;
		let category = document.getElementById("category-select").value;
		let arena = document.getElementById("arena-select").value;

		let event = new Event(artist, date, category, arena);
		localStorage.setItem(
			localStorage.getItem("idCounter"),
			JSON.stringify(event)
		);

		localStorage.setItem(
			"idCounter",
			parseInt(localStorage.getItem("idCounter")) + 1
		);
	}

	removeEventObject(id) {
		localStorage.removeItem(id);
	}

	editEventObject(id) {
		//Lägger till informationen från ett eventobjekt i localstorage i form. Sätter sedan en eventlistener på editknappen.
		//eventlistener-funktionen skapar ett nytt event-objekt och skriver över det gamla objetet i localstorage.
		//tar sedan bort eventlistenerngör sedan spara-knappen osynlig och visar den ursprungliga submit-knappen.
		let eventObj = JSON.parse(localStorage.getItem(id));
		document.getElementById("artist-name").value = eventObj.artistName;
		document.getElementById("date").value = eventObj.date;
		document.getElementById("category-select").value = eventObj.category;
		document.getElementById("arena-select").value = eventObj.arena;

		let saveFunction = () => {
			let artist = document.getElementById("artist-name").value;
			let date = document.getElementById("date").value;
			let category = document.getElementById("category-select").value;
			let arena = document.getElementById("arena-select").value;

			let event = new Event(artist, date, category, arena);
			localStorage.setItem(id, JSON.stringify(event));
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
		let keys = Object.keys(localStorage).sort();
		for (let key of keys) {
			if (key !== "idCounter") {
				let eventObject = JSON.parse(localStorage.getItem(key));
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
		// Hitta snyggare sätt att göra detta!
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
