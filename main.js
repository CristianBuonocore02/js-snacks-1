// l'utente inserisce due numeri in successione, con due prompt
// il softwe stampa il maggiore 

let numero1 = Number(prompt("primo numero"))
let numero2 = Number(prompt("secondo numero"))

if (numero1 > numero2) {
    console.log("il primo numero è maggiore");
} else if (numero2 > numero1) {
    console.log("il secondo numero è maggiore");

} else {
    console.log("i numeri sono uguali");

}
