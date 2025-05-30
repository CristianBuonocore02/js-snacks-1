// l'utente inserisce due parole in due promppt diversi il software stampa prima la parola più corta e poi la parola più lunga 


let parola1 = prompt("prima parola")
parola1.length
let parola2 = prompt("seconda parola")
parola2.length

if (parola1.length > parola2.length) {
    console.log(parola1);
} else if (parola2.length > parola1.length) {
    console.log(parola2);
}
