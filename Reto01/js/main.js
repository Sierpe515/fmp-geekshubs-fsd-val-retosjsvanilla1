let variable1 = "ten"
let variable2 = 2

if (variable1 > variable2) {
    console.log(variable1, " es mayor que ", variable2)
} else if (variable2 > variable1) {
    console.log (variable2, " es mayor que ", variable1)
} else if (variable1 === variable2) {
    console.log ("Ambos valores son iguales")
} else {
    (console.log ("Los valores introducidos no son correctos"))}

// Ternaria: Es un else if moderno (else if en una sola línea)
// Sólo compara una dos condiciones, luego es como un else if,
// no puede hacer varias comparaciones.

// let resultado = (condición) 

// ? "condición es true" // el ? pregunta si la condición es true (if)

// : "condición es fase" // el : es un si no (else)