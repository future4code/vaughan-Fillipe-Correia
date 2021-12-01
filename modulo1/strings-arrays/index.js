// Exercícios de interpretação
// 1. ===============================================================

// let array
// console.log('a. ', array)
// Irá imprimir: a. undefined, pois foi declarada uma variável sem valores.

// array = null
// console.log('b. ', array)
// Irá imprimir: b. null, pois a variável array foi redeclarada como Null.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// Irá imprimir: c. 11, pois a variável array foi redeclarada como uma array contendo 11 itens.

// let i = 0
// console.log('d. ', array[i])
// Irá imprimir: d. 3, pois i vale 0 e 0 representa a primeira posição do array.

// array[i+1] = 19
// console.log('e. ', array)
// Irá imprimir: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], pois a posição 1 do array foi declarada como 19.

// const valor = array[i+6]
// console.log('f. ', valor)
// Irá imprimir: f. 9, pois a variável valor foi declarada como sendo a posição 6 do array e a posição 6 do array é 9.

// 2. ===============================================================

// O valor impresso será: SUBI NUM ÔNIBUS EM MIRROCOS 27, pois o .toUpperCase deixa os caracteres em maiúsculo, o .replaceAll() troca todos os caracteres "a" por "i" e o .length mostra o tamanho da string ou array.

// Exercícios de escrita:
// 1. ===============================================================

let emailDoUsuario = prompt("Digite o seu email.");
let nomeDoUsuario = prompt("Digite o seu nome.");

console.log(
  `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}!`
);

// 2. ===============================================================

let comidasPreferidas = [
  "estrogonofe",
  "pizza",
  "pastel",
  "frango assado",
  "cuscuz com charque",
];

// a)

console.log(comidasPreferidas);

// b)

// let arrayVertical = comidasPreferidas.join('\n');
// console.log(arrayVertical);
// console.log("Essas são as minhas comidas preferidas: ", ('\n' + arrayVertical));

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

// c)

let comidaPreferidaUsuario = prompt("Digite sua comida preferida");

comidasPreferidas[1] = comidaPreferidaUsuario;

console.log(comidasPreferidas);

// 3. ===============================================================

let listaDeTarefas = [];

let tarefa1 = prompt("Digite a primeira tarefa que deseja realizar no dia.");
let tarefa2 = prompt("Digite a segunda tarefa que deseja realizar no dia.");
let tarefa3 = prompt("Digite a terceira tarefa que deseja realizar no dia.");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

console.log(listaDeTarefas);

let tarefaIndice = Number(
  prompt(
    `Digite o número da tarefa que você já realizou hoje, 1 para ${tarefa1}, 2 para ${tarefa2} ou 3 para ${tarefa3}.`
  )
);

listaDeTarefas.splice(tarefaIndice - 1, 1);

console.log(listaDeTarefas);

// DESAFIO ==========================================================

// 1.

let frase = prompt("Digite uma frase.").split(" ");

console.log(frase);

// 2.

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

// let frutaEspecifica = "Abacaxi";

// frutas.find((frutas) => frutas === frutaEspecifica);
// acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

console.log(frutas.indexOf("Abacaxi"), frutas.length);
