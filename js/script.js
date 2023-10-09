// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let km = prompt("Quanti km vuoi percorrere?");
console.log(km);

let eta = prompt("Età: ");
console.log(eta);

// verificare che i valori inseriti siano una variabile numerica e non di testo 
if (isNaN(km) || isNaN(eta)){
    console.log("false");
    window.location.reload();
}
