const colors = require('./colors');

// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.


// const valor1 = Number(process.argv[2]);
// const operacao = process.argv[3];
// const valor2 = Number(process.argv[4]);
// const calcula = (valor1, operacao, valor2) => {
//     if (operacao === '+') {
//         return valor1 + valor2;
//     } else if (operacao === '-') {
//         return valor1 - valor2;
//     } else if (operacao === 'x') {
//         return valor1 * valor2;
//     } else if (operacao === '/') {
//         return valor1 / valor2;
//     } else {
//         return 'Operação inválida';
//     }
// }
// console.log(calcula(valor1, operacao, valor2));

// Desafio: Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um."

const valor1 = Number(process.argv[2]);
const operacao = process.argv[3];
const valor2 = Number(process.argv[4]);
const calcula = (valor1, operacao, valor2) => {
    if (process.argv.length < 5) {
        console.log('Esperava 3 parâmetros para realizar o calculo, porém recebi menos parâmetos do que esperado.');
    }
    else if (isNaN(valor1) || isNaN(valor2)) {
        console.log('Esperava um número para os valores.');
    } else {
        if (operacao === '+') {
            return valor1 + valor2;
        } else if (operacao === '-') {
            return valor1 - valor2;
        } else if (operacao === 'x') {
            return valor1 * valor2;
        } else if (operacao === '/') {
            return valor1 / valor2;
        }
    }
}

// console.log(calcula(valor1, operacao, valor2));

// Desafio 2: Volte nos exercícios 1 e 2 e faça com que o texto impresso no terminal (usandoconsole.log) seja colorido.

console.log(colors.red + calcula(valor1, operacao, valor2) + colors.reset);