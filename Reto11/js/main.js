let diaSemana = prompt("Introduce un día de la semana").toLowerCase()

switch (diaSemana) {
    case "lunes":
        console.log (diaSemana, "es un día laboral")
        break;
    
    case "martes":
        console.log (diaSemana, "es un día laboral")
        break;

    case "miércoles":
        console.log (diaSemana, "es un día laboral")
        break;

    case "jueves":
        console.log (diaSemana, "es un día laboral")
        break;

    case "viernes":
        console.log (diaSemana, "es un día laboral")
        break;
    
    case "sábado":
        console.log (diaSemana, "no es un día laboral")
        break;

    case "domingo":
        console.log (diaSemana, "no es un día laboral")
        break;
    
    default:
        console.log ("Lo que has introducido no es un día de la semana en mi idioma")
}