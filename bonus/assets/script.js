/*
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
-difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
-difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
-difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

// Imposta il limite di default fuori dalle funzioni
let limit = 100;

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

// Seleziona l'elemento field dalla DOM
const fieldElement = document.querySelector('.field');

// Aggiungi un evento al form per gestire il click sul pulsante "Start Game"
document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault();

    // Cancella il contenuto dell'elemento field
    fieldElement.innerHTML = '';

    // Genera la griglia utilizzando il limite corrente
    generateField(fieldElement, limit);
});

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
            this.classList.toggle('bg-dark-blue'); // Alterna la classe 'bg-green' per cambiare il colore
        });
    }
}
