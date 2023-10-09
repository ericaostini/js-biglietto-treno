// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let km = prompt("Quanti km vuoi percorrere?");
let eta = prompt("Età: ");

let biglietto = `
    <div>
        Vuoi percorrere ${km} km <br>
        La tua età è di ${eta} anni
    </div>
`;

document.getElementById("info-biglietto").innerHTML = biglietto;

// verificare che i valori inseriti siano una variabile numerica e non di testo 
if (isNaN(km) || isNaN(eta)){
    console.log("false");
    window.location.reload();
}

// calcolo prezzo del viaggio 
// prezzo fisso per km 0.21 euro al km

const pKM = 0.21;
let costoViaggio = pKM * km;
console.log(costoViaggio);

// sconto del 20% per i minorenni 
// sconto del 40% per over 65
if (eta < 18){
    costoViaggio = (costoViaggio - (costoViaggio * 20/100));
} else if(eta > 65){
    costoViaggio = (costoViaggio - (costoViaggio * 40/100))
} else {
    costoViaggio;
}

let decimalCost = costoViaggio.toFixed(2);
console.log(decimalCost);

decimalCost = `
    <div>
        Il costo del viaggio totale sarà di ${decimalCost} euro
    </div>
`;
document.getElementById("costo-viaggio").innerHTML = decimalCost;

