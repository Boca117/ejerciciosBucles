// Punto 1

// let num = prompt("Ingresa un numero");

// for (let i = 0; i <= 10; i++) {
//     const multiplo = num * i;
//     console.log(multiplo); 
// }

// Punto 2

// let suma = 0
// let numero

// do {
//     numero = Number(prompt("Ingresa un numero"))
//     if (numero !== 0) {
//         suma += numero
//         console.log(suma);
//     }
// } while (numero !== 0)
    
// console.log("La suma es " + suma)

// Punto 3
// let i = 0
// let gano = false
// let numeroIncognita = 60

// while (gano === false) {
//     i++
//     let numeroIngresado = parseInt(prompt("Ingresa un numero"))
//     if (numeroIngresado === numeroIncognita) {
//         gano = true
//         alert("Felicidades, lo lograste en " + i + " intentos")
//         break;
//     }
//     if (numeroIngresado < numeroIncognita) {
//         alert("El numero es mayor");
//     } else {
//        alert("El numero es menor");
//     }
    
// }

// Punto 4

// let numero = parseInt(prompt("Ingresa un numero"));

// for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//         alert("El numero "+ numero +" NO es primo");
//         break;
//     }
//     else if (i === numero - 1) {
//         alert("El numero "+ numero +" es primo");
//     }
// }

// Punto 5

// let numero = parseInt(prompt("Ingresa un numero"));


// for (let i = 1; i <= numero; i++){
//     let divisores = []
//     if (numero % i === 0) {
//         divisores.push(i)
//     } else {
//         continue
//     }
//     console.log(divisores);
// }

// Punto 6

// let arreglo = ["camion", "auto", "bicicleta", "barco", "moto", "avion", "helicoptero", "scooter", "avioneta", "lancha"]

// for (let i = 0; i < arreglo.length; i++) {
//     console.log(arreglo[i])
// }

//Punto 7

// let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arreglo.length; i++) {
//     console.log(arreglo[i]*2)

// }

//Punto 8

// let persona1 = {
//     rol: "Madre",
//     nombre: "Laura Escobar",
//     edad: 28,
//     ocupacion: "Profesora",
//     estadoCivil: "Comprometida",
// }

// let persona2 = {
//     rol: "Padre",
//     nombre: "Sebastian Sanchez",
//     edad: 30,
//     ocupacion: "Ingeniero",
//     estadoCivil: "Comprometido",
// }

// let persona3 = {
//     rol: "Hermana",
//     nombre: "Valentina Escobar",
//     edad: 22,
//     ocupacion: "Psicologa",
//     estadoCivil: "Soltera",
// }

// let persona4 = {
//     rol: "Abuelo",
//     nombre: "Gilberto Escobar",
//     edad: 60,
//     ocupacion: "Contratista",
//     estadoCivil: "Comprometido",
// }

// let persona5 = {
//     rol: "Tia",
//     nombre: "Luz Escobar",
//     edad: 50,
//     ocupacion: "Independiente",
//     estadoCivil: "Separada",
// }


// let familia = [persona1, persona2, persona3, persona4, persona5]


// for (let i = 0; i < familia.length; i++) {
//         console.log("Este miembro de la familia es el/la " + familia[i].rol + ", con una edad de " + familia[i].edad + ", se ocupa como " + familia[i].ocupacion + ", y se encuentra " + familia[i].estadoCivil)

// }

//Punto 9
// let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] % 2 !== 0) {
//         console.log(arreglo[i])
//     } else {
//         continue
//     }
// }


//Punto 10

// let sumaPares = 0
// let sumaImpares = 0
// let numero

// while (numero !== 0) {
//     numero = Number(prompt("Ingresa un numero"))
//     if (numero !== 0 && numero % 2 === 0) {
//         sumaPares += numero
//     } else {
//         sumaImpares += numero
//     }

// }
// console.log("La suma de pares es " + sumaPares)
// console.log("La suma de impares es " + sumaImpares)

// Punto 11
// let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let maximo = arreglo[0]

// for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] > maximo) {
//         maximo = arreglo[i]
//     }    
// }

// console.log("El numero mas grande del arreglo es: " + maximo)

// Punto 12
// let arreglo = [15, 24, 33, 54, 95, 16, 67, 81, 9, 150]
// let minimo = arreglo[0]

// for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] < minimo) {
//         minimo = arreglo[i]
//     }    
// }

// console.log("El numero mas chico del arreglo es: " + minimo)

// Punto 13

// let jugador1 = prompt("Jugador 1: Ingresa tu nombre")
// let jugador2 = prompt("Jugador 2: Ingresa tu nombre")
 

// let eleccion1 
// let eleccion2

// while (eleccion1 === eleccion2) {  
    
//     eleccion1 = prompt(jugador1 + ", Elige entre piedra, papel o tijera").toLowerCase();
//     eleccion2 = prompt(jugador2 + ", Elige entre piedra, papel o tijera").toLowerCase()

    
//     if (eleccion1 === "piedra" && eleccion2 === "tijera" || eleccion1 === "papel" && eleccion2 === "piedra" || eleccion1 === "tijera" && eleccion2 === "papel") {
//         alert("Gana " + jugador1)
//         break
        
//     } else if (eleccion2 === "piedra" && eleccion1 === "tijera" || eleccion2 === "papel" && eleccion1 === "piedra" || eleccion2 === "tijera" && eleccion1 === "papel") {
//         alert("Gana " + jugador2)
//         break
//     }
//     alert("Empate")
    
// }


//Punto 14

// function triangulo(lado) {
    
//     for (let i = 0; i <= lado; i++) {

//         console.log("*".repeat(i))
        
//     }
// }

// triangulo(5)


 //Punto 15
// function trianguloinv(lado) {
    
//     for (let i = 0; i <= lado; i++) {

//         console.log("*".repeat(lado - i))
        
        
//     }
// }

// trianguloinv(5)
 
//Punto 16

// let arreglo = [2, 4, 5, 45, 20, 10, 1, 8, 23, 27]
// let orden = []

// while (arreglo.length > 0) {
//     let minimo = arreglo[0]

//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] < minimo) {
//             minimo = arreglo[i]
//         }    
//     }
//     orden.push(minimo)
//     let index = arreglo.indexOf(minimo)
//     arreglo.splice(index, 1)
// }

// alert(orden)