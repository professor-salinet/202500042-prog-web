function colorirFundo() {
    let txtCorFundo = document.getElementById("txtCorFundo");
    let corFundo = txtCorFundo.value.toLowerCase();

    switch (corFundo) {
        case "azul":
            document.body.bgColor = "#0000ff";
            break;
        case "amarelo":
            document.body.bgColor = "#FFFF00";
            break;
        case "amarela":
            document.body.bgColor = "#FFFF00";
            break;
        case "rosa":
            document.body.bgColor = "#ffcbdb";
            break;
        case "vermelho":
            document.body.bgColor = "#ff0000";
            break;
        case "vermelha":
            document.body.bgColor = "#ff0000";
            break;
        case "preto":
            document.body.bgColor = "#000000";
            break;
        case "preta":
            document.body.bgColor = "#000000";
            break;
        case "pink":
            document.body.bgColor = "#ff0084";
            break;
        case "lilás":
            document.body.bgColor = "#C8A2C8";
            break;
        case "lilas":
            document.body.bgColor = "#C8A2C8";
            break;
        case "verde":
            document.body.bgColor = "#00ff00";
            break;
        case "marrom":
            document.body.bgColor = "#964B00";
            break;
        case "vinho":
            document.body.bgColor = "#722F37";
            break;
        case "violeta":
            document.body.bgColor = "#8F00FF";
            break;
        case "branco":
            document.body.bgColor = "#ffffff";
            break;
        case "branca":
            document.body.bgColor = "#ffffff";
            break;
        default:
            document.body.bgColor = "#ffffff";
            break;
    }
}

function colorirTexto() {
    let txtCorTexto = document.getElementById("txtCorTexto");
    let corTexto = txtCorTexto.value.toLowerCase();

    switch (corTexto) {
        case "azul":
            document.body.style.color = "#0000ff";
            break;
        case "amarelo":
            document.body.style.color = "#FFFF00";
            break;
        case "amarela":
            document.body.style.color = "#FFFF00";
            break;
        case "rosa":
            document.body.style.color = "#ffcbdb";
            break;
        case "vermelho":
            document.body.style.color = "#ff0000";
            break;
        case "vermelha":
            document.body.style.color = "#ff0000";
            break;
        case "preto":
            document.body.style.color = "#000000";
            break;
        case "preta":
            document.body.style.color = "#000000";
            break;
        case "pink":
            document.body.style.color = "#ff0084";
            break;
        case "lilás":
            document.body.style.color = "#C8A2C8";
            break;
        case "lilas":
            document.body.style.color = "#C8A2C8";
            break;
        case "verde":
            document.body.style.color = "#00ff00";
            break;
        case "marrom":
            document.body.style.color = "#964B00";
            break;
        case "vinho":
            document.body.style.color = "#722F37";
            break;
        case "violeta":
            document.body.style.color = "#8F00FF";
            break;
        case "branco":
            document.body.style.color = "#ffffff";
            break;
        case "branca":
            document.body.style.color = "#ffffff";
            break;
        default:
            document.body.style.color = "#000000";
            break;
    }
}

document.getElementById("txtCorFundo").addEventListener('keyup', function() {
    if (event.keyCode == 13) {
        colorirFundo();
    }
});

document.getElementById("txtCorTexto").addEventListener('keyup', function() {
    if (event.keyCode == 13) {
        colorirTexto();
    }
});