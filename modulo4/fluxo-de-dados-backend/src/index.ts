import express from "express";
import cors from "cors";
import { products, Product } from "./data";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Exercicio 1: Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método GET no path “/test” que retorna uma mensagem genérica avisando que a API está funcional.
app.get("/test", (req, res) => {
  res.send("Hello World");
});

// Exercicio 2: Crie um arquivo chamado data.ts que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (string), name (string) e price (number). Popule manualmente o array com pelo menos 3 produtos.

// Exercicio 3: Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API. REFATORADO
// app.post("/products", (req, res) => {
//     const product: Product = req.body;
//     product.id = Number(Math.random() * 100).toFixed(0).toString();
//     products.push(product);
//     res.send(products);
// }
// );

// postman body: {"name":"Product 4","price":400}

// Exercicio 4: Crie um endpoint que retorna todos os produtos. REFATORADO
// app.get("/products", (req, res) => {
//     res.send(products);
// }
// );

// Exercicio 5: Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada. REFATORADO
// app.put("/products/:id", (req, res) => {
//     const id = req.params.id;
//     const product = products.find(p => p.id === id);
//     if(!product) {
//         res.status(404).send("Product not found");
//         return;
//     }
//     const updatedProduct: Product = req.body;
//     product.price = updatedProduct.price;
//     res.send(products);
// }
// );

// postman body: {"price":500}

// Exercicio 6: Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada. REFATORADO
// app.delete("/products/:id", (req, res) => {

//     const id = req.params.id;
//     const productIndex = products.findIndex(p => p.id === id);
//     if(productIndex === -1) {
//         res.status(404).send("Product not found");
//         return;
//     }
//     products.splice(productIndex, 1);
//     res.send(products);
// }
// );

// Exercicio 7: Refatore o endpoint do exercício 3 (criar produto) para que sejam implementados fluxos de validação dos dados recebidos (`name` e `price`)

// - erro caso um ou nenhum deles forem recebidos
// - erro caso `name` seja diferente de `string`
// - erro caso `price` seja diferente de `number`
// - erro caso `price` seja igual ou menor que `0`
// - erro caso algo inesperado aconteça

app.post("/products", (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.status(400).send("Missing parameters");
    return;
  }
  if (typeof req.body.name !== "string") {
    res.status(400).send("Invalid name: not a string");
    return;
  }
  if (typeof req.body.price !== "number") {
    res.status(400).send("Invalid price: price is not a number");
    return;
  }
  if (req.body.price <= 0) {
    res.status(400).send("Invalid price: must be greater than 0");
    return;
  } else {
    const product: Product = req.body;
    product.id = Number(Math.random() * 100)
      .toFixed(0)
      .toString();
    products.push(product);
    res.send(products);
  }
});

// postman body:  {"name":"Product 4","price":400}

// Exercicio 8: Refatore o endpoint do exercício 5 (editar produto) para que sejam implementados fluxos de validação dos dados recebidos (`price`)

// - erro caso `price` não seja recebido
// - erro caso `price` seja diferente de `number`
// - erro caso `price` seja igual ou menor que `0`
// - erro caso o produto a ser editado não seja encontrado
// - erro caso algo inesperado aconteça

// app.put("/products/:id", (req, res) => {
//     const id = req.params.id;
//     const product = products.find(p => p.id === id);
//     if(!product) {
//         res.status(404).send("Product not found");
//         return;
//     }
//     if (!req.body.price) {
//         res.status(400).send("Missing parameters");
//         return;
//     }
//     if (typeof req.body.price !== "number") {
//         res.status(400).send("Invalid price: price is not a number");
//         return;
//     }
//     if (req.body.price <= 0) {
//         res.status(400).send("Invalid price: must be greater than 0");
//         return;
//     } else {
//     const updatedProduct: Product = req.body;
//     product.price = updatedProduct.price;
//     res.send(products);
// }
// }
// );

// postman body: {"price":500}

// Exercicio 9: Refatore o endpoint do exercício 6 (deletar produto) para que sejam implementados fluxos de validação dos dados recebidos

// - erro caso o produto escolhido não seja encontrado
// - erro caso algo inesperado aconteça

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    res.status(404).send("Product not found");
    return;
  }
  products.splice(productIndex, 1);
  res.send(products);
});

// DESAFIOS

// Exercicio 10: Implemente no endpoint do exercício 4 a seguinte lógica:

// - o endpoint retorna todos os produtos por padrão, mas caso seja recebido uma query `“search”` válida, é retornado o resultado da busca por nome dos produtos
// - para a query ser válida, é necessário que ela não seja `undefined`

app.get("/products", (req, res) => {
  if (req.query.search) {
    const search = req.query.search as string;
    const filteredProducts = products.filter((p) => p.name.includes(search));
    res.send(filteredProducts);
  } else {
    res.send(products);
  }
});

// url postman: http://localhost:3003/products?search=Bananinha

// Exercicio 11: Refatore o endpoint do exercício 5 para que seja possível editar também o nome do produto escolhido. Isso quer dizer que existirão 3 casos de uso:

// - 1: tanto o nome quanto o preço são recebidos (produto será editado com sucesso)
// - 2: apenas o nome ou o preço é recebido (produto será editado com sucesso)
// - 3: nem o nome nem o preço é recebido (erro com mensagem explicativa)

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).send("Product not found");
    return;
  }
  if (req.body.name) {
    const updatedProduct: Product = req.body;
    product.name = updatedProduct.name;
  }
  if (req.body.price) {
    const updatedProduct: Product = req.body;
    product.price = updatedProduct.price;
  } else if (!req.body.name && !req.body.price) {
    res.status(400).send("Missing parameters: name or price");
    return;
  }
  res.send(products);
});
