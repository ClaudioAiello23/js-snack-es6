'use strict';

// Creare un Array di partenza con la lista che mi è stata girata
const startList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// Verifica da console dell'Array iniziale
console.log('Array di partenza degli invitati', startList);

// Lanciare un ciclo MAP sull'array iniziale per clonarlo in un nuovo Array
const newList = startList.map((element) => element);

// Rimuovere dal nuovo Array l'ultimo invitato e aggiungere i 4 Maneskin
newList.pop(); //rimuove l'ultimo elemento dell'array
newList.push('Damiano David', 'Victoria De Angelis', 'Thomas Raggi', 'Ethan Torchio');

// Stampare in console la newList invitati aggiornata
console.log('Nuovo Array degli invitati', newList);

// SOLUZIONE A:
/* Avviare un ciclo MAP che, partendo dall'Array newList, prende l'elemento
e l'indice di posizionamento e crea per ogni elemento dell'Array un oggetto
contenente il nome, il posto, il nome_tavolo.*/
const finalList = newList.map((element, index) => 
    ({
        nome: element,
        posto: index + 1,
        nome_tavolo: 'Tavolo Vip',
    })  
);

// Stampare in console la lista finale OBJECTS (segnaposto)
console.log('Lista finale OGGETTI', finalList);


// ----------------------------------------------------------
// SOLUZIONE B (ALTERNATIVA - commentata - testata e funzionante)
/* Creare un Array vuoto finalList che dovrà contenere i miei oggetti 
finali (segnaposto)
const finalList = [];

Lanciare un ciclo FOR-EACH per passare la NewList ed
includere gli oggetti (nome, posto, nometavolo) nell'array finale
newList.forEach((element, index) =>{
   finalList.push(
        {
        nome: element,
        posto: index + 1,
        nome_tavolo: 'Tavolo Vip',
        }
    );
})

console.log('Lista finale OGGETTI', finalList);*/











