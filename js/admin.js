document.addEventListener("DOMContentLoaded", (e) => {
	const eventcontrol = new EventControl();
	const category = new Category();
	const arena = new Arena();
	console.log(eventcontrol);

	// Metod som skapar / lägger till saker i våra Selects
	// denna körs även när man redigerar Arena eller Kategori
	// om man redigerar Arena eller Kategori ska vi köra showEvents
	AdminUI.createSelectMenus();
	AdminUI.showEvents();
	AdminUI.showArenas();
	AdminUI.showCategory();
	

	/*---------------EVENT-------------*/
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
			//gör om till metod.
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
	/*---------------ARENA-------------*/
	document.getElementById("arena-table").addEventListener("click", (e) => {
		//Sätter en eventlistener på tabellen i admingränstsnittet. När man trycker på delete körs metoderna nedan
		//och eventet man tryckte på tas bort från localStorage. Sedan återställs tabellen och allt som finns i localstorage visas.
		if (e.target.classList.contains("delete")) {
			let arena_delete =
				e.target.parentElement.parentElement.firstElementChild.innerHTML;
			arena.removeArena(arena_delete);
			eventcontrol.updateEvents("arena", [arena_delete, ""]);
			AdminUI.clearArenaTable();
			AdminUI.showArenas();

			//om man trycker på edit körs koden nedan
		} else if (e.target.classList.contains("edit")) {
			let arena_edit =
				e.target.parentElement.parentElement.firstElementChild.innerHTML;
			console.log(eventcontrol);
			arena.editArena(arena_edit, eventcontrol);
			document.getElementById("arena-submit-btn").style.display = "none";
			document.getElementById("arena-edit-btn").style.display = "inline";
		}
	});

	document.getElementById("arena-submit-btn").addEventListener("click", (e) => {
		//Anger vilka metoder som körs när man trycker på submitknappen i admin-gränssnittet
		arena.addArena();
		AdminUI.clearArenaForm();
		AdminUI.clearArenaTable();
		AdminUI.showArenas();
	});
	/*---------------SLUT PÅ ARENA-------------*/
	/*---------------Category-------------*/
	document.getElementById("category-table").addEventListener("click", (e) => {
		//Sätter en eventlistener på tabellen i admingränstsnittet. När man trycker på delete körs metoderna nedan
		//och eventet man tryckte på tas bort från localStorage. Sedan återställs tabellen och allt som finns i localstorage visas.
		if (e.target.classList.contains("delete")) {
			let category_delete =
				e.target.parentElement.parentElement.firstElementChild.innerHTML;
			category.removeCategory(category_delete);

			AdminUI.clearCategoryTable();
			AdminUI.showCategory();

			//om man trycker på edit körs koden nedan
		} else if (e.target.classList.contains("edit")) {
			let category_edit =
				e.target.parentElement.parentElement.firstElementChild.innerHTML;
			category.editCategory(category_edit);
			//gör om detta till metod?
			document.getElementById("category-submit-btn").style.display = "none";
			document.getElementById("category-edit-btn").style.display = "inline";
		}
	});

	document.getElementById("category-submit-btn").addEventListener("click", (e) => {
		//Anger vilka metoder som körs när man trycker på submitknappen i admin-gränssnittet
		category.addCategory();
		AdminUI.clearCategoryForm();
		AdminUI.clearCategoryTable();
		AdminUI.showCategory();
	});
});
