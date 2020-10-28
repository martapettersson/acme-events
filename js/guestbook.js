const contentDiv = document.getElementById("divContent");
document.addEventListener("DOMContentLoaded", function (e) {
  const guestbook = new GuestbookControler();
  GuestbookUI.displayGuestbook();
  GuestbookUI.displayGuestbookPosts();

  document.getElementById("PostsSubmitBtn").addEventListener("click", (e) => {
    guestbook.createPosts();
    GuestbookUI.clearGuestbookForm();
    GuestbookUI.clearGuestbookTable();
    GuestbookUI.displayGuestbookPosts();
    
    
  });
});

class Guestbook {
  constructor(guestbookName, guestbookPosts) {
    this.guestbookName = guestbookName;
    this.guestbookPosts = guestbookPosts;
  }
}

class GuestbookControler {
  constructor() {
    if (localStorage.getItem("guestbookStorage") === null) {
      localStorage.setItem(
        "guestbookStorage",
        JSON.stringify({ idCounter: 0 })
      );
    }
  }

  createPosts() {
    let name = document.getElementById("name").value;
    let posts = document.getElementById("comment").value;
    let guestBookPost = new Guestbook(name, posts);

    let guestbookStorage = JSON.parse(localStorage.getItem("guestbookStorage"));
    guestbookStorage[guestbookStorage.idCounter] = guestBookPost;
    guestbookStorage.idCounter++;
    localStorage.setItem("guestbookStorage", JSON.stringify(guestbookStorage));
  }
  
}
class GuestbookUI {
  static displayGuestbook() {
    let divGuestbook = document.createElement("div");
    divGuestbook.setAttribute("id", "divGuestbook");

    let guestbookForm = document.createElement("form")
    guestbookForm.setAttribute("id", "guestbookForm")

    let inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "name");
    inputName.setAttribute("placeholder", "Namn: ");

    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "button")
    submitBtn.innerHTML = "Submbit"
    submitBtn.setAttribute("id", "PostsSubmitBtn");

    let commentBox = document.createElement("textarea");
    commentBox.setAttribute("rows", "4");
    commentBox.setAttribute("cols", "50");
    commentBox.setAttribute("id", "comment");

    guestbookForm.appendChild(inputName);
    guestbookForm.appendChild(submitBtn);
    guestbookForm.appendChild(commentBox);
    divGuestbook.appendChild(guestbookForm);
    contentDiv.appendChild(divGuestbook);

    const guestbookPostDiv = document.createElement("div");
    guestbookPostDiv.setAttribute("id", "divPosts");
    const guestbookTable = document.createElement("table");
    guestbookTable.setAttribute("id", "guestbookTable")
    const guestbooktBody = document.createElement("tbody")
    guestbooktBody.setAttribute("id", "guestbookTbody")
    const guestbookTR = document.createElement("tr")

    guestbooktBody.appendChild(guestbookTR)
    guestbookTable.appendChild(guestbooktBody)
    guestbookPostDiv.appendChild(guestbookTable);
    contentDiv.appendChild(guestbookPostDiv)


  }

  static displayGuestbookPosts() {

    
    

    let guestbookStorage = JSON.parse(localStorage.getItem("guestbookStorage"));
    let keys = Object.keys(guestbookStorage).sort();

    for (let key of keys) {
      if (key !== "idCounter") {
        let guestbookObject = guestbookStorage[key];
        let table = document.getElementById("guestbookTbody")
        let tr = document.createElement("tr")
        tr.id= key;
        tr.innerHTML += `
            <td>${guestbookObject.guestbookName}</td>
            <td>${guestbookObject.guestbookPosts}</td>
            <td><span class='delete'>DELETE</span><td/>
			
        `;
        
            table.appendChild(tr)
      }
        
        
    }
  }
  static clearGuestbookTable() {
    let postsTable = document.getElementById("guestbookTbody");
    
        postsTable.innerHTML =   
      "<tr>" + postsTable.firstElementChild.innerHTML + "</tr>";
    }

  static clearGuestbookForm() {
    document.getElementById("guestbookForm").reset();
  }
}
