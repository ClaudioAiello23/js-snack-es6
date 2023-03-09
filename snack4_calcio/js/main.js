'use strict';


/*****************************************************************
FUNCTIONS
*****************************************************************/
/*Function A -
Funzione ARROW per la generazione numeri Random da 1 a 100*/
const genRandomNum = () => Math.floor(Math.random() * 100) + 1;

// *************************************************************************

// Creare l'Array iniziale Squadre di calcio Serie A
const serieA = [
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


console.log(serieA);