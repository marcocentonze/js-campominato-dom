/*
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
-difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
-difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
-difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

//imposto il limite di 100(meglio fuori dalle funzioni)
let limit = 100;

// Aggiungo un evento change alla select
document.getElementById('difficulty').addEventListener('change', function () {
    // Ottengo il valore selezionato
    const selectedDifficulty = Number(this.value);

    // Imposto il limite in base alla difficoltà selezionata
    if (selectedDifficulty === 1) {
        limit = 100;
    } else if (selectedDifficulty === 2) {
        limit = 81;
    } else if (selectedDifficulty === 3) {
        limit = 49;
    }
});
//evento per il bottone da cliccare
document.getElementById('start_game').addEventListener('click', startGame);


function startGame() {
    //Selezione l'elemento field della DOM
    const fieldElement = document.querySelector('.field');
    //richiamo la funzione per dire dove si andrà a stampare(dentro field)
    generateField(fieldElement, limit);
}

//definiamo la funzione per generare la griglia
function generateField(domElement, limit) {
    // Genero la griglia in pagina
    for (let i = 0; i < limit; i++) {
        //creo un elemento nel markup per rappresentare la singoal cella
        const cellElement = document.createElement("div");
        //aggiungo la classe "cell" e poi stampo in pagina
        cellElement.className = "cell";
        cellElement.append(i + 1);
        domElement.append(cellElement);
        //uso math.sqrt per calcolare la larghezza e .style.width per cambiare nel mio css
        cellElement.style.width = `calc(100% / ${Math.sqrt(limit)})`
        //aggiungo eventolistener quando clicco sulla cella per cambiare colore
        cellElement.addEventListener('click', function () {
            this.classList.toggle('bg-dark-blue'); // Alterna la classe 'bg-green' per cambiare il colore
        });
    }
}
