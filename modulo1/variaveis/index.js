// Exercícios de interpretação
// 1. Será impresso 10 5
// 2. Será impresso 10 10 10
// 3. O programa irá criar um alert informando a divisão das horas trabalhadas pelo ganho diário e mostrar quanto o usuário ganha por hora de trabalho. A variável b pode ser horasTrabalhadasPorDia e a variável t pode ser salarioPorDia.

// Exercicios de escrita

// 1. ======================================================

let nome;
let idade;

console.log(typeof(nome));
console.log(typeof(idade));

// O Undefined foi impresso pois as variáveis não têm um valor, então não são de nenhum tipo específico, não são strings, números ou booleanos, são variáveis sem definição. 

nome = prompt("Digite seu nome.");
idade = prompt("Digite sua idade.");

console.log(typeof(nome));
console.log(typeof(idade));

// O typeof entregou dois valores String, pois quando usamos o prompt para pegar um valor do usuário, esse valor sempre vem como uma String. 

console.log(`Olá ${nome}, você tem ${idade} anos.`)

// ou console.log("Olá " + nome + ", você tem " + idade + " anos.");

// 2. ======================================================

let pergunta1 = prompt("Você gosta de programar?");
let pergunta2 = prompt("Você gosta de viajar?");
let pergunta3 = prompt("Você gosta de jiló?");

let resposta1 = "- " + pergunta1;
let resposta2 = "- " + pergunta2;
let resposta3 = "- " + pergunta3;

console.log("Você gosta de programar? " + resposta1);
console.log("Você gosta de viajar? " + resposta2);
console.log("Você gosta de jiló? " + resposta3);

// 3. ======================================================

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// DESAFIO =================================================

// let numero1 = prompt("Digite o primeiro número");
// let numero2 = prompt("Digite o segundo número");

// let x = Number(numero1) + Number(numero2);
// let y = Number(numero1) * Number(numero2);

// console.log(x);
// console.log(y);
