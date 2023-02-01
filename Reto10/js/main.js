let suma = 0
let numVentas = parseInt(prompt("Introduce el número de ventas realizadas:"));

for (let i = 0; i < numVentas; i++) {
    let valorProducto = parseInt(prompt("Introduce el valor del producto"));
    suma += valorProducto;
}

console.log ("El valor total de los productos es ", suma);
