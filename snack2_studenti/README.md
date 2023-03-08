SNACK 2 - Snack Array Methods
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
--------------------------------------------------------------------
SVOLGIMENTO ESERCIZIO - Ipotesi

- LISTA DI PARTENZA: Lista di partenza di studenti con proprietà ID, NOME, SOMMA TOTALE VOTI; l'idea è di creare un Array di objects iniziale.
- LISTA1: per un nuovo corso serve una nuova lista degli stessi studenti che contenga soltanto la proprietà nome con i dati in maiuscolo; si potrebbe lanciare un ciclo map dell'array iniziale, considerando solo la proprietà NOME e chiedendo di scrivere il nome in maiuscolo.
- LISTA2: creare una lista di tutti gli studenti che hanno un totale voti superiore a 70; si potrebbe lanciare un ciclo FILTER con la condizione del voto maggiore di 70 per poter entrare in lista.
- LISTA3: creare una ulteriore lista di tutti gli studenti che hanno un totale voti superiore a 70 e ID superiore a 120; dalla precedente lista degli studenti con voto superiore a 70 si potrebbe creare una nuova lista che soddisfa la condizione ID superiore a 120.