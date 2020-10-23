document.addEventListener('DOMContentLoaded', e => {

    //TA BORT SEN!
    document.getElementById('clear').addEventListener('click', e => localStorage.clear())

    const category = new Category();
    const arena = new Arena();

    document.getElementById('event-table').addEventListener('click', e =>{
        if (e.target.classList.contains('delete')){
            console.log(e.target.parentElement.parentElement)
            id = e.target.parentElement.parentElement.id
            EventControl.removeEventObject(id)
            AdminUI.clearTable()
            AdminUI.showEvents()

        }
    })

    document.getElementById('event-submit-btn').addEventListener('click', e => {

        EventControl.createEvent()
        AdminUI.clearForm();
        AdminUI.clearTable();
        AdminUI.showEvents();

    })
})

