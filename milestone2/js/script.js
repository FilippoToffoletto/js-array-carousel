/* Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. */


// inserisco la banca dati che include le immagini
const imagesArray = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg',
];

// creaiamo una constante vuota iniziale
let imageTags = '';

// seleziono il contenitore che conterrà i tag img
const slider = document.querySelector('.item-wrapper');

for(let i = 0; i < imagesArray.length; i++){

    imagesTags = `
        <img src="${imagesArray[i]}" alt="${imagesArray[i]}" class="item">
    `;
    
}

let counterImages = 0;

// aggiungo i tag generati dinamicamente allo slider
slider.innerHTML = imagesTags;

// salvo tutti gli elementi che hanno classe item in una collection (un array di elementi html)
const items = document.getElementsByClassName('item');

// prendo il primo elemento della collection e aggiungo la classe active
items[counterImages].classList.add('active');
