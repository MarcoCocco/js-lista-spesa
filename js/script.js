//1. Creare un array di elementi della lista della spesa
//2. Creare una variabile indice per tenere traccia dell'elemento corrente
//3. Creare un ciclo while per eseguire le seguenti operazioni, finché l'indice è minore della lunghezza dell'array:
//   a. Ottenere l'elemento corrente dall'array utilizzando l'indice
//   b. Stampare l'elemento corrente sulla pagina
//   c. Incrementare l'indice di 1

/* let listaSpesa = ['Uova', 'Latte', 'Pasta', 'Carta igienica', 'Frutta', 'Verdura', 'Acqua'];

let index = 0;

while (index < listaSpesa.length) {

    console.log(listaSpesa[index]);

    index++;
} */

//1. Creare un array di elementi della lista della spesa
let listaSpesa = ['Uova', 'Latte', 'Pasta', 'Carta igienica', 'Frutta', 'Verdura', 'Acqua'];

let listItemsEl = document.getElementById('list-items');
let addButtonEl = document.getElementById('add-button');
let listButtonEl = document.getElementById('list-button');

let addItemEl = document.getElementById('addItem');

//2. Creare una variabile indice per tenere traccia dell'elemento corrente
let index = 0;

//Piccolo bonus per aggiungere un elemento alla lista
addButtonEl.addEventListener('click', function () {

    listaSpesa.push(addItemEl.value);

});

listButtonEl.addEventListener('click', function(){

    while (index < listaSpesa.length) {

        //   a. Ottenere l'elemento corrente dall'array utilizzando l'indice
        let currentItem = listaSpesa[index];
    
        //   b. Stampare l'elemento corrente sulla pagina
        let newLiEl = document.createElement('li');
        newLiEl.textContent = currentItem;
        listItemsEl.append(newLiEl);
    
        //   c. Incrementare l'indice di 1
        index++;
    
    }

});


//3. Creare un ciclo while per eseguire le seguenti operazioni, finché l'indice è minore della lunghezza dell'array:

