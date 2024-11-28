/*
    Chiedi all'utente se sta piovendo, 
    SE piove ricordagli di portare con se l'ombrello!!
    ALTRIMENTI ricordagli di prendere la bici
    alla fine stampa un messaggio con "Puoi uscire di casa"
*/

// 0 - Chiedi all'utente se sta piovendo
const isRaining = confirm('Sta piovendo?');
// 1 - SE piove
//   - alert con "ricordati l'ombrello!!"
//   - ALTRIMENTI alert con "puoi prendere la bici"
if (isRaining) {
    alert("Ricordati l'ombrello!!");
} else {
    alert("Puoi prendere la bici");
}
// 2 - alert "Puoi uscire di casa"
alert("Puoi uscire di casa");
