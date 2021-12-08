// // Exercícios de interpretação:
// 1.  Leia o código abaixo ===============================================================
    
//     
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }
    
    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    
    
//     a) O que vai ser impresso no console?
//     Resposta: 
//     Matheus Nachtergaele
//     Virginia Cavendish
//     {canal: "Globo", horario: "14h"}
    
// 2. Leia o código abaixo ================================================================
    
    
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    
    
//     a) O que vai ser impresso no console?
//     Resposta: 
//     {nome: "Juca", idade: 3, raca: "SRD"}
//     {nome: "Juba", idade: 3, raca: "SRD"}
//     {nome: "Jubo", idade: 3, raca: "SRD"}
    
//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//     Resposta: A sintaxe dos três pontos antes do nome de um objeto é para criar um novo objeto a partir de outro objeto, chamam de spread operator ou espalhamento.
    
// 3. Leia o código abaixo ================================================================
    
    
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    
    
//     a) O que vai ser impresso no console?
//     Resposta:
//     false
//     undefined
    
//     b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//     Resposta:
//     O valor impresso no console é false, pois a propriedade "backender" existe no objeto pessoa e é false. Já o segundo valor impresso no console é undefined, pois a propriedade "altura" não existe no objeto pessoa. 

// Exercícios de escrita de código:

// 1. =====================================================================================

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:    
// Exemplo de entrada:

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 // Exemplo de saída
 "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

//  Resposta:

const nomeEapelido = {
    nome: "Fillipe",
    apelidos: ["Flip", "Forró", "Cinza"]
}

function nomeComApelido(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
}

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

// Resposta:

const novosApelidos = {...nomeEapelido, apelidos: ["Lipe", "Filé", "Roliúde"]}

nomeComApelido(novosApelidos);

// 2. =====================================================================================

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// Resposta A:

const pessoa1 = {
    nome: "Pedro",
    idade: 23,
    profissao: "Advogado"
}

const pessoa2 = {
    nome: "Fillipe",
    idade: 29,
    profissao: "Programador"
}

// Resposta B:

function informacoesDoObjeto(objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

// 3. =====================================================================================

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.

// Resposta A:

var carrinho = [];

// Resposta B:

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}

const fruta3 = {
    nome: "Morango",
    disponibilidade: true
}

// Resposta C:

function adicionarAoCarrinho(fruta) {
    carrinho.push(fruta)
}

adicionarAoCarrinho(fruta1);
adicionarAoCarrinho(fruta2);
adicionarAoCarrinho(fruta3);

// Resposta D:

console.log(carrinho);

// DESAFIOS: 

// 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

// Resposta:

function perguntarDados() {
    let nome = prompt("Qual é o seu nome?");
    let idade = prompt("Qual é a sua idade?");
    let profissao = prompt("Qual é a sua profissão?");
    let objeto = {nome, idade, profissao};

    console.log(objeto);
    console.log(typeof objeto);
}

// 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true

// Resposta: 
const filme1 = {
    ano: 2000,
    nome: "Star Wars"
}

const filme2 = {
    ano: 1999,
    nome: "Star Wars: A New Hope"
}

function compararFilmes(filme1, filme2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${Number(filme1.anoLancamento) < Number(filme2.anoLancamento)}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${Number(filme1.anoLancamento) === Number(filme2.anoLancamento)}`);
}

compararFilmes(filme1, filme2);

// 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.

// Resposta:

function frutaDisponibilidade(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade;
    return fruta;
} 

