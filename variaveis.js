// Variáveis

var nomeDaVariavel = "Valor da Variável";

let nomeDaVariavelTemporaria = "Valor Temporário da Variável";

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variável";

console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1","vetor2","vetor3","vetor4","vetor5"];

console.log("matriz, vetor1:", matriz[0]);

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

const parametros = [
    {id: 0, value: "encordoamento", char: "a"},
    {id: 1, value: "tarraxas", char: "b"},
    {id: 2, value: "ponte", char: "c"},
    {id: 3, value: "captadores", char: "d"},
    {id: 4, value: "chaveDeSelecao", char: "e"},
    {id: 5, value: "madeiraDoCorpo", char: "f"},
    {id: 6, value: "madeiraDoBraco", char: "g"},
    {id: 7, value: "trastes", char: "h"},
    {id: 8, value: "roldanasDaCorreia", char: "i"},
    {id: 9, value: "jackDeSaida", char: "j"},
    {id: 10, value: "cor", char: "k"},
    {id: 11, value: "tamanho", char: "l"},
    {id: 12, value: "textura", char: "m"},
    {id: 13, value: "quantidadeDeCasas", char: "n"},
    {id: 14, value: "escudo", char: "o"}
];

class GuitarraEletrica {
    constructor(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) {
        for (let i = 0; i < parametros.length; i++) {
            if (typeof arguments[i] != "undefined") {
                Object.defineProperty(this, parametros[i].value, {value:arguments[i]});
                if (arguments[i].trim().length > 0) {
                    // Object.keys(this)[i] get the property name of object by index key
                    // arguments[i]; // get the value of arguments by index number
                }
            }
        }
    }
    metodoMostrarParametros() {
        let textoRetorno = [];
        for (let i = 0; i < parametros.length; i++) {
            if(typeof this[parametros[i].value] != "undefined") {
                textoRetorno.push(this[parametros[i].value]);
            }
        }
        return textoRetorno.toString();
    }
}
const guitarraEletrica = new GuitarraEletrica("0.10","com trava","tremolo");
console.log("GuitarraEletrica:", guitarraEletrica.metodoMostrarParametros());
