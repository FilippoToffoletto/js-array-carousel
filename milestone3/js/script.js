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
const slider = document.querySelector('.items-wrapper');

for(let i = 0; i < imagesArray.length; i++){

    imageTags += `
        <img class="item" src="${imagesArray[i]}" alt="${imagesArray[i]}" >
    `;
}

let counterImages = 0;

const next = document.querySelector('.down')
const prev = document.querySelector('.up')
prev.classList.add('hide');


// aggiungo i tag generati dinamicamente allo slider
slider.innerHTML = imageTags;


// salvo tutti gli elementi che hanno classe item in una collection (un array di elementi html)
const items = document.getElementsByClassName('item');

// prendo il primo elemento della collection e aggiungo la classe active
items[counterImages].classList.add('active');


next.addEventListener('click',function(){

    items[counterImages].classList.remove('active');
    counterImages++;
    items[counterImages].classList.add('active');
    prev.classList.remove('hide');

    if(counterImages === imagesArray.length -1){
        next.classList.add('hide');
    }
});

prev.addEventListener('click', function(){
    
    items[counterImages].classList.remove('active');
    items[--counterImages].classList.add('active');

    next.classList.remove('hide');

    if(counterImages === 0){
        prev.classList.add('hide');
    }
});
