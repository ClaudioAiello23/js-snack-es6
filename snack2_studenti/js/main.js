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

/*LISTA 1:
Creare una LISTA 1 con solo il nome degli studenti in maiuscolo
Utilizzlo un ciclo FOR IN ed estrapolo la chiave "nome" dalla lista
di partenza, aggiungendo la stringa per il nome in maiuscolo*/
const studentNames =[]; // creo l'array da riempire con i nomi studenti
for (let key in (studentStartList)){
    studentNames.push(studentStartList[key].nome.toUpperCase());
}

// stampare in console la Lista 1 "nomi studenti(in maiuscolo)"
console.log('Lista 1 - Nomi Studenti:' , studentNames);

/*LISTA 2:
Creare una LISTA2 che, partendo sempre dalla lista iniziale studenti, 
stampi in console l'elenco degli studenti che hanno un totale
voti superiore a 70; utilizzare un ciclo FILTER*/
const studentsUp70 = studentStartList.filter((element) => {
    if (element.somma_voti > 70){
        return true;
    }
    return false;
});

// stampare in console la Lista 2 "studenti con somma voti > 70"
console.log('Lista 2 - Studenti voto superiore a 70: ', studentsUp70);


/*LISTA 3:
Creare una LISTA3 che, partendo sempre dalla lista iniziale studenti, 
stampi in console l'elenco degli studenti che hanno un totale
voti superiore a 70 e anche un ID superiore a 120; utilizzare un ciclo FILTER*/
const studentsUp_70_120 = studentStartList.filter((element) => {
    if (element.somma_voti > 70 && element.id > 120){
        return true;
    }
    return false;
});

// stampare in console la Lista 3 "studenti con somma voti > 70 e id > 120"
console.log('Lista 3 - Studenti voto superiore a 70 e id superiore a 120: ', studentsUp_70_120);