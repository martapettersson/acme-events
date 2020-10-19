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
    plats: "Globen",
  })
);

// localStorage.setItem("2", "testing");

function displayEvents() {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    let data = JSON.parse(localStorage.getItem(key));
    let event = document.createElement("a");
    event.className = "event-a";
    let p = document.createElement("p");
    p.textContent = data.category;
    event.append(p);
    contentDiv.append(event);
  }
}

displayEvents();
