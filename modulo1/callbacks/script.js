// Exercícios de interpretação de código:

// 1.  Leia o código abaixo
    
    
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })
    
    
    // a) O que vai ser impresso no console?
    // Resposta: Será impresso no console um objeto com todas as propriedades do array, e o index do array.
    
// 2. Leia o código abaixo
    
    
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    
    console.log(novoArrayB)
    
    
    // a) O que vai ser impresso no console?
    // Resposta: Será impresso no console um array com todos os nomes dos usuários.
    
// 3. Leia o código abaixo
    
    
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)

    
    // a) O que vai ser impresso no console?
    // Resposta: Será impresso no console um array com todos os usuários que não são Chijo.

// Exercícios de escrita de código:

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
    
    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
    
    
    // - ⭐  Resultados esperados em cada item
        
        
        // item A
        [
          "Lupin", 
          "Polly",
          "Madame",
          "Quentinho", 
          "Fluffy", 
          "Caramelo"
        ]
        
        // item B
        [
           { nome: "Lupin", raca: "Salsicha"},
           { nome: "Quentinho", raca: "Salsicha"}
        ]
        
        // item C
        [
          "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
          "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
        ]
        
        
    
    // a) Crie um novo array que contenha apenas o nome dos doguinhos
    const arrayNome = pets.map((item, index, array) => {
         return item.nome;
    })
    
    // b) Crie um novo array apenas com os [cachorros salsicha]
    const arraySalsicha = pets.map((item, index, array) => {
         return item.raca === "Salsicha";
    })
    
    // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
    const mensagemParaPoodles = pets.map((item, index, array) => {
            if(item.raca === "Poodle"){
                return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
            } else {
                return item.nome;
            }
    })

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
    
    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
    
    
    // - ⭐  Resultados esperados em cada item
        
        
        // item A
        [
          "Alface Lavada", 
          "Guaraná 2l",
          "Veja Multiuso",
          "Dúzia de Banana", 
          "Leite", 
          "Cândida", 
          "Detergente Ypê", 
          "Vinho Tinto", 
          "Berinjela kg", 
          "Sabão em Pó"
        ]
        
        // item B
        [
           { nome: "Alface Lavada", preço: 2.38 },
           { nome: "Guaraná 2l", preço: 7.13 },
           { nome: "Veja Multiuso", preço: 11.97 },
           { nome: "Dúzia de Banana", preço: 5.42 },
           { nome: "Leite", preço: 2.84 },
           { nome: "Cândida", preço: 3.14 },
           { nome: "Detergente Ypê", preço: 2.09 },
           { nome: "Vinho Tinto", preço: 52.25 },
           { nome: "Berinjela kg", preço: 8.54 },
           { nome: "Sabão em Pó Ypê", preço: 10.26 }
        ]
        
        // item C
        [
           { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
           { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
           { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 }
        ]
        
        // item D
        [
           { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
           { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preço: 10.80 }
        ]
        
        // item E
        [
          "Compre Detergente Ypê por R$2,20",
        	"Compre Sabão em Pó Ypê por R$10,80"
        ]
        
        
    
    // a) Crie um novo array que contenha apenas o nome de cada item
    const arrayNomeProduto = produtos.map((item, index, array) => {
            return item.nome;
    })
    
    // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
    const arrayProdutoComDesconto = produtos.map((item, index, array) => {
            return {nome: item.nome, preco: item.preco - item.preco * 0.05}
    })
    
    // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
    const arrayBebidas = produtos.filter((item, index, array) => {
            if (item.categoria === "Bebidas"){
                return item;
            }
    })
    
    // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
    const arrayYpê = produtos.filter((item, index, array) => {
            if (item.nome.includes("Ypê")){
                return item;
            }
    })
    
    // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
    const arrayFrases = produtos.filter((item, index, array) => {
            if (item.nome.includes("Ypê")){
                return `Compre ${item.nome} por ${item.preco}`;
            }
    })

    // Desafios:

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]


// - ⭐  Resultados esperados em cada item
    

    // item A
    [
      "Bellsprout", 
      "Bulbasaur",
      "Charmander",
      "Psyduck", 
      "Squirtle", 
      "Vulpix"
    ]
    
    // item B
    [
       "grama",
       "fogo",
       "água",
    ]

    

// a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**

const arrayApenasNomesEmOrdemAlfabetica = pokemons.map((item, index, array) => {
    return item.nome;
}).sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})
// Não consegui deixar só com os nomes.


// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição.
// Resposta:

 function removeRepetidos(array) {
    let novoArray = [];
    array.forEach(item => {
        if (!novoArray.includes(item.tipo)) {
            novoArray.push(item.tipo);
        }
    });
    return novoArray;
}

removeRepetidos(pokemons);


// OU https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const tiposUnicos = pokemons.map(item => item.tipo).filter((item, index, array) => {
    return array.indexOf(item) === index;
}
)
// OU

const tiposUnicos2 = [...new Set(pokemons.map(item => item.tipo))];


