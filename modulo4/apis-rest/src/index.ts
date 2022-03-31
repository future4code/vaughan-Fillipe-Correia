import express from "express";
import cors from "cors";
import { users, User, UserType } from "./data";

import { AddressInfo } from "net";
import { send } from "process";

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

// Exercício 1: Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.

app.get("/users", (req, res) => {
  let codeError: number = 400;
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((users) => users.name === name)
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);

  } catch (error) {
    res.status(codeError).send({ message: error.message });
  }
  }
);
// a. Qual método HTTP você deve utilizar para isso? O método GET.
// b. Como você indicaria a entidade que está sendo manipulada? A entidade é o /users.

//Exercício 2: Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade type específica, recebendo apenas um type por vez.


app.get("/users/type", (req, res) => {
  let codeError: number = 400;
  try {
    const type: string = req.query.type as string
    const user: User[] | undefined = users.filter((users) => users.type === type)
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    } else if (type !== "NORMAL" && type !== "ADMIN") {
      codeError = 400;
      throw new Error("Type not found");
    }
    res.status(200).send(user);

  } catch (error) {
    res.status(codeError).send({ message: error.message });
  }
  }
);

// a. Como você passou os parâmetros de type para a requisição? Por quê? Os parâmetros de type são passados através do query. Porque é um tipo de requisição que busca um tipo específico.

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados? Sim, para garantir que só 'types' válidos sejam utilizados, você pode utilizar um Enum.

//Exercício 3: Vamos agora praticar o uso de buscar mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando por nome.


app.get("/users/name", (req, res) => {
  let codeError: number = 400;
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((users) => users.name === name)
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);

  } catch (error) {
    res.status(codeError).send({ message: error.message });
  }
  }
);

// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?* O tipo de envio de parâmetro é o query.
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

// Exercício 4: Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.


app.post("/users", (req, res) => {
  let codeError: number = 400;
  try {
    const user: User = req.body as User
    if (!user.name || !user.type) {
      codeError = 400;
      throw new Error("Invalid user");
    }
    users.push(user);
    res.status(201).send(user);
    send(users)

  } catch (error) {
    res.status(codeError).send({ message: error.message });
  }
  }
);

// postman body: {
//     "id": 9,
//     "name": "Fillipe",
//     "email": "flip@gmail.com",
//     "type": "ADMIN",
//     "age": 29
// }

// a. Mude o método do endpoint para `PUT`. O que mudou?  O método PUT é utilizado para atualizar um item, e o método POST é utilizado para criar um item. Para usar o método PUT, você deve passar o id do item que deseja atualizar.

// b. Você considera o método `PUT` apropriado para esta transação? Por quê? O método PUT é utilizado para atualizar um item, então não é apropriado para criar um item.