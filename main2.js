// l'utente inserisce due parole in due promppt diversi il software stampa prima la parola più corta e poi la parola più lunga 


let parola1 = prompt("prima parola")
parola1.length
let parola2 = prompt("seconda parola")
parola2.length

if (parola1 > parola2) {
    console.log(parola1);
} else if (parola2 > parola1) {
    console.log(parola2);
}
