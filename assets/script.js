//evento per il bottone da cliccare
document.getElementById('start_game').addEventListener('click', startGame);
//imposto il limite di 100(meglio fuori dalle funzioni)
const limit = 100;

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
        //aggiungo eventolistener quando clicco sulla cella per cambiare colore
        cellElement.addEventListener('click', function () {
            this.classList.toggle('bg-dark-blue'); // Alterna la classe 'bg-green' per cambiare il colore
        });
    }
}
