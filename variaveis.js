// Variáveis

var nomeDaVariavel = "Valor da Variável";

let nomeDaVariavelTemporaria = "Valor Temporário da Variável";

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variável";

console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1","vetor2","vetor3","vetor4","vetor5"];

// console.log("matriz, vetor1:", matriz[0]);

for (let i = 0; i < matriz.length; i++) {
    console.log("matriz[" + i + "]:", matriz[i]);
}

class NomeDoObjeto {
    constructor(parametroUm, parametroDois) {
        // this.parametroUm = "Valor Um";
        // this.parametroDois = "Valor Dois";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
    }
    metodoMostrarParametros(parametroUm, parametroDois) {
        // this.parametroUm = "Valor 1";
        // this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " + this.parametroDois;
    }
}
const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metodoMostrarParametros("um", "dois"));

class GuitarraEletrica {
    constructor(encordoamento, tarraxas, ponte, captadores, chaveDeSelecao, madeiraDoCorpo, madeiraDoBraco, trastes, roldanasDaCorreia, jackDeSaida, cor, tamanho, textura, quantidadeDeCasas, escudo) {
        this.encordoamento = encordoamento;
        this.tarraxas = tarraxas;
        this.ponte = ponte;
        this.captadores = captadores;
        this.chaveDeSelecao = chaveDeSelecao;
        this.madeiraDoCorpo = madeiraDoCorpo;
        this.madeiraDoBraco = madeiraDoBraco;
        this.trastes = trastes;
        this.roldanasDaCorreia = roldanasDaCorreia;
        this.jackDeSaida = jackDeSaida;
        this.cor = cor;
        this.tamanho = tamanho;
        this.textura = textura;
        this.quantidadeDeCasas = quantidadeDeCasas;
        this.escudo = escudo;
    }
    metodoMostrarParametros(encordoamento, tarraxas, ponte, captadores, chaveDeSelecao, madeiraDoCorpo, madeiraDoBraco, trastes, roldanasDaCorreia, jackDeSaida, cor, tamanho, textura, quantidadeDeCasas, escudo) {
        // console.log(arguments);
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i].trim().length > 0) {
                Object.keys(this)[i] = arguments[i];
            }
        }
        // console.log(Object.keys(this)[0]);
        Object.getOwnPropertyNames(this)[0] = "teste";
        console.log(Object.getOwnPropertyNames(this)[0]);
        // this.encordoamento = encordoamento;
        // this.tarraxas = tarraxas;
        // this.ponte = ponte;
        // this.captadores = captadores;
        // this.chaveDeSelecao = chaveDeSelecao;
        // this.madeiraDoCorpo = madeiraDoCorpo;
        // this.madeiraDoBraco = madeiraDoBraco;
        // this.trastes = trastes;
        // this.roldanasDaCorreia = roldanasDaCorreia;
        // this.jackDeSaida = jackDeSaida;
        // this.cor = cor;
        // this.tamanho = tamanho;
        // this.textura = textura;
        // this.quantidadeDeCasas = quantidadeDeCasas;
        // this.escudo = escudo;
        return encordoamento + 
        " - " + 
        tarraxas + 
        " - " + 
        ponte + 
        " - " + 
        captadores + 
        " - " + 
        chaveDeSelecao + 
        " - " + 
        madeiraDoCorpo + 
        " - " + 
        madeiraDoBraco + 
        " - " + 
        trastes + 
        " - " + 
        roldanasDaCorreia + 
        " - " + 
        jackDeSaida + 
        " - " + 
        cor + 
        " - " + 
        tamanho + 
        " - " + 
        textura + 
        " - " + 
        quantidadeDeCasas + 
        " - " + 
        escudo;
    }
}
const guitarraEletrica = new GuitarraEletrica("0.10","com trava","tremolo");
console.log("GuitarraEletrica:", guitarraEletrica.metodoMostrarParametros("cordas"));
