let pass = "mano de milenio y gamba"

for (let i = 0; i < 3; i++) {
    let passIntento = prompt ("Santo y seña:")

    if (passIntento === pass) {
        alert ("Puede acceder a la cámara")
        console.log ("Puede acceder a la cámara");
        break;
    } else {
        alert ("Santo y seña erróneo")
        console.log ("Santo y seña erróeno")
    }
}