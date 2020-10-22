class Event{
    constructor(artistName, date, category, arena){
        this.id = localStorage.length
        this.artistName = artistName;
        this.date = date;
        this.category = category;
        this.arena = arena;
    }

    
}

class Arena {
    constructor(){
        this.arenaArray = ['Globen', 'Tele2 Arena', 'Friend\'s arena', 'Annexet'];
    }

    addArena(){

    }

    removeArena(){

    }
   
}


class Category {
    constructor(){
        this.categoryArray = ['Jazz', 'Schlager', 'Rock', 'Klassiskt', 'Pop']
    }

    addCategory(){
        
    }
    
    removeCategory(){
        
    }
}

class AdminUI {
    static showEvents(){
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let eventObject = JSON.parse(localStorage.getItem(key));
            console.log(keys)
            let table = document.getElementById('event-table')
            let tr = document.createElement('tr')
            tr.id = key
            
            tr.innerHTML+= `
                <td>${eventObject.artistName}</td>
                <td>${eventObject.date}</td>
                <td>${eventObject.category}</td>
                <td>${eventObject.arena}</td>
            `
            table.append(tr)
        }

    }
}


document.addEventListener('DOMContentLoaded', e => {

    const category = new Category();
    const arena = new Arena();

    document.getElementById('event-submit-btn').addEventListener('click', e => {
        let artist = document.getElementById('artist-name').value
        let date = document.getElementById('date').value
        let category = document.getElementById('category-select').value
        let arena = document.getElementById('arena-select').value

        let event = new Event(artist, date, category, arena)
        localStorage.setItem(event.id, JSON.stringify(event));

        let eventTable = document.getElementById('event-table')
        eventTable.innerHTML = eventTable.firstElementChild.innerHTML

        AdminUI.showEvents();

    })
})

