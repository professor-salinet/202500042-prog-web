function contar() {
    let numero = 0;
    let txtNumeroFinal = document.getElementById("txtNumeroFinal");
    let divNumeros = document.getElementById("divNumeros");
    divNumeros.innerHTML = "";
    for (let i = numero; i <= txtNumeroFinal.value; i++) { // i = i + 1
        divNumeros.innerHTML += i + "<br />"; // += vai fazer com que a variável receba ela mesma + o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) { // código 13 é quando a tecla enter é teclada
        contar();
    } else {
        if (
            isNaN(event.key) && // aqui significa que uma tecla não numérica foi teclada
            event.keyCode != 8 && // código 8 é quando a tecla backspace (apagar à esquerda) é teclada
            event.keyCode != 46 && // código 46 significa que a tecla delete é teclada
            event.keyCode != 37 && // código 37 significa que a tecla seta para esquerda é teclada
            event.keyCode != 38 && // código 38 significa que a tecla seta para cima é teclada
            event.keyCode != 39 && // código 39 significa que a tecla seta para baixo é teclada
            event.keyCode != 40 && // código 40 significa que a tecla seta para direita é teclada
            event.keyCode != 35 && // código 35 significa que a tecla end é teclada
            event.keyCode != 36 // código 36 significa que a tecla home é teclada
        ) { 
            console.log("Não é numérico. keyCode: ", event.keyCode);
            divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica! Por favor, tecle uma tecla numérica e tente novamente.";
        }
    }
});

document.getElementById("txtNumeroFinal").addEventListener('input', function(event) {
    // console.log(this);
    if (this.value.length > 3) {
        console.log("Tem mais de 3 caracteres");
        if (this.value > 999) {
            this.value = 999;
            alert("O número máximo permitido é 999!");
        } else {
            this.value = this.value.substring(0,3);
        }
    }
});
