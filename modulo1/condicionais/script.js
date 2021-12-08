// // Exercícios de interpretação de código:

// 1. Leia o código abaixo:

//     
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
//     
    
//     a) Explique o que o código faz. Qual o teste que ele realiza? 
//     Resposta A: O código verifica se o número é par ou impar, e imprime a mensagem "Passou no teste" ou "Não passou no teste".
    
//     b) Para que tipos de números ele imprime no console "Passou no teste"? 
//    Resposta B: Para números pares.
    
//     c) Para que tipos de números a mensagem é "Não passou no teste"? 
//     Resposta C: Para números ímpares, ou qualquer outro número que não seja par.
    
// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
//     
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//     
    
//     a) Para que serve o código acima?
//     Resposta A: Serve para mostrar o preço de uma fruta. Ele testa com switch o valor da variável fruta e imprime o preço.
    
//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//     Resposta B: O preço da fruta Maçã é R$ 2.25.
    
//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//     Resposta C: O preço da fruta Pêra é R$ 5. Pois tirando o break, o resto do código seria executado, e o preço seria 5.
    
// 3. Leia o código abaixo:
    
    
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    
    
//     a) O que a primeira linha está fazendo? 
//     Resposta A: A primeira linha está declarando uma variável numero, que recebe o valor digitado pelo usuário e converte para número.
    
//     b) Considere que um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//     Resposta B: Se o número for 10, a mensagem seria "Esse número passou no teste" e erro informando que a variável mensagem não foi declarada. Se o número for -10, a mensagem seria um erro informando que a variável mensagem não foi declarada.
    
//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//     Resposta C: Há um erro no console, pois a variável mensagem foi declarada dentro do bloco if, e não fora. Por conta do escopo, a variável mensagem não pode ser acessada fora do bloco if.

//  Exercícios de escrita de código:

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//     Resposta A: 
    
    let idade = prompt("Digite a sua idade.")

    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    idade = Number(idade)
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

    if (idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log ("Você não pode dirigir")
 }
    
// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
        
// Resposta 2:
    function saudacao(turno) {
        turno = prompt("Digite o turno do dia em que você estuda, M para matutino, V para vespertino ou N para noturno.").toLowerCase();
        if (turno == "m") {
            console.log("Bom dia!")
        } else if (turno == "v") {
            console.log("Boa tarde!")
        } else if (turno == "n") {
            console.log("Boa noite!")
        } else {
            console.log("Turno inválido")
        }
    }

    saudacao();

// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
    function saudacao(turno) {
        turno = prompt("Digite o turno do dia em que você estuda, M para matutino, V para vespertino ou N para noturno.").toLowerCase();
        switch (turno) {
            case "m":
                console.log("Bom dia!")
                break;
            case "v":
                console.log("Boa tarde!")
                break;
            case "n":
                console.log("Boa noite!")
                break;
            default:
                console.log("Turno inválido")
        }
    }

    saudacao();
        
// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

    function checaFilme(genero, preco) {
        genero = prompt("Digite o gênero do filme que você vai assistir, F para fantasia ou O para ação.").toLowerCase();
        preco = Number(prompt("Digite o preço do ingresso."))

        if (genero == "f" && preco < 15) {
            console.log("Bom filme!")
        } else {
            console.log("Escolha outro filme :(")
        }
    }

    checaFilme();

    // Desafios:

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.

function checaFilme(genero, preco) {
    genero = prompt("Digite o gênero do filme que você vai assistir, F para fantasia ou O para ação.").toLowerCase();
    preco = Number(prompt("Digite o preço do ingresso."))
    let lanchinho = prompt("Qual lanchinho você vai comprar?")

    if (genero == "f" && preco < 15) {
        switch (lanchinho) {
            case lanchinho[lanchinho.length - 1] == "o":
                console.log(`Bom filme! Aproveite o seu ${lanchinho}!`)
                break;
            default:
                console.log(`Bom filme! Aproveite a sua ${lanchinho}!`)
        }
    } else {
        console.log("Escolha outro filme :(")
    }
}

