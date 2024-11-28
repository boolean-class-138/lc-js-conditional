/*
    Chiedi all'utente due numeri e determina qual è il numero più grande.
*/

// 1 - Chiedo il primo numero all'utente
const num1 = Number(prompt("Inserisci il primo numero"));
// 2 - Chiedo il secondo numero all'utente
const num2 = Number(prompt("Inserisci il secondo numero"));
// 3 - SE il primo numero è > del secondo
//      - alert "il primo numero è maggiore del secondo"
//   - ALTRIMENTI SE il secondo numero è > del primo
//      - alert "il secondo numero è maggiore del primo"
//   - ALTRIMENTI 
//      - alert "i numeri sono uguali"
if (num1 > num2) {
    alert("il primo numero è maggiore del secondo");
} else if(num2 > num1) {
    alert("il secondo numero è maggiore del primo");
} else if(num1 == num2) {
    alert("I numeri sono uguali");
}

