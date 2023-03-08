'use strict';

// Creare l'Array inziale di Objects studenti
const studentStartList = [
    {
        id: 213,
        nome: 'Marco della Rovere',
        somma_voti: 78,
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        somma_voti: 96,
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        somma_voti: 48,
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        somma_voti: 74,
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        somma_voti: 68,
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        somma_voti: 50,
    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        somma_voti: 84,
    },
];

// Stampare in console la lista iniziale di studenti (oggetti)
console.log('Lista iniziale studenti: ', studentStartList);

/*Creare una LISTA1 con solo il nome degli studenti in maiuscolo
Utilizzlo un ciclo FOR IN ed estrapolo la chiave "nome" dalla lista
di partenza, aggiungendo la stringa per il nome in maiuscolo*/
const studentNames =[]; // creo l'array da riempire con i nomi studenti
for (let key in (studentStartList)){
    studentNames.push(studentStartList[key].nome.toUpperCase());
}

// stampare in console la lista 1 "nomi studenti(in maiuscolo)"
console.log('Lista 1 - Nomi Studenti:' , studentNames);


