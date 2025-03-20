var btnGirarHorario = document.getElementById("btnGirarHorario"); // declaração da variável btnGirarHorario que recebe o elemento com id btnGirarHorario
var btnGirarAntiHorario = document.getElementById("btnGirarAntiHorario"); // declaração da variável btnGirarAntiHorario que recebe o elemento com id btnGirarAntiHorario
var btnMoverDireita = document.getElementById("btnMoverDireita"); // declaração da variável btnMoverDireita que recebe o elemento com id btnMoverDireita
var btnMoverEsquerda = document.getElementById("btnMoverEsquerda"); // declaração da variável btnMoverEsquerda que recebe o elemento com id btnMoverEsquerda
var btnMoverBaixo = document.getElementById("btnMoverBaixo"); // declaração da variável btnMoverBaixo que recebe o elemento com id btnMoverBaixo
var btnMoverCima = document.getElementById("btnMoverCima"); // declaração da variável btnMoverCima que recebe o elemento com id btnMoverCima
var btnMoverAleatorio = document.getElementById("btnMoverAleatorio"); // declaração da variável btnMoverAleatorio que recebe o elemento com id btnMoverAleatorio

var img = document.getElementById("img"); // declaração da variável img que recebe o elemento com id img

var divImgTemp = document.getElementById("divImgTemp"); // declaração da variável divImgTemp que recebe o elemento com id divImgTemp
divImgTemp.style.display = "none"; // define o valor "none" do atributo "display" do estilo da divImgTemp
divImgTemp.style.position = "absolute"; // define o valor "absolute" do atributo "position" do estilo da divImgTemp

img.style.position = "absolute"; // define o valor "absolute" do atributo "position" do estilo da img
img.style.display = "block"; // define o valor "block" do atributo "display" do estilo da img

var larguraTelaTotal = window.innerWidth; // declaração da variável larguraTelaTotal que recebe o tamanho total da largura da página
var alturaTelaTotal = window.innerHeight; // declaração da variável alturaTelaTotal que recebe o tamanho total da altura da página

var centroTelaHorizontal = parseInt(larguraTelaTotal / 2); // declaração da variável centroTelaHorizontal que recebe, convertido em número inteiro, o valor da variável larguraTelaTotal dividido por dois
var centroTelaVertical = parseInt(alturaTelaTotal / 2); // declaração da variável centroTelaVertical que recebe, convertido em número inteiro, o valor da variável alturaTelaTotal dividido por dois

var larguraImg = 0; // declaração da variável larguraImg que recebe o valor 0
var alturaImg = 0; // declaração da variável alturaImg que recebe o valor 0

window.onload = centralizar; // comando que programa, ao carregar a janela/página e todos os seus respectivos elementos (somente após isso), chamar a função centralizar

var medida = "px"; // declaração da variável medida que recebe o valor "px", para uso nas variáveis que precisarão adicionar o texto "px" ao final dos valores das mesmas

function centralizar() { // declaração da função centralizar, que vai centralizar a imagem na página
    larguraTelaTotal = window.innerWidth; // atribuição do valor "window.innerWidth" (largura total da página na tela) na variável larguraTelaTotal
    alturaTelaTotal = window.innerHeight; // atribuição do valor "window.innerHeight" (altura total da página na tela) na variável alturaTelaTotal
    
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

    let divImgStyleLeft = parseInt(divImgTemp.style.left.replace(medida, ""));
    let divImgStyleTop = parseInt(divImgTemp.style.top.replace(medida, ""));

    if ((divImgStyleLeft + larguraImg) >= larguraTelaTotal) {
        divImgTemp.style.left = (larguraTelaTotal - larguraImg) + medida;
    }

    if ((divImgStyleTop + alturaImg) >= alturaTelaTotal) {
        divImgTemp.style.top = (alturaTelaTotal - alturaImg) + medida;
    }

    if (divImgStyleLeft < 0) {
        divImgTemp.style.left = 0 + medida;
    }

    if (divImgStyleTop < 0) {
        divImgTemp.style.top = 0 + medida;
    }
}


img.classList.add("bg-dark"); // esta linha adiciona a classe "bg-dark" (cor escura do bootstrap) ao elemento img

img.classList.add("rounded"); // esta linha adiciona a classe "rounded" (arredondar cantos do bootstrap) ao elemento img

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
    let posicaoHorizontalAleatoria = Math.random() * larguraTelaTotal;
    let posicaoVerticalAleatoria = Math.random() * alturaTelaTotal;

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

window.addEventListener('keydown', function(event) {
    // console.log("keyCode:", event.keyCode); // mostra no console o código da tecla teclada.
    // console.log("document.activeElement:", document.activeElement); // mostra o elemento ativo/focado/clicado da página
    let elementoAtivo = document.activeElement;
    let codigoTecla = event.keyCode; // declaração da variável codigoTecla, a qual receberá o códigoda tecla teclada.
    switch (codigoTecla) { // ativa o "interruptor" que tiver o código da tecla respectivo
        case 37: // tecla Seta pra Esquerda
            moverEsquerda();
            break;
        case 38: // tecla Seta pra Cima
            moverCima();
            break;
        case 39: // tecla Seta pra Direita
            moverDireita();
            break;
        case 40: // tecla Seta pra Baixo
            moverBaixo();
            break;
        case 65: // tecla A
            girarAntiHorario();
            break;
        case 67: // Tecla C
            centralizar();
            break;
        case 72: // tecla H
            girarHorario();
            break;
        case 77: // tecla M
            moverAleatorio();
            break;
        case 13: // tecla Enter (múltiplos cases)
        case 32: // tecla Barra de Espaço (múltiplos cases)
            switch (elementoAtivo.id) { // ativa o "interruptor" que tiver o id respectivo
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

            verificarLimitesImg();

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