checaFilme();
    
        
    
// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar considerar o dólar 4,10.

// valor dos ingressos domésticos SF: SFcategoria1 = 1320, SFcategoria2 = 880, SFcategoria3 = 550, SFcategoria4 = 220;
// valor dos ingressos domésticos DT: DTcategoria1 = 660, DTcategoria2 = 440, DTcategoria3 = 330, DTcategoria4 = 170;
// valor dos ingressos domésticos FI: FIcategoria1 = 1980, FIcategoria2 = 1320, FIcategoria3 = 880, FIcategoria4 = 330;

// valor dos ingressos internacionais SF: SFcategoria1 = 5412, SFcategoria2 = 3608, SFcategoria3 = 2255, SFcategoria4 = 902;
// valor dos ingressos internacionais DT: DTcategoria1 = 2706, DTcategoria2 = 1804, DTcategoria3 = 1353, DTcategoria4 = 697;
// valor dos ingressos internacionais FI: FIcategoria1 = 8118, FIcategoria2 = 5412, FIcategoria3 = 3608, FIcategoria4 = 1353;


// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ preco unitário
// Valor total:  R$ valor total
    
function valorIngresso(nome, tipo, etapa, categoria, qtd) {
    nome = prompt("Digite seu nome completo.");
    tipo = prompt("Digite o tipo de jogo, IN para internacional e DO para doméstico.").toLowerCase();
    etapa = prompt("Digite a etapa do jogo, SF para semi-final, DT para decisão de terceiro lugar e FI para final.").toLowerCase();
    categoria = Number(prompt("Digite a categoria do jogo, 1, 2, 3 ou 4."));
    qtd = Number(prompt("Digite a quantidade de ingressos."));
    
    let ingressosDomesticos = {
        SF: {
            categoria1: 1320,
            categoria2: 880,
            categoria3: 550,
            categoria4: 220
        },
        DT: {
            categoria1: 660,
            categoria2: 440,
            categoria3: 330,
            categoria4: 170
        },
        FI: {
            categoria1: 1980,
            categoria2: 1320,
            categoria3: 880,
            categoria4: 330
        }
    }

    let ingressosInternacionais = {
        SF: {
            categoria1: 5412,
            categoria2: 3608,
            categoria3: 2255,
            categoria4: 902
        },
        DT: {
            categoria1: 2706,
            categoria2: 1804,
            categoria3: 1353,
            categoria4: 697
        },
        FI: {
            categoria1: 8118,
            categoria2: 5412,
            categoria3: 3608,
            categoria4: 1353
        }
    }

    if (tipo == "do") {
        switch (etapa) {
            case "sf":
                switch (categoria) {
                    case 1:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.SF.categoria1}
                        Valor total: R$ ${ingressosDomesticos.SF.categoria1 * qtd}`)
                        break;
                    case 2:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.SF.categoria2}
                        Valor total: R$ ${ingressosDomesticos.SF.categoria2 * qtd}`)
                        break;
                    case 3:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.SF.categoria3}
                        Valor total: R$ ${ingressosDomesticos.SF.categoria3 * qtd}`)
                        break;
                    case 4:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.SF.categoria4}
                        Valor total: R$ ${ingressosDomesticos.SF.categoria4 * qtd}`)
                        break;
                    default:
                        console.log("Categoria inválida.")
                        break;
                }
                break;
            case "dt":
                switch (categoria) {
                    case 1:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.DT.categoria1}
                        Valor total: R$ ${ingressosDomesticos.DT.categoria1 * qtd}`)
                        break;
                    case 2:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.DT.categoria2}
                        Valor total: R$ ${ingressosDomesticos.DT.categoria2 * qtd}`)
                        break;
                    case 3:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.DT.categoria3}
                        Valor total: R$ ${ingressosDomesticos.DT.categoria3 * qtd}`)
                        break;
                    case 4:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.DT.categoria4}
                        Valor total: R$ ${ingressosDomesticos.DT.categoria4 * qtd}`)
                        break;
                    default:
                        console.log("Categoria inválida.")
                        break;
                }
                break;
            case "fi":
                switch (categoria) {
                    case 1:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.FI.categoria1}
                        Valor total: R$ ${ingressosDomesticos.FI.categoria1 * qtd}`)
                        break;
                    case 2:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.FI.categoria2}
                        Valor total: R$ ${ingressosDomesticos.FI.categoria2 * qtd}`)
                        break;
                    case 3:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.FI.categoria3}
                        Valor total: R$ ${ingressosDomesticos.FI.categoria3 * qtd}`)
                        break;
                    case 4:
                        console.log(`---Dados da compra---
                        Nome do cliente: ${nome}
                        Tipo do jogo: ${tipo}
                        Etapa do jogo: ${etapa}
                        Categoria: ${categoria}
                        Quantidade de Ingressos: ${qtd} ingressos
                        ---Valores---
                        Valor do ingresso: R$ ${ingressosDomesticos.FI.categoria4}
                        Valor total: R$ ${ingressosDomesticos.FI.categoria4 * qtd}`)
                        break;
                    default:
                        console.log("Categoria inválida.")
                        break;
                }
                break;
            default:
                console.log("Tipo de jogo inválido.")
                break;
        }
    } else if (tipo == "in") {
        switch (etapa) {
            case "sf":
                switch (categoria) {
                    case 1:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.SF.categoria1}
                                    Valor total: R$ ${ingressosInternacionais.SF.categoria1 * qtd}`)
                        break;
                    case 2:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.SF.categoria2}
                                    Valor total: R$ ${ingressosInternacionais.SF.categoria2 * qtd}`)
                        break;
                    case 3:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.SF.categoria3}
                                    Valor total: R$ ${ingressosInternacionais.SF.categoria3 * qtd}`)
                        break;
                    case 4:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.SF.categoria4}
                                    Valor total: R$ ${ingressosInternacionais.SF.categoria4 * qtd}`)
                        break;
                    default:
                        console.log("Categoria inválida.")
                        break;
                }
                break;
            case "dt":
                switch (categoria) {
                    case 1:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.DT.categoria1}
                                    Valor total: R$ ${ingressosInternacionais.DT.categoria1 * qtd}`)
                        break;
                    case 2:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.DT.categoria2}
                                    Valor total: R$ ${ingressosInternacionais.DT.categoria2 * qtd}`)
                        break;
                    case 3:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.DT.categoria3}
                                    Valor total: R$ ${ingressosInternacionais.DT.categoria3 * qtd}`)
                        break;
                    case 4:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.DT.categoria4}
                                    Valor total: R$ ${ingressosInternacionais.DT.categoria4 * qtd}`)
                        break;
                    default:
                        console.log("Categoria inválida.")
                        break;
                }
                break;
            case "fi":
                switch (categoria) {
                    case 1:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.FI.categoria1}
                                    Valor total: R$ ${ingressosInternacionais.FI.categoria1 * qtd}`)
                        break;
                    case 2:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.FI.categoria2}
                                    Valor total: R$ ${ingressosInternacionais.FI.categoria2 * qtd}`)
                        break;
                    case 3:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.FI.categoria3}
                                    Valor total: R$ ${ingressosInternacionais.FI.categoria3 * qtd}`)
                        break;
                    case 4:
                        console.log(`---Dados da compra---
                                    Nome do cliente: ${nome}
                                    Tipo do jogo: ${tipo}
                                    Etapa do jogo: ${etapa}
                                    Categoria: ${categoria}
                                    Quantidade de Ingressos: ${qtd} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ ${ingressosInternacionais.FI.categoria4}
                                    Valor total: R$ ${ingressosInternacionais.FI.categoria4 * qtd}`)
                        break;
                    default:
                        console.log("Categoria inválida.")
                        break;
                }
                break;
            default:
                console.log("Tipo de jogo inválido.")
                break;
        }
    }

}

valorIngresso();