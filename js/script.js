// Viene fornito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.



// Array con tutti i membri del team.
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// Stampo in console le informazioni di nome, ruolo e la stringa della foto.
// Selezione il contenitore delle card.
let employeeCardContainer = document.querySelector(".team-container");

// Creo delle variabili dove depositerò di volta in volta le informazioni dei vari dipendenti.
let employeeImage;
let employeeName;
let employeeRole;

// Creo un ciclo che scorre l'array contenente gli oggetti.
for (let i = 0; i < team.length; i++) {
    const thisItem = team[i];
    
    // Creo un ciclo che scorre ogni oggetto dell'array...
    for (let key in thisItem) {
        // ...stampo in console le informazioni contenute in questi oggetti...
        console.log(thisItem[key]);
        
        // Deposito nelle variabili precedentemente create, le informazioni.
        if (key === "image") {
            employeeImage = `<img src="img/${thisItem[key]}" alt="${thisItem["name"]}">`;
        } else if (key === "role") {
            employeeRole = thisItem[key];
        } else if (key === "name") {
            employeeName = thisItem[key];
        }
    }

    // Creo la stringa contenente tutta la card...
    const employeeCard = 
        `<div class="team-card">
            <div class="card-image">
                ${employeeImage}
            </div>
            <div class="card-text">
                <h3>${employeeName}</h3>
                <p>${employeeRole}</p>
            </div>
        </div>`
    ;

    // ... e la inserisco nel contenitore HTML.
    employeeCardContainer.innerHTML += employeeCard;
}

// FORM
const addButton = document.getElementById("addMemberButton");

addButton.addEventListener("click", collectData);


// FUNCTION
function collectData() {
    const formName = document.getElementById("name").value;
    const formRole = document.getElementById("role").value;
    const formImage = document.getElementById("image").value;
    
    const newCard = 
        `<div class="team-card">
            <div class="card-image">
                <img src="${formImage}">
            </div>
            <div class="card-text">
                <h3>${formName}</h3>
                <p>${formRole}</p>
            </div>
        </div>`
        ;
        
        employeeCardContainer.innerHTML += newCard;
}