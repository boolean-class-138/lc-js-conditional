/*
    Bim, bum, bam...
*/

// 1 - Chiedo all'utente di scegliere fra "pari" o "dispari"
const evenOrOdd = prompt("Scegli fra 'pari' o 'dispari'");
// 2 - Chiedo all'utente di scegliere un numero fra 0 e 5 (compresi)
const userNumber = Number(prompt("Scegli un numero fra 0 e 5"));
console.log(`Hai scelto ${evenOrOdd} e il numero ${userNumber}`);
// 3 - Genero un numero randomico (CPU) fra 0 e 5
const cpuNumber = Math.floor(Math.random() * 6);
console.log(`Numero generato dalla CPU: ${cpuNumber}`);
// 4 - Sommo il numero dell'utente con quello della CPU
const sum = userNumber + cpuNumber;
console.log(sum);
// 5 - Controllo se il "sum" è pari o dispari
let result; // undefined
if (sum % 2 === 0) {
    result = 'pari'
} else {
    result = 'dispari'
}
// 6 - SE quello che ha scelto l'utente è UGUALE al risultato calcolato in precedenza
//     - Hai vinto!!
//   - ALTRIMENTI
//     - Hai Perso!!
if (result === evenOrOdd) {
    alert('hai vinto!!!')
} else {
    alert('sei scarso!')
}