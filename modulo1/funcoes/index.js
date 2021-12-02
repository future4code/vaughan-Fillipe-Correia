// Exercícios de interpretação:

// 1. =============================================================================

// a) Vai ser impresso: 10 e 50, pois a função retorna a variável, no caso, 10 e 50 multiplicados por 5.

// b) No console irá aparecer apenas o 50, pois foi a última chamada dessa função e ela dá um return e não um console.log.

// 2. =============================================================================

// a) Essa função recebe texto como parâmetro, retorna o texto argumento todo em minúsculo e responde com um booleano se existe a palavra "cenoura" dentro do texto em minúsculo.

// b)   i. true
//      ii. true
//      iii. true

// obs: pois independente de como a palavra esteja escrita, será convertida para minúsculo e o .includes irá achar a palavra.

// Exercícios de escrita:

// 1. =============================================================================

// a) 

let imprimeAboutMe = () => {
    console.log("Olá, meu nome é Fillipe, tenho 29 anos, moro em Caruaru-PE e eu sou um futuro Dev!");
}

imprimeAboutMe();

// b) 

function unifier(nome, idade, cidade, profissao) {
    nome = prompt("Digite o seu nome.");
    idade = Number(prompt("Digite a sua idade em números."));
    cidade = prompt("Digite a sua cidade.");
    profissao = prompt("Digite a sua profissão.");

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

unifier();

// 2. =============================================================================

// a) 

function sum(n1, n2) {
    return n1 + n2;
}

sum(10, 5);

// b)

function isBigger(n1, n2){
    return n1 >= n2;
}

isBigger(10, 5);

// c)

function isEven(number){
    return number % 2 === 0;
}

isEven(5);

// d)

function howManyLetters(text){
    text = prompt("Digite uma frase");
    console.log(text.length, text.toLowerCase());
}

howManyLetters();

// 3. =============================================================================

function sum(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

let numero1 = Number(prompt("Digite um número."));
let numero2 = Number(prompt("Digite outro número."));

sum(numero1, numero2);

subtract(numero1, numero2);

multiply(numero1, numero2);

divide(numero1, numero2);

console.log("Números informados: " + numero1 + " e " + numero2);
console.log("Soma: " + sum(numero1, numero2));
console.log("Subtração: " + subtract(numero1, numero2));
console.log("Multiplicação: " + multiply(numero1, numero2));
console.log("Divisão: " + divide(numero1, numero2));

// DESAFIO:

// 1. =============================================================================

let arrowFunction1 = (parametro) => {
    console.log(parametro);
}

let arrowFunction2 = (parametro1, parametro2) => {
    arrowFunction1(parametro1+parametro2);
}

console.log(arrowFunction2(10, 5));

// 2. =============================================================================

function pitagoras(cateto1, cateto2){
    return Math.sqrt(cateto1*cateto2 + cateto2*cateto2);
}
console.log(pitagoras(3, 4));

// OU

function pitagoras2(cateto1, cateto2){
    return Math.hypot(cateto1, cateto2);
}

console.log(pitagoras2(3, 4));