const contentDiv = document.getElementById("content-div");

class UI {
  //statisk klass
  static displayHeadline() {
    let headline = document.createElement("h4");
    headline.textContent = "EVENTS";
    headline.classList.add("event-headline");
    contentDiv.append(headline);
  }

  static displayEvents() {
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      let data = JSON.parse(localStorage.getItem(key));
      let event = document.createElement("a");
      event.classList.add("event-a");
      event.setAttribute("href", "home.html");

      event.innerHTML = `
        <p>${data.category}</p>
        <h3>${data.artistName}</h3>
        <span>${data.date}</span>
        <span>${data.arena}</span>
      `;

      contentDiv.append(event);
    }
  }
}

UI.displayHeadline();
UI.displayEvents();

// localStorage.setItem(
//   "1",
//   JSON.stringify({
//     category: "Jazz",
//     artistName: "Ozzy",
//     date: "19 oktober",
//     arena: "Globen",
//   })
// );

// localStorage.setItem(
//   "2",
//   JSON.stringify({
//     category: "Jazz",
//     artistName: "Ozzy",
//     date: "19 oktober",
//     arena: "Globen",
//   })
// );
