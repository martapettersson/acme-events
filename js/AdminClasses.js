// Kanske hitta snyggare lösning för detta? Försök få in i klass
let id_counter = 0;

class Event {
	//Skapar ett eventobjekt
	constructor(artistName, date, category, arena) {
		// this.id = localStorage.length;
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

	static createEvent() {
		let artist = document.getElementById("artist-name").value;
		let date = document.getElementById("date").value;
		let category = document.getElementById("category-select").value;
		let arena = document.getElementById("arena-select").value;

		let event = new Event(artist, date, category, arena);

		localStorage.setItem(id_counter, JSON.stringify(event));
		id_counter++;
	}

	static removeEventObject(id) {
		localStorage.removeItem(id);
	}
}

class AdminUI {
	//Kontrollerar vad som visar på skärmen i admingränssnittet

	static showEvents() {
		//Går igenom alla events i localstorage och skriver ut dem i en tabell.
		let keys = Object.keys(localStorage).sort();
		for (let key of keys) {
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
                <td><span>EDIT</span></td>
            `;
			table.append(tr);
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
