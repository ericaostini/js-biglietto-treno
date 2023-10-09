// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let km = prompt("Quanti km vuoi percorrere?");

let eta = prompt("Età: ");

let biglietto = `
    <div>
        Voglio percorrere ${km} e ho ${eta} anni
    </div>
`;

document.getElementById("info-biglietto").innerHTML = biglietto;

// verificare che i valori inseriti siano una variabile numerica e non di testo 
if (isNaN(km) || isNaN(eta)){
    console.log("false");
    window.location.reload();
}
