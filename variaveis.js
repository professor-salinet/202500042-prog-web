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

// Adicionando vetores em uma matriz:

var matrizDeFrutas = ["Banana","Maçã","Mamão"];

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString());

// Removento vetores de uma matriz:

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã"); // Aqui é feita uma busca pelo texto "Maçã" e, se encontrado o texto, retorna o número do vetor na matriz, iniciando por 0

matrizDeFrutas.splice(indexadorDoVetor, 1); // aqui é retirado o vetor, ora antes encontrado na variável indexadorDoVetor, sendo o número 1 a indicação da quantidade de vetores; este mesmo método também é utilizdo para substituir vetores em uma matriz

// Criar uma matriz 3x3 e preenchê-la com zeros

let matriz = Array(3).fill().map(() => Array(3).fill(0));
console.log(matriz);

// Preencher uma matriz 3x3 com números sequenciais

let matriz = [];
let contador = 1;
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = contador++;
    }
}
console.log(matriz);

// Somar todos os elementos de uma matriz 3x3

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let soma = matriz.flat().reduce((acc, num) => acc + num, 0);
console.log("Soma:", soma);

// Encontrar o maior valor de uma matriz 3x3

let matriz = [
    [3, 5, 7],
    [1, 9, 2],
    [6, 4, 8]
];

let maior = Math.max(...matriz.flat());
console.log("Maior valor:", maior);

// Verificar se um número está na matriz

function encontrarNumero(matriz, numero) {
    return matriz.flat().includes(numero);
}

let matriz = [
    [10, 15, 20],
    [25, 30, 35],
    [40, 45, 50]
];

console.log(encontrarNumero(matriz, 30)); // true
console.log(encontrarNumero(matriz, 100)); // false

// Calcular a soma de cada linha da matriz

let matriz = [
    [2, 4, 6],
    [1, 3, 5],
    [7, 8, 9]
];

let somaLinhas = matriz.map(linha => linha.reduce((acc, num) => acc + num, 0));
console.log("Soma de cada linha:", somaLinhas);

// Calcular a soma de cada coluna da matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let somaColunas = matriz[0].map((_, coluna) => matriz.reduce((acc, linha) => acc + linha[coluna], 0));
console.log("Soma de cada coluna:", somaColunas);

// Multiplicar todos os elementos da matriz por um número

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let multiplicador = 2;
let novaMatriz = matriz.map(linha => linha.map(num => num * multiplicador));
console.log(novaMatriz);

// Criar a matriz identidade 3x3

let identidade = Array(3).fill().map((_, i) => 
    Array(3).fill().map((_, j) => (i === j ? 1 : 0))
);
console.log(identidade);

// Transpor uma matriz (trocar linhas por colunas)

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let transposta = matriz[0].map((_, coluna) => matriz.map(linha => linha[coluna]));
console.log("Matriz transposta:", transposta);

// Somando números

let a = 10;
let b = 5;

console.log(a + b);

// Concatenando strings

let primeiroNome = "Carlos";
let sobrenome = "Silva";

let nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);

// Calculando a média

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media);

// Convertendo tipos de variáveis

let numeroTexto = "20";
let numero = Number(numeroTexto);

console.log(numero + 10); // Deve imprimir 30

// Criando e alterando variáveis

let preco = 100;
console.log("Preço original:", preco);

preco = 80;
console.log("Preço com desconto:", preco);

// Operadores de incremento

let contador = 0;
contador++;
console.log(contador);
contador += 5;
console.log(contador);

// Verificando tipos de variáveis

let valor = "Hello";
console.log(typeof valor); // string

valor = 10;
console.log(typeof valor); // number

// Operação com módulo: Verifique se um número é par ou ímpar

let numeroTeste = 7;

if (numeroTeste % 2 === 0) {
    console.log("É par");
} else {
    console.log("É ímpar");
}

