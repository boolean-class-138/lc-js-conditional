/*
    Chiedi all'utente che ore sono.
    SE l'ora è compresa fra 6 e 12 salutalo con il "Buongiorno"
    ALTRIMENTI SE l'ora è compresa fra 12 e 18 salutalo con il "Buon Pomeriggio"
    ALTRIMENTI SE l'ora è compresa fra 18 e 22 salutalo con il "Buonsera"
    ALTRIMENTI è tardi! "Vai a dormire!"
*/

// 1 - Chiedo che ore sono
const hour = Number(prompt("Inserisci l'ora"));
// 2 - SE l'ora > di 6 e < di 12
//      - "Buongiorno"
//    - ALTRIMENTI SE l'ora > di 12 e < di 18
//      - "Buon Pomeriggio"
//    - ALTRIMENTI SE l'ora > di 18 e < di 22
//      - "Buonsera"
//    - ALTRIMENTI
//      - "Buona notte!!"
if (hour >= 6 && hour <= 12) {
    alert("Buongiorno");
} else if (hour >= 12 && hour <= 18) {
    alert("Buon Pomeriggio");
} else if (hour > 18 && hour <= 22) {
    alert("Buonasera");
} else if ((hour > 22 && hour <= 24) || (hour >= 0 && hour <= 6)) {
    alert("Buona notte")
} else {
    alert("Guarda che hai inserito un orario sbagliato!! 0 - 24")
}
