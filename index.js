var larguraPagina = window.innerWidth;
var alturaPagina = window.innerHeight;

var ifPagina = document.getElementById("ifPagina");

var navBarTop = document.getElementById("navBarTop");
var larguraNavBarTop = navBarTop.clientWidth;
var alturaNavBarTop = navBarTop.clientHeight;

function mostrarPagina(url) {
    ifPagina.src = url;
}

function mostrarTamanhos() {
    console.clear();

    console.log("larguraPagina: ", larguraPagina);
    console.log("alturaPagina: ", alturaPagina);

    console.log("larguraNavBarTop: ", larguraNavBarTop);
    console.log("alturaNavBarTop: ", alturaNavBarTop);
}

function redimensionarIFrame() {
    larguraPagina = window.innerWidth;
    alturaPagina = window.innerHeight;

    larguraNavBarTop = navBarTop.clientWidth;
    alturaNavBarTop = navBarTop.clientHeight;

    ifPagina.width = larguraPagina;
    ifPagina.height = alturaPagina - alturaNavBarTop;

    // mostrarTamanhos();
}

window.setInterval(() => {
    const date = new Date();

    var cumprimento = "";
    if (date.getHours() >= 0 && date.getHours() <= 11) {
        cumprimento = "Bom dia!";
    }

    if (date.getHours() >= 12 && date.getHours() <= 17) {
        cumprimento = "Boa tarde!";
    }

    if (date.getHours() >= 18 && date.getHours() <= 23) {
        cumprimento = "Boa noite!";
    }

    var dtAtual = "Hoje é " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    var hrAtual = "Agora são " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById("cumprimento").innerText = cumprimento;
    document.getElementById("data").innerText = dtAtual;
    document.getElementById("horario").innerText = hrAtual;

    redimensionarIFrame();
}, 1000);

window.addEventListener('load', () => {
    redimensionarIFrame();
});

window.addEventListener('resize', () => {
    redimensionarIFrame();
});
