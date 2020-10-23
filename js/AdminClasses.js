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

class EventControl {

    static createEvent(){
        let artist = document.getElementById('artist-name').value
        let date = document.getElementById('date').value
        let category = document.getElementById('category-select').value
        let arena = document.getElementById('arena-select').value

        let event = new Event(artist, date, category, arena)

        localStorage.setItem(event.id, JSON.stringify(event));

    }

    static removeEventObject(id){
        localStorage.removeItem(id)     
    }
}

class AdminUI {
    static showEvents(){
        let keys = Object.keys(localStorage).sort();
        for (let key of keys) {
            let eventObject = JSON.parse(localStorage.getItem(key));
            let table = document.getElementById('event-table')
            let tr = document.createElement('tr')
            tr.id = key
            tr.innerHTML+= `
                <td>${eventObject.artistName}</td>
                <td>${eventObject.date}</td>
                <td>${eventObject.category}</td>
                <td>${eventObject.arena}</td>
                <td><span class='delete'>DELETE</span></td> 
                <td><span>EDIT</span></td>
            `
            table.append(tr)
        }

    }

    static clearTable(){
        let eventTable = document.getElementById('event-table')
        eventTable.innerHTML = "<tr>" + eventTable.firstElementChild.innerHTML + "</tr>"
    }

    static clearForm(){
        document.getElementById('event-flex-form').reset()
    }


}