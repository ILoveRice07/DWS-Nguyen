//1.Úkol, Tlačítko-alert
let first = document.getElementById('first');

first.addEventListener('click', function(){
    alert("Surprise!")
})

//2.Úkol, Tlačítko-změna textu v tlačítku
const second = document.getElementById('second');

second.addEventListener('click', function(){
    second.textContent = "Surprise!" 
})

//3.Úkol, Tlačítko-změna textu nad tlačítkem
const third = document.getElementById('third');

const thirdh = document.getElementById('thirdh');

third.addEventListener('click', function(){
    thirdh.textContent = "Surprise!"
})

//4.Úkol, Tlačítko-text se objeví
const fourth = document.getElementById('fourth');

const fourthh = document.getElementById('fourthh');

fourth.addEventListener('click', function(){
    fourthh.textContent = "Surprise!"
})

//5.Úkol, Zadání jména, a po stisknutí tlačítka vyskočí alert s pozdravem
function GetValue(){
    let input = document.getElementById('input').value;
    alert("Welcome to this website " + input + "!!");
}

//6.Úkol, Přejíždění myší přes text změní text
const sixth = document.getElementById('sixth');

sixth.addEventListener('mouseenter', function(){
    sixth.textContent = 'Surprise'
})

sixth.addEventListener('mouseout', function(){
    sixth.textContent = 'Hover for a surprise!'
})

//7.Úkol, Tlačítka-vypíše datum a čas
let cas = document.getElementById('cas');
let datum = document.getElementById('datum');

const pcas = document.getElementById('pcas');

const pdatum = document.getElementById('pdatum');

cas.addEventListener('click', function(){
    const aktualnicas = new Date();
    const skutecnycas = aktualnicas.toLocaleTimeString();
    pcas.textContent = 'Current time is:  ' + skutecnycas;
})

datum.addEventListener('click', function(){
    const aktualnidatum = new Date();
    const skutecnedatum = aktualnidatum.toLocaleDateString();
    pdatum.textContent = 'Current date is: ' + skutecnedatum;
})

//8.Úkol, Přejíždení myší přes text změní text na aktuální čas a datum
const cas_dva = document.getElementById('cas_dva')

const datum_dva = document.getElementById('datum_dva')

cas_dva.addEventListener('mouseenter', function(){    
    const aktualnicas = new Date();
    const skutecnycas = aktualnicas.toLocaleTimeString();
    cas_dva.textContent = 'Current time is: ' + skutecnycas;
})

cas_dva.addEventListener('mouseout', function(){    
    cas_dva.textContent = 'Hover over with your cursor to see the current time.';
})


datum_dva.addEventListener('mouseenter', function(){    
    const aktualnidatum = new Date();
    const skutecnedatum = aktualnidatum.toLocaleDateString();
    datum_dva.textContent = 'Current date is: ' + skutecnedatum;
})

datum_dva.addEventListener('mouseout', function(){    
    datum_dva.textContent = 'Hover over with your cursor to see the current date.';
})