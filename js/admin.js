document.addEventListener('DOMContentLoaded', e => {

    //TA BORT SEN!
    document.getElementById('clear').addEventListener('click', e => localStorage.clear())

    const category = new Category();
    const arena = new Arena();

    document.getElementById('event-submit-btn').addEventListener('click', e => {

        AdminLogic.createEvent()
        AdminUI.clearForm();
        AdminUI.clearTable();
        AdminUI.showEvents();

    })
})

