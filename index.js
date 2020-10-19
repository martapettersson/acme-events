//vad behöver skapas dynamiskt?
//1. en rubrik med events och kategori-knappar
//hämtar data från localStorage och skapar en div dit datan pushas in. varje div ska ha en länk till detaljsidan.
//appenda diven i content div
//när man trycker på event-knappen körs funktionen nedan.

const contentDiv = document.getElementById("content-div");

function displayHeadline() {
  let headline = document.createElement("h4");
  headline.textContent = "EVENTS";
  headline.style.borderBottom = "1px solid black";
  headline.style.margin = "0 0 15px";
  headline.style.textAlign = "center";
  contentDiv.append(headline);
}

displayHeadline();

//key kan vara localStorage.length + 1

localStorage.setItem(
  "1",
  JSON.stringify({
    category: "Jazz",
    artistName: "Ozzy",
    date: "19 oktober",
    arena: "Globen",
  })
);

localStorage.setItem(
  "2",
  JSON.stringify({
    category: "Jazz",
    artistName: "Ozzy",
    date: "19 oktober",
    arena: "Globen",
  })
);

function displayEvents() {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    let data = JSON.parse(localStorage.getItem(key));
    let event = document.createElement("a");
    event.className = "event-a";
    event.setAttribute("href", "home.html");

    let p = document.createElement("p");
    p.textContent = data.category;
    event.append(p);

    let h3 = document.createElement("h3");
    h3.textContent = data.artistName;
    event.append(h3);

    let span1 = document.createElement("span");
    span1.textContent = data.date;
    event.append(span1);

    let span2 = document.createElement("span");
    span2.textContent = data.arena;
    event.append(span2);

    contentDiv.append(event);
  }
}

//skapa funktion som skapar html object och skickar till display events. mindre rörigt.
//dessa objekt bör sparas någonstans om man
//display bör bara visa, objekten ska skapas i admin!

displayEvents();
