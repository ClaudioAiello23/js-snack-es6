'use strict';


// Creare l'Array di oggetti BICI DA CORSA
const bikeList = [
    {
        nome: 'bianchi',
        peso_kg: 9.7,

    },
    {
        nome: 'atala',
        peso_kg: 9.1,

    },
    {
        nome: 'olmo',
        peso_kg: 10.2,

    },
    {
        nome: 'casati',
        peso_kg: 7.9,

    },
    {
        nome: 'colnago',
        peso_kg: 9.3,

    },
    {
        nome: 'bottecchia',
        peso_kg: 9.9,

    },
    {
        nome: 'cinelli',
        peso_kg: 8.4,

    },
    {
        nome: 'pistidda',
        peso_kg: 8.6,

    }
];

// Stampare da console l'intero Array di oggetti
console.log(bikeList);

// Stampare da console l'oggetto bici con peso più basso
console.log(bikeList[3]);

/*Destrutturare l'oggetto bici selezionato - DESTRUCTURING
NB alle chiavi oggetto "nome" e "peso_kg" della bici selezionata
attribuisco uno nome di variabile (per il nome uso bikeSelectedName,
per il peso bikeSelectedWeight)*/
const {nome: bikeSelectedName, peso_kg: bikeSelectedWeight} = bikeList[3];

// stampo in console le due variabili appena create tramite il DESTRUCTURING
console.log (bikeSelectedName, bikeSelectedWeight);

// stampo con template literal la frase finale
console.log(`Partendo dalla selezione iniziale di bici da corsa, la bici più leggera appartiene alla marca ${bikeSelectedName.toUpperCase()} e ha un peso di ${bikeSelectedWeight} Kg.`);




