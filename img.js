var btnGirarHorario = document.getElementById("btnGirarHorario");
var btnGirarAntiHorario = document.getElementById("btnGirarAntiHorario");
var btnMoverDireita = document.getElementById("btnMoverDireita");
var btnMoverEsquerda = document.getElementById("btnMoverEsquerda");
var btnMoverBaixo = document.getElementById("btnMoverBaixo");
var btnMoverCima = document.getElementById("btnMoverCima");
var btnMoverAleatorio = document.getElementById("btnMoverAleatorio");

var img = document.getElementById("img");

var divImgTemp = document.getElementById("divImgTemp");
divImgTemp.style.display = "none";
divImgTemp.style.position = "absolute";

img.style.position = "absolute";
img.style.display = "block";

var larguraTelaTotal = window.innerWidth;
var alturaTelaTotal = window.innerHeight;

var centroTelaHorizontal = parseInt(larguraTelaTotal / 2);
var centroTelaVertical = parseInt(alturaTelaTotal / 2);

var larguraImg = 0;
var alturaImg = 0;

window.onload = centralizar;

var medida = "px";

function centralizar() {
    larguraTelaTotal = window.innerWidth;
    alturaTelaTotal = window.innerHeight;
    
    centroTelaHorizontal = parseInt(larguraTelaTotal / 2);
    centroTelaVertical = parseInt(alturaTelaTotal / 2);

    larguraImg = parseInt(img.width);
    alturaImg = parseInt(img.height);

    img.style.top = (centroTelaVertical - (alturaImg / 2)) + medida;
    img.style.left = (centroTelaHorizontal - (larguraImg / 2)) + medida;
}

function verificarLimitesImg() {
    let imgStyleLeft = parseInt(img.style.left.replace(medida, ""));
    let imgStyleTop = parseInt(img.style.top.replace(medida, ""));

    if ((imgStyleLeft + larguraImg) >= larguraTelaTotal) {
        img.style.left = (larguraTelaTotal - larguraImg) + medida;
    }

    if ((imgStyleTop + alturaImg) >= alturaTelaTotal) {
        img.style.top = (alturaTelaTotal - alturaImg) + medida;
    }

    if (imgStyleLeft < 0) {
        img.style.left = 0 + medida;
    }

    if (imgStyleTop < 0) {
        img.style.top = 0 + medida;
    }
}

// img.classList.add("img"); // esta linha adiciona a classe img (bootstrap) ao elemento img

img.classList.add("bg-dark"); // esta linha adiciona a classe "bg-dark" (cor escura do bootstrap) ao elemento img

// img.classList.add("img-fluid"); // esta linha adiciona a classe "img-fluid" (responsividade do bootstrap) ao elemento img

// img.classList.add("img-thumbnail"); // esta linha adiciona a classe "img-thumbnail" (modo "cartão" do bootstrap) ao elemento img


// img.classList.add("float-end"); // esta linha adiciona a classe "float-end" (alinhar a direita do bootstrap) ao elemento img

// img.classList.add("float-start"); // esta linha adiciona a classe "float-start" (alinhar a esquerda do bootstrap) ao elemento img

img.classList.add("rounded"); // esta linha adiciona a classe "rounded" (arredondar cantos do bootstrap) ao elemento img

// img.classList.add("mx-auto"); // esta linha adiciona a classe "mx-auto" (margem automática do bootstrap) ao elemento img

// img.classList.add("d-block"); // esta linha adiciona a classe "d-block" (exibir em bloco [display: block;] do bootstrap) ao elemento img

// img.classList.remove("img"); // esta linha remove a classe img (bootstrap) ao elemento img

var rotacao = 0;

function girarHorario() {
    let txtGraus = document.getElementById("txtGraus");
    let graus = parseInt(txtGraus.value);
    
    if (isNaN(graus)) {
        rotacao++;
    } else {
        if (graus <= 0) {
            alert("Para girar no sentido horário, é necessário digitar um número maior que zero");
            return;
        }

        if (graus > 360) {
            txtGraus.value = 360;
        }
        
        let rotacaoTemp = rotacao + graus;

        if (rotacaoTemp <= 360) {
            rotacao += graus;
        } else {
            rotacao = rotacaoTemp - 360;
        }
    }

    img.style.transform = "rotate(" + rotacao + "deg)";
}

function girarAntiHorario() {
    let txtGraus = document.getElementById("txtGraus");
    let graus = parseInt(txtGraus.value);
    
    if (isNaN(graus)) {
        rotacao--;
    } else {
        if (graus >= 0) {
            alert("Para girar no sentido anti-horário, é necessário digitar um número menor que zero");
            return;
        }

        if (graus < -360) {
            txtGraus.value = -360;
        }
        
        let rotacaoTemp = rotacao + graus;

        if (rotacaoTemp >= -360) {
            rotacao += graus;
        } else {
            rotacao = rotacaoTemp - -360;
        }
    }

    img.style.transform = "rotate(" + rotacao + "deg)";
}

var esquerda = 0;

function moverDireita() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);

    esquerda = parseInt(img.style.left.replace(medida, ""));

    if (isNaN(pixels)) {
        esquerda++;
    } else {
        esquerda += pixels;
    }

    img.style.left = esquerda + medida;
    verificarLimitesImg();
}

