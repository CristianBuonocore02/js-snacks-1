//crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero
//se è dispari inseriscilo nell'arrey


let numeroArray = []
for (let i = 0; i < 6; i++) {
    let numero = Number(prompt("inserisci un numero"))
    if (numero % 2) {
        numeroArray.push(numero);
        console.log("pari");


    } else if (numero % 3) {
        console.log("dispari");

    }
}