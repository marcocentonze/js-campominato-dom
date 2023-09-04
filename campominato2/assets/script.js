/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

// Imposta il limite di default fuori dalle funzioni
let limit = 100;
const fieldElement = document.querySelector('.field');
let bombsArray = [];//array per memorizzare le posizioni delle bombe
let stopGame = false;//variabile per capire se il gioco è over o continua

// Definisci la funzione per generare la griglia
function generateField(domElement, limit) {
    // Genera la griglia in pagina
    for (let i = 0; i < limit; i++) {
        // Crea un elemento nel markup per rappresentare la singola cella
        const cellElement = document.createElement("div");
        // Aggiungi la classe "cell" e poi stampalo in pagina
        cellElement.className = "cell";
        cellElement.append(i + 1);
        domElement.append(cellElement);
        // Usa math.sqrt per calcolare la larghezza e .style.width per cambiarla nel CSS
        cellElement.style.width = `calc(100% / ${Math.sqrt(limit)})`;
        // Aggiungi un event listener quando si clicca sulla cella per cambiare il colore
        cellElement.addEventListener('click', function () {
            //if per verificare se il gioco è in corso
            if (!stopGame) {
                if (bombsArray.includes(Number(this.textContent))) 
                {//Se si clicca su una bomba,casella diventa red e game over
                    this.classList.add('bg-red');
                    stopGame = true;
                    alert("Hai perso!Mi dispiace ma hai cliccato su una bomba.");
                } else {
                    this.classList.toggle('bg-dark-blue'); //altrimenti il blu normale
                }
            }
        });
    }
}

// Aggiungi un evento change alla select
document.getElementById('difficulty').addEventListener('change', function () {
    // Ottieni il valore selezionato
    const selectedDifficulty = Number(this.value);

    // Imposta il limite in base alla difficoltà selezionata
    if (selectedDifficulty === 1) {
        limit = 100;
    } else if (selectedDifficulty === 2) {
        limit = 81;
    } else if (selectedDifficulty === 3) {
        limit = 49;
    }
});

// Aggiungi un evento al form per gestire il click sul pulsante "Avvia il gioco"
document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault();

    // Cancella il contenuto dell'elemento field
    fieldElement.innerHTML = '';
    stopGame = false;

    // Genera la griglia utilizzando il limite corrente
    generateField(fieldElement, limit);

    // Genera le posizioni delle bombe
    bombsArray = generateBombs(limit);
});

// Funzione per generare le posizioni delle bombe in modo casuale
function generateBombs(limit) {
    const bombPositions = [];
    //ciclo while bombsposit.lenght<16...
    while (bombPositions.length < 16) {
        const bombPosition = Math.floor(Math.random() * limit) + 1;
        if (!bombPositions.includes(bombPosition)) {
            bombPositions.push(bombPosition);
        }
    }
    return bombPositions;
}

//stampare in pagina(creo primo il div su html)