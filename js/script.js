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

// calcolo prezzo del viaggio 
// prezzo fisso per km 0.21 euro al km
// sconto del 40% per over 65

const pKM = 0.21;
let costoViaggio = pKM * km;
console.log(costoViaggio);

let costo = `
    <div>
        Il costo del viaggio totale è di ${costoViaggio}
    </div>
`;
document.getElementById("costo-viaggio").innerHTML = costo;


// sconto del 20% per i minorenni 
if (eta < 18){
    let costoMinorenni = (costoViaggio - (costoViaggio * 20/100));
    console.log(costoMinorenni);
}