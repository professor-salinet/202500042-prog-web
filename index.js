var larguraPagina = window.innerWidth;
var alturaPagina = window.innerHeight;

const ifPagina = document.getElementById("ifPagina");

const navBarTop = document.getElementById("navBarTop");
var larguraNavBarTop = navBarTop.clientWidth;
var alturaNavBarTop = navBarTop.clientHeight;

const modal = document.getElementById("modal");
// const modalBootstrap = new bootstrap.Modal(modal);

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

    document.getElementById("cumprimento").innerHTML = cumprimento;
    document.getElementById("data").innerHTML = dtAtual;
    document.getElementById("horario").innerHTML = hrAtual;

    redimensionarIFrame();
}, 1000);

window.addEventListener('load', () => {
    redimensionarIFrame();
});

window.addEventListener('resize', () => {
    redimensionarIFrame();
});
