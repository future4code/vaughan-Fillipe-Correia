import express from "express";
import cors from "cors";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());




// Exercício 1: Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.

// Dica: app.get("/", (req, res) => {          
//     res.send("Hello from Express")
// })

app.get("/", (req, res) => {
    console.log("Acessou endpoint raiz");
    res.send("Primeiro endpoint criado");

    });

    //Exercício 2: Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:
    // id, name, phone, email, website

    type User = {
        id: number;
        name: string;
        phone: string;
        email: string;
        website: string;
    }

//Exercício 3: Crie um array de usuários para servir como base de dados da nossa API. 
// Insira nele quantos objetos quiser, fique à vontade para explorar sua criatividade 😉
// Não se esqueça de fazer a tipagem correta desse array.
        
const users: User[] = [
    {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        email: "leanne@gmail.com",
        website: "hildegard.org"
    },
    {
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
        email: "ervin@gmail.com",
        website: "anastasia.net"
    },
    {
        id: 3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
        email: "clementine@gmail.com",
        website: "ramiro.info"
    }
];

//Exercício 4: Construa um endpoint que retorne os usuários criados no exercício anterior.
// Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

app.get("/users", (req, res) => {
    console.log("Acessou endpoint users");
    res.send(users);
});

//Exercício 5: Acesse a API do JSONPlaceholder e observe os endpoints que buscam **posts**. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:

// - id
// - title
// - body
// - userId

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

//Exercício 6: Crie um array de posts para incrementar a base de dados da nossa API. 
// Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.
// Não se esqueça de fazer a tipagem correta desse array.


const usersWithPosts = [
    {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        email: "leanne@gmail.com",
        website: "hildegard.org",
        posts: [
            {
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                userId: 1
            },
            {
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                userId: 1
            },
            {
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                userId: 1
            }
        ]
    },
    {
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
        email: "ervin@gmail.com",
        website: "anastasia.net",
        posts: [
            {
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                userId: 2
            },
            {
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                userId: 2
            },
            {
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                userId: 2
            }
        ]
    },
    {
        id: 3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
        email: "clementine@gmail.com",
        website: "ramiro.info",
        posts: [
            {
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                userId: 3
            },
            {
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                userId: 3
            },
            {
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                userId: 3
            }
        ]
    }
];

// É melhor criar os posts dentro do array de usuários pois o usuário pode ter vários posts e é possível acessá-los pelo id do usuário. Também acho mais fácil de manipular com um map.

// Exercício 7: Construa um endpoint que retorne os posts criados no exercício anterior.

app.get("/posts", (req, res) => {
    res.send(usersWithPosts.map(user => user.posts));

});

// Exercício 8: Construa um endpoint que retorne os posts de um usuário em particular.

app.get("/posts/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    const userPosts = usersWithPosts.find(user => user.id == userId);
    res.send(userPosts.posts);
});


    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
          const address = server.address() as AddressInfo;
          console.log(`Server is running in http://localhost:${address.port}`);
        } else {
          console.error(`Failure upon starting server.`);
        }
      });