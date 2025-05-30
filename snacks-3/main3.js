//il softwer deve chiedere per 10 volte all'utente di inserire un numero. 
// il programma stampa la somma di tutti i numeri 

// let n1 = Number(prompt("inserisci un numero"))
// let n2 = Number(prompt("inserisci un numero"))
// let n3 = Number(prompt("inserisci un numero"))
// let n4 = Number(prompt("inserisci un numero"))
// let n5 = Number(prompt("inserisci un numero"))
// let n6 = Number(prompt("inserisci un numero"))
// let n7 = Number(prompt("inserisci un numero"))
// let n8 = Number(prompt("inserisci un numero"))
// let n9 = Number(prompt("inserisci un numero"))
// let n10 = Number(prompt("inserisci un numero"))

// let somma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10
// console.log(somma);



let somma = 0;

for (let i = 0; i < 10; i++) {
    let numero = prompt("Inserisci un numero:");
    somma = somma + Number(numero);
}

console.log("La somma è: " + somma);