function moverEsquerda() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);

    esquerda = parseInt(img.style.left.replace(medida, ""));

    if (isNaN(pixels)) {
        esquerda--;
    } else {
        esquerda -= pixels;
    }

    img.style.left = esquerda + medida;
    verificarLimitesImg();
}

var topo = 0;

function moverCima() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);

    topo = parseInt(img.style.top.replace(medida, ""));

    if (isNaN(pixels)) {
        topo--;
    } else {
        topo -= pixels;
    }

    img.style.top = topo + medida;
    verificarLimitesImg();
}

function moverBaixo() {
    let txtPixels = document.getElementById("txtPixels");
    let pixels = parseInt(txtPixels.value);

    topo = parseInt(img.style.top.replace(medida, ""));

    if (isNaN(pixels)) {
        topo++;
    } else {
        topo += pixels;
    }

    img.style.top = topo + medida;
    verificarLimitesImg();
}

function moverAleatorio() {
    let posicaoHorizontalAleatoria = Math.random() * 1000;
    let posicaoVerticalAleatoria = Math.random() * 1000;

    console.log("posicaoHorizontalAleatoria:", posicaoHorizontalAleatoria);
    console.log("posicaoVerticalAleatoria:", posicaoVerticalAleatoria);

    if (posicaoHorizontalAleatoria > larguraTelaTotal) {
        posicaoHorizontalAleatoria = larguraTelaTotal - (larguraImg / 2);
    }

    if (posicaoVerticalAleatoria > alturaTelaTotal) {
        posicaoVerticalAleatoria = alturaTelaTotal - (alturaImg / 2);
    }

    img.style.top = posicaoVerticalAleatoria + medida;
    img.style.left = posicaoHorizontalAleatoria + medida;
    verificarLimitesImg();
}

btnGirarHorario.addEventListener('keydown', function(event) {
    console.log("keyCode:", event.keyCode); // mostra no console o código da tecla teclada.
    let codigoTecla = event.keyCode; // declaração da variável codigoTecla, a qual receberá o códigoda tecla teclada.
    if (codigoTecla == 13 || codigoTecla == 32) { // se teclou/pressionou (e se manter pressionado) Enter ou Barra de Espaço
        girarHorario(); // executar a função girarHorario().
    }
});

window.addEventListener('keydown', function(event) {
    // console.log("keyCode:", event.keyCode); // mostra no console o código da tecla teclada.
    // console.log("abaixo do keycode");
    // console.log("document.activeElement:", document.activeElement);
    let elementoAtivo = document.activeElement;
    let codigoTecla = event.keyCode; // declaração da variável codigoTecla, a qual receberá o códigoda tecla teclada.
    switch (codigoTecla) {
        case 37:
            moverEsquerda();
            break;
        case 38:
            moverCima();
            break;
        case 39:
            moverDireita();
            break;
        case 40:
            moverBaixo();
            break;
        case 65:
            girarAntiHorario();
            break;
        case 72:
            girarHorario();
            break;
        case 77:
            moverAleatorio();
            break;
        case 13:
            switch (elementoAtivo.id) {
                case "btnGirarHorario":
                    girarHorario();
                    break;
                case "btnGirarAntiHorario":
                    girarAntiHorario();
                    break;
                case "btnMoverDireita":
                    moverDireita();
                    break;
                case "btnMoverEsquerda":
                    moverEsquerda();
                    break;
                case "btnMoverCima":
                    moverCima();
                    break;
                case "btnMoverBaixo":
                    moverBaixo();
                    break;
                case "btnMoverAleatorio":
                    moverAleatorio();
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
});

var elementoClicado = null;
var posicaoMouseX = 0;
var posicaoMouseY = 0;
var elementoTemp;

(function() { // execução em tempo real das linhas de código do bloco de função inominada
    document.onmousedown = handleMouseDown;
    function handleMouseDown(event) {
        try {
            event = event || window.event; // IE-ism
            if (event.target.tagName.toLowerCase() == "img") {
                elementoClicado = event.target;
                elementoClicado.style.display = "none";
                let imgTemp = document.createElement('img'); // <img />
                imgTemp.src = "./" + elementoClicado.src.replace(/^.*[\\/]/, ''); // <img src="./imagem.png" />
                imgTemp.classList.add("bg-dark");
                imgTemp.classList.add("rounded");
                divImgTemp.appendChild(imgTemp);
                divImgTemp.style.display = "block";
                return false;
            }
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmousedown. Veja o erro: ", e);
        }
    }

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        try {
            var eventDoc,
            doc,
            body;
            
            event = event || window.event; // IE-ism
            
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }

            posicaoMouseX = event.pageX;
            posicaoMouseY = event.pageY;

            divImgTemp.style.left = (posicaoMouseX - (larguraImg / 2)) + medida;
            divImgTemp.style.top = (posicaoMouseY - (alturaImg / 2)) + medida;

            return false;
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmousemove. Veja o erro: ", e);
        }
    }

    document.onmouseup = handleMouseUp;
    function handleMouseUp(event) {
        try {
            if (elementoClicado) {
                if (elementoClicado.tagName.toLowerCase() == "img") {
                    img.style.left = posicaoMouseX - (larguraImg / 2) + medida;
                    img.style.top = posicaoMouseY - (alturaImg / 2) + medida;
                    img.style.display = "block";
                    verificarLimitesImg();
                }
            }
            elementoClicado = null;
            divImgTemp.innerHTML = '';
            divImgTemp.style.display = "none";
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmouseup. Veja o erro: ", e);
        }
    }
})();