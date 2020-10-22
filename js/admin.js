document.addEventListener('DOMContentLoaded', e => {

    const category = new Category();
    const arena = new Arena();

    document.getElementById('event-submit-btn').addEventListener('click', e => {

        AdminLogic.createEvent()
        AdminUI.clearTable();
        AdminUI.showEvents();

    })
})

