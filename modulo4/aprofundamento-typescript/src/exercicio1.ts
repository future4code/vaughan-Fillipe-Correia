// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// Resposta:
// Ocorreu um erro, pois a variável minhaString é do tipo string e não pode receber um número.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// Resposta: 
// Para criar uma variável que aceite mais de um tipo de valor, basta adicionar a palavra chave `|` ao final da declaração da variável.

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Resposta:

// type Pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// const pessoa1: Pessoa = {
//     nome: 'João',
//     idade: 20,
//     corFavorita: 'azul'
// }

// const pessoa2: Pessoa = {
//     nome: 'Maria',
//     idade: 25,
//     corFavorita: 'verde'
// }

// const pessoa3: Pessoa = {
//     nome: 'Pedro',
//     idade: 30,
//     corFavorita: 'vermelho'
// }

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum Cor {
    Vermelho,
    Verde,
    Azul
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cor
}

const pessoa1: Pessoa = {
    nome: 'João',
    idade: 20,
    corFavorita: Cor.Vermelho
}

console.log(pessoa1)




