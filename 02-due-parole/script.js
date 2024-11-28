/*
    Chiedi all'utente di inserire due parole e determina
    SE la prima è più lunga della seconda 
    ALTRIMENTI SE la seconda è più lunga dela prima 
    ALTRIMENTI SE sono uguali
*/

// 1 - Chiedo all'utente di inserire la prima parola
const word1 = prompt("Inserisci la prima parola");
// 2 - Chiedo all'utente di inserire la seconda parola
const word2 = prompt("Inserisci la seconda parola");
// 3 - SE la prima è più lunga della seconda 
//   - ALTRIMENTI SE la seconda è più lunga dela prima 
//   - ALTRIMENTI SE sono uguali
if (word1.length > word2.length) {
    alert("la prima è più lunga della seconda");
} else if(word2.length > word1.length) {
    alert("la seconda è più lunga della prima");
} else {
    alert("Le due parole sono lunghe uguali")
}