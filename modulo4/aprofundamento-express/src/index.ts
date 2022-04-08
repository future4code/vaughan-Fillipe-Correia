import express from "express";
import cors from "cors";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

// Exercicio 1: Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (req, res) => {
    res.send("pong");
});

// Exercicio 2: Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”todos”). Crie uma variável de tipo para representar cada afazer.

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

// Exercicio 3: Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.

const todos: Todo[] = [
    {
        id: 1,
        title: "Estudar TypeScript",
        completed: true
    },
    {
        id: 2,
        title: "Estudar NodeJS",
        completed: false
    },
    {
        id: 3,
        title: "Estudar ReactJS",
        completed: true
    },
    {
        id: 4,
        title: "Estudar React Native",
        completed: false
    }
];

// Exercicio 4: Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

app.get("/todo", (req, res) => {
    const { completed } = req.query;

    if (completed) {
        const filteredTodos = todos.filter(todo => todo.completed);
        res.send(filteredTodos);
    } else {
        const filteredTodos = todos.filter(todo => !todo.completed);
        res.send(filteredTodos);
    }
});

// variar a URL para /todo?completed=true ou /todo?uncompleted



    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
          const address = server.address() as AddressInfo;
          console.log(`Server is running in http://localhost:${address.port}`);
        } else {
          console.error(`Failure upon starting server.`);
        }
      });

    //   Exercicio 5: Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.

    app.post("/todo", (req, res) => {
        const { id, title, completed } = req.body;

        const newTodo: Todo = {
            id: todos.length + 1,
            title : title,
            completed: completed
        };

        todos.push(newTodo);

        res.send(todos);
    }
    );

    // Exercicio 6: Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.

    app.put("/todo/:id", (req, res) => {

        const { id } = req.params;
        const { completed } = req.body;

        const todoIndex = todos.findIndex(todo => todo.id === +id);

        if (todoIndex < 0) {
            res.status(400).send("Todo not found");
            return;
        }

        todos[todoIndex].completed = completed;

        res.send(todos);
    }
    );

    // postman body: { "id": 1, "title": "Estudar TypeScript", "completed": true } 
    //  ou { "id": 1, "title": "Estudar TypeScript", "completed": false }

// Exercicio 7: Construa um endpoint que deleta um determinado afazer de acordo com sua id.

    app.delete("/todo/:id", (req, res) => {
        const { id } = req.params;

        const todoIndex = todos.findIndex(todo => todo.id === +id);

        if (todoIndex < 0) {
            res.status(400).send("Todo not found");
            return;
        }

        todos.splice(todoIndex, 1);

        res.send(todos);
    }
    );

// Exercicio 8: Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

app.get("/user/:id/todos", (req, res) => {
    const { id } = req.params;

    const filteredTodos = todos.filter(todo => todo.id === +id);

    res.send(filteredTodos);
}
);

// Exercicio 9: Crie a documentação Postman dos endpoints desenvolvidos:

    // GET /ping
    // url: http://localhost:3003/ping
    // description: teste de conexão
    // response:
    //   "pong"



    // GET /todo
    // url: http://localhost:3003/todo
    // description: retorna todos os afazeres
    // response:
    //   [
    //     {
    //       "id": 1,
    //       "title": "Estudar TypeScript",
    //       "completed": true
    //     },
    //     {
    //       "id": 2,
    //       "title": "Estudar NodeJS",
    //       "completed": false
    //     },
    //     {
    //       "id": 3,
    //       "title": "Estudar ReactJS",
    //       "completed": true
    //     },
    //     {
    //       "id": 4,
    //       "title": "Estudar React Native",
    //       "completed": false
    //     }
    //   ]


    // GET /todo?completed=true
    // url: http://localhost:3003/todo?completed=true
    // description: retorna todos os afazeres concluídos
    // response:
    //   [
    //     {
    //       "id": 1,
    //       "title": "Estudar TypeScript",
    //       "completed": true
    //     },
    //     {
    //       "id": 3,
    //       "title": "Estudar ReactJS",
    //       "completed": true
    //     }
    //   ]



    // GET /todo?uncompleted
    // url: http://localhost:3003/todo?uncompleted
    // description: retorna todos os afazeres não concluídos
    // response:
    //   [
    //     {
    //       "id": 2,
    //       "title": "Estudar NodeJS",
    //       "completed": false
    //     },
    //     {
    //       "id": 4,
    //       "title": "Estudar React Native",
    //       "completed": false
    //     }
    //   ]



    // POST /todo
    // url: http://localhost:3003/todo
    // description: cria um afazer
    // response:
    //   [
    //     {
    //       "id": 5,
    //       "title": "Titulo do afazer",
    //       "completed": false
    //     }
    //   ]




    // PUT /todo/:id
    // url: http://localhost:3003/todo/:id
    // description: altera o status de um afazer
    // params: {
    //   "id": 1
    // }
    // body: { "completed": false }
    // response:
    //   [
    //     {
    //       "id": 1,
    //       "title": "Estudar TypeScript",
    //       "completed": false
    //     }
    //   ]



    // DELETE /todo/:id
    // url: http://localhost:3003/todo/:id
    // description: deleta um afazer
    // params: {
    //   "id": 1
    // }
    // response: 
    //   [
    //     {
    //       "id": 2,
    //       "title": "Estudar NodeJS",
    //       "completed": false
    //     },
    //    {
    //       "id": 3,
    //       "title": "Estudar ReactJS",
    //       "completed": true
    //     },
    //     {
    //       "id": 4,
    //       "title": "Estudar React Native",
    //       "completed": false
    //     }
    //   ]



    // GET /user/:id/todos
    // url: http://localhost:3003/user/:id/todos
    // description: retorna todos os afazeres de um determinado usuário
    // params: {
    //   "id": 1
    // }
    // response:
    //   [
    //     {
    //       "id": 1,
    //       "title": "Estudar TypeScript",
    //       "completed": true
    //     },
    //     {
    //       "id": 2,
    //       "title": "Estudar NodeJS",
    //       "completed": false
    //     },
    //     {
    //       "id": 3,
    //       "title": "Estudar ReactJS",
    //       "completed": true
    //     },
    //     {
    //       "id": 4,
    //       "title": "Estudar React Native",
    //       "completed": false
    //     }
    //   ]