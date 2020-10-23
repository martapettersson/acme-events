document.addEventListener('DOMContentLoaded', e => {

    //TA BORT SEN! Knapp som tömmer localStorage.
    document.getElementById('clear').addEventListener('click', e => localStorage.clear())

    const category = new Category();
    const arena = new Arena();

    document.getElementById('event-table').addEventListener('click', e =>{
        //Sätter en eventlistener på tabellen i admingränstsnittet. När man trycker på delete tar körs metoderna nedan
        //och eventet man tryckte på tas bort från localStorage. Sedan återställs tabellen och allt som finns i localstorage visas.
        if (e.target.classList.contains('delete')){
            id = e.target.parentElement.parentElement.id
            EventControl.removeEventObject(id)
            AdminUI.clearTable()
            AdminUI.showEvents()
        }
    })

    document.getElementById('event-submit-btn').addEventListener('click', e => {
        //Anger vilka metoder som körs när man trycker på submitknappen i admin-gränssnittet
        EventControl.createEvent()
        AdminUI.clearForm();
        AdminUI.clearTable();
        AdminUI.showEvents();

    })
})

