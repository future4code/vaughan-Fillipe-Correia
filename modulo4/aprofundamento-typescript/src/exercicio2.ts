// Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros:

// Resposta: Entradas: numeros (Array<number>) Saídas: estatisticas (object)


function obterEstatisticas(numeros: Array<number>) {
    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas

}

console.log(obterEstatisticas([1, 2, 3, 4, 5]))

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas:

// Resposta: numeros (Array<number>), numerosOrdenados (Array<number>), soma (number), estatisticas (object)

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// type amostraDados = {
//     numeros: Array<number>
//     obterEstatisticas: () => object
// }

// let Amostra: amostraDados = {

//     numeros: [1, 2, 3, 4, 5],
//     obterEstatisticas: function () {
//         const numerosOrdenados = this.numeros.sort(
//             (a: number, b: number) => a - b
//         )

//         let soma: number = 0

//         for (let num of this.numeros) {
//             soma += num
//         }

//         const estatisticas: object = {
//             maior: numerosOrdenados[this.numeros.length - 1],
//             menor: numerosOrdenados[0],
//             media: soma / this.numeros.length

//         }

//         return estatisticas

//     }
// }

// console.log(Amostra.obterEstatisticas())



