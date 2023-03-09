'use strict';


/*****************************************************************
FUNCTIONS
*****************************************************************/
/*Function A -
Funzione ARROW per la generazione numeri Random da 1 a 100*/
const genRandomNum = () => Math.floor(Math.random() * 100) + 1;

// *************************************************************************

// Creare l'Array iniziale Squadre di calcio Serie A
const serieAstart = [
    {
        nome:'Atalanta',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Bologna',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Cremonese',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Empoli',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Fiorentina',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Hellas Verona',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Inter',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Juventus',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Lazio',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Lecce',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Milan',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Monza',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Napoli',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Roma',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Salernitana',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Sampdoria',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Sassuolo',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Spezia',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Torino',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:'Udinese',
        punti_fatti: 0,
        falli_subiti: 0,
    }
];

// Stampa iniziale Array di oggetti creato
console.log('Serie A-iniziale:', serieAstart);

/*Lancio di un ciclo MAP che cicla l'array di oggetti ed attribuisce
la funzione di generazione numeri Random per le chiavi oggetto 
"punti_fatti" e "falli_subiti"; il risultato sarà salvato in un
nuovo Array Objects*/
const serieAnew = serieAstart.map((element) => {
        element.punti_fatti = genRandomNum();
        element.falli_subiti = genRandomNum();
        return element;
});

console.log('Serie A-modificata:', serieAnew);