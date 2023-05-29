/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I datatype principali in JavaScript sono: stringhe, numeri e booleani.
1) Stringhe = sono sostanzialmente delle righe di testo costituite da caratteri alfabetici e definite da doppi apici.
2) Numeri = sono caratteri numerici con cui è possibile effettuare operazioni aritmetiche.
3) Booleani = sono valori predefiniti in coppia (true, false) in cui uno dei due valori esclude necessariamente l' altro valore. Sono utilizzati principalmente per effettuare controlli su variabili o come condizionali.
Ci sono altri due tipi di valori: Undefined e Null.
Undefined indica l'esistenza di una variabile, ma la mancata assegnazione di un valore.
Null, invece, indica l'assegnazione ad una variabile di un valore "vuoto".
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Giuseppe"
console.log("My name is", name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 12
const num2 = 20
const sum = num1 + num2
console.log("num1 =", num1)
console.log("num2 =", num2)
console.log("num1 and num2 sum is", sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12
console.log("x=", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Cifarelli"
const surname = "Cifarelli"
console.log("constant",typeof surname)
// surname = "Giuseppe"
// console.log("It's not possible to change the value of surname variable because It's a constant", surname)
// For verify that you can't change value of constant variable You need to uncomment 2 code lines up

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const subtraction = 4 - x
console.log ("Subtraction between 4 and x is", subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log("name1 =",name1)
console.log("name2 =",name2)
console.log("name1 and name2 are different?",name1 !== name2)
// EXTRA
console.log("Are they different if they're both in lowercase?", name1.toLowerCase() !== name2.toLowerCase())
console.log("Is name2 still the same?", name2)