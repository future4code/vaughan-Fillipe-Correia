// Exercícios de interpretação de código:

// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
//     
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
//     
//Resposta: O código está fazendo um loop que soma os valores de 0 a 4. O resultado impresso no console é o valor de 10.

// 2. Leia o código abaixo:
    
//     
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    
//     a) O que vai ser impresso no console?
//Resposta: O código imprime os números maiores que 18.
    
//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//    Resposta: Sim, poderia usar o `for...of...` para acessar o índice de cada elemento da lista. Exemplo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(`O índice do numero ${numero} é: ${lista.indexOf(numero)}`)
//   }

    
// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
//     
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

// Resposta: Enquanto a quantidade atual for menor que a quantidade total, o código imprime uma linha com a quantidade de asteriscos igual a quantidade atual e incrementa a quantidade atual.
    
// Exercícios de escrita de código:

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

    let quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"));
    
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    if(quantidadeBichinhos === 0){
        console.log("Que pena! Você pode adotar um pet!");
    
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.

    }else if(quantidadeBichinhos > 0){
        let nomesBichinhos = prompt("Digite os nomes dos bichinhos de estimação, um por um.");
        let nomesBichinhosArray = nomesBichinhos.split(" ");
        

     
//     c) Por fim, imprima o array com os nomes dos bichinhos no console

        console.log(nomesBichinhosArray);
    
// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
//     a) Escreva um programa que **imprime** cada um dos valores do array original.

    function imprimirArray(arrayOriginal){
        for(let i = 0; i < arrayOriginal.length; i++){
            console.log(arrayOriginal[i]);
        }
    }
    
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

    function imprimirArrayDivididosPor10(arrayOriginal){
        for(numeros of arrayOriginal){
            console.log(numeros/10);
        }
    }
    
//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

    function criarNovoArrayComNumerosPares(arrayOriginal){
        let arrayNova = [];
        for(numeros of arrayOriginal){
            if(numeros % 2 === 0){
                arrayNova.push(numeros);
            }
        }
        console.log(arrayNova);
    }
    
//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

function criarNovoArrayComString(arrayOriginal){
    let arrayNova = [];
    for(elemento of arrayOriginal){
        arrayNova.push(`O elemento do índex ${arrayOriginal.indexOf(elemento)} é: ${elemento}`);
    }
    console.log(arrayNova);
}
    
//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.

    function imprimirMaiorEMenor(arrayOriginal){
        let maiorNumero = arrayOriginal[0];
        let menorNumero = arrayOriginal[0];

        for(elemento of arrayOriginal){
            if(elemento > maiorNumero){
                maiorNumero = elemento;
            }
            if(elemento < menorNumero){
                menorNumero = elemento;
            }
        }
        console.log(`O maior número é ${maior} e o menor número é ${menor}`);
    }

imprimirMaiorEMenor(arrayOriginal);

// Desafios:

// 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
    
//     Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:
    
    
//     Vamos jogar!
//     O número chutado foi: 3
//     Errrrrrrrou, é maior
//     O número chutado foi: 18
//     Errrrrrrrou, é menor
//     O número chutado foi: 15
//     Errrrrrrrou, é menor
//     O número chutado foi: 11
//     Acertou!!
//     O número de tentativas foi: 4 
    
    
    
//     Um resumo das funcionalidades são:
    
//     a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

    let numeroEscolhido = Number(prompt("Escolha um número"));
    
//     b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

    let numeroChutado = Number(prompt("Chute um número"));
    
    
//     - O número chutado, com a mensagem: `O número chutado foi: <número>`

    console.log(`O número chutado foi: ${numeroChutado}`);

//     - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

    if(numeroEscolhido > numeroChutado){
        console.log("Errou. O número escolhido é maior");
    }else if(numeroEscolhido < numeroChutado){
        console.log("Errou. O número escolhido é menor");
    
//     c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

let numeroEscolhido = Number(prompt("Escolha um número"));
console.log(`Vamos jogar!`);
let numeroChutado = Number(prompt("Chute um número"));
let tentativas = 0;

for(let i = 0; i < 10; i++){
    if(numeroEscolhido > numeroChutado){
        console.log("Errou. O número escolhido é maior");
        numeroChutado = Number(prompt("Chute um número"));
        tentativas++;

    }else if(numeroEscolhido < numeroChutado){
        console.log("Errou. O número escolhido é menor");
        numeroChutado = Number(prompt("Chute um número"));
        tentativas++;
    }
}
console.log("Acertou");
console.log(`O número de tentativas foi: ${tentativas}`);

// 2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
    
//     Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**
    
// Resposta:

let numeroEscolhido = Math.floor(Math.random() * 100);
console.log(`Vamos jogar!`);
let numeroChutado = Number(prompt("Chute um número"));
let tentativas = 0;

for(let i = 0; i < 10; i++){
    if(numeroEscolhido > numeroChutado){
        console.log("Errou. O número escolhido é maior");
        numeroChutado = Number(prompt("Chute um número"));
        tentativas++;

    }else if(numeroEscolhido < numeroChutado){
        console.log("Errou. O número escolhido é menor");
        numeroChutado = Number(prompt("Chute um número"));
        tentativas++;
    }
}
console.log("Acertou");
console.log(`O número de tentativas foi: ${tentativas}`);

// Fazer a alteração foi fácil, já que só uma variável precisou ser alterada. O problema foi ter que procurar o método para sortear um número aleatório.