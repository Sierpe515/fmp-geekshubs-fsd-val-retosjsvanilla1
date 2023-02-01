// EJERCICIO 01

// Pida un número por prompt, acto seguido irá restando ese número hasta 
// llegar a 0 (usando un bucle), cada uno de los números que devuelva la 
// resta en el bucle, hay que decir por console.log si ese número es par.

// let num = parseInt(prompt("Introduce un número"));

// Con FOR

// for (let i = num; i < 0; i--) {
//     if (i % 2 === 0){
//         console.log (i);
//     }
// }

// Con WHILE

// let num = parseInt(prompt("Introduce el número"))

// while (num = 0)
//     if (num % 2 === 0) {
//         console.log ("Es par", num)
//     }

// EJERCICIO 02

// Como ampliación al ejercicio anterior, ahora hará una suma de todos los 
// pares y lo mostrará mediante console.log una vez haya salido del bucle, 
// además de ello, para sufrimiento del alumnado, no sólo nos dirá si un 
// número es par, también nos dirá si es impar, en vez de un if else , 
// usareis una ternaria.

// let num = parseInt(prompt("Introduce un número"));
// let resulSuma = 0

// while (num > 0) {
//     num % 2 === 0 
//     ? (console.log ("Es par", num), resulSuma += num)
//     : (console.log ("Es impar", num));
//     num--;
// }

// console.log ("La suma de los pares es:", resulSuma);

// FUNCIONES

// FUNCIÓN FLECHA

// let num1 = parseInt(prompt("Introduce un número"))
// let num2 = parseInt(prompt("Introduce un número"))

// const Dividir = (numA, numB) => { //La variable que se declare para la función, sólo funcionan dentro de la propia función

//     let resultado = numA / numB;

//     return resultado; // Este resultado sólo funciona dentro de la función
// }

// console.log (Dividir (num1, num2))