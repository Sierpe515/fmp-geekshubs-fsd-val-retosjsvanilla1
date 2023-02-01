let num1 = parseInt(prompt("Introduce el primer valor"));
let num2 = parseInt(prompt("Introduce el segundo valor"));
let signo = prompt("Introduce el nombre de la operación que quieres realizar").toLowerCase();

switch (signo) {
    case "suma":
        console.log ("Suma= ", (num1 + num2))
        break;
    
    case "resta":
        console.log ("Resta= ", (num1 - num2))
        break;

    case "multiplicación":
        console.log ("Multiplicación= ", (num1 * num2))
        break;

    case "división":
        console.log ("División= ", (num1 / num2))
        break;

    case "exponente":
        console.log ("Exponente= ", (num1 ** num2))
        break;
    
    case "modulo":
        console.log ("módulo= ", (num1 % num2))
        break;

    default:
        console.log ("Lo que has introducido no es el nombre de una operación válida")
}