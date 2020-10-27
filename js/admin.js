document.addEventListener("DOMContentLoaded", (e) => {
	const category = new Category();
	const arena = new Arena();
	const eventcontrol = new EventControl();
	AdminUI.showEvents();

	document.getElementById("event-table").addEventListener("click", (e) => {
		//Sätter en eventlistener på tabellen i admingränstsnittet. När man trycker på delete tar körs metoderna nedan
		//och eventet man tryckte på tas bort från localStorage. Sedan återställs tabellen och allt som finns i localstorage visas.
		if (e.target.classList.contains("delete")) {
			let id = e.target.parentElement.parentElement.id;
			eventcontrol.removeEventObject(id);
			AdminUI.clearTable();
			AdminUI.showEvents();
			//om man trycker på edit körs koden nedan
		} else if (e.target.classList.contains("edit")) {
			let id = e.target.parentElement.parentElement.id;
			eventcontrol.editEventObject(id);
			document.getElementById("event-submit-btn").style.display = "none";
			document.getElementById("event-edit-btn").style.display = "inline";
		}
	});

	document.getElementById("event-submit-btn").addEventListener("click", (e) => {
		//Anger vilka metoder som körs när man trycker på submitknappen i admin-gränssnittet
		eventcontrol.createEvent();
		AdminUI.clearForm();
		AdminUI.clearTable();
		AdminUI.showEvents();
	});
	/*---------------ARENA CRUD-------------*/
	document.getElementById("arena-table").addEventListener("click", (e) => {
		//Sätter en eventlistener på tabellen i admingränstsnittet. När man trycker på delete tar körs metoderna nedan
		//och eventet man tryckte på tas bort från localStorage. Sedan återställs tabellen och allt som finns i localstorage visas.
		// if (e.target.classList.contains("delete")) {
		// 	let id = e.target.parentElement.parentElement.id;
		// 	arena.removeArena();
		// 	AdminUI.clearTable();
		// 	AdminUI.showEvents();
		// 	//om man trycker på edit körs koden nedan
		// } else if (e.target.classList.contains("edit")) {
		// 	let id = e.target.parentElement.parentElement.id;
		// 	arena.editEventObject(id);
		// 	document.getElementById("arena-submit-btn").style.display = "none";
		// 	document.getElementById("arena-edit-btn").style.display = "inline";
		// }
	});

	document.getElementById("arena-submit-btn").addEventListener("click", (e) => {
		//Anger vilka metoder som körs när man trycker på submitknappen i admin-gränssnittet
		arena.addArena();
		// AdminUI.clearForm();
		// AdminUI.clearTable();
		// AdminUI.showEvents();
	});
	/*---------------SLUT PÅ ARENA-------------*/
});
