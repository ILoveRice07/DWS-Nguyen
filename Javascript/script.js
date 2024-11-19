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

//9.Úkol, Přičítání hodnoty 3 k hodnotě vepsané uživatelem
function Value(){
   let final = document.getElementById('vysledek');
   let input_U9 = document.getElementById('input_U9').value;
   input_U9 = Number(input_U9);
   let input_U9_final = input_U9 + 3;
   final.textContent = 'Výsledek je: ' + input_U9_final;
}

//10. Úkol, Sčítá čísla
function add(){
    let vysledek_2 = document.getElementById('vysledek_2');
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    input1 = Number(input1);
    input2 = Number(input2);
    let input_final = input1 + input2;
    vysledek_2.textContent = 'Výsledek je: ' + input_final
}

//11. Úkol, Obrázek
const picture = document.getElementById('picture');
const nadpis_pic = document.getElementById('nadpis_pic');
const text_pic = document.getElementById('text_pic');

picture.addEventListener("mouseenter", function(){
    picture.style.width = "500px";
    picture.style.height = "400px"
    nadpis_pic.textContent = "This is New York.";
    text_pic.textContent = "It is the most populated city in the United States of America."
})

picture.addEventListener("mouseout", function(){
    picture.style.width = "400px"
    picture.style.height = "300px"
    nadpis_pic.textContent = ""
    text_pic.textContent = ""
})

//12. Úkol, Přidávání úkolů
let input_U12 = document.getElementById("input_U12");
const addItem = document.getElementById("add_item");
const list = document.getElementById("list");

addItem.addEventListener("click", function(){
    let inputItem = input_U12.value;
    const Item = document.createElement("div");
    Item.textContent = inputItem;

    Item.addEventListener("click", function(){
        list.removeChild(Item);
    })

    list.appendChild(Item)
    inputItem.value = ""
})
