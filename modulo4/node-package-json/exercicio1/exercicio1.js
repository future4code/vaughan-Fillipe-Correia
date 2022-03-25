const colors = require('./colors');

// a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// Resposta: Utilizamos o process.argv para acessar os parâmetros passados na linha de comando para o Node.

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// "Olá, (Nome)! Você tem (sua idade) anos."

// const nome = process.argv[2];
// const idade = process.argv[3];
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

// const nome = process.argv[2];
// const idade = Number(process.argv[3]);
// const idadeMaisSeteAnos = idade + 7;
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSeteAnos} anos.`);

// Desafio: Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um."

const nome = process.argv[2];
const idade = Number(process.argv[3]);
const idadeMaisSeteAnos = idade + 7;
const verificaParametros = () => {
    if (process.argv.length < 4) {
        console.log('Esperava 2 parâmetros só recebi um.');
    }
    else if (isNaN(idade)) {
        console.log('Esperava um número para a idade.');
    }
    else {
        console.log(colors.red + `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSeteAnos} anos.`);
    }
}
verificaParametros();



