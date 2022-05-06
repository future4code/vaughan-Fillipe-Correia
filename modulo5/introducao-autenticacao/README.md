## Documentação do postman:

https://documenter.getpostman.com/view/19297915/UyrBkH7d



## Exercício 1

// **a)** *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

// **Resposta:** Sim, é melhor do que usar números, pois strings possibilitam a utilização de vários caracteres, como por exemplo: "!@#$%¨&*()_+-=[]{}|;:',.<>/?", que não são permitidos nos números.

// **b)** A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

// **Resposta:**

```typescript
export const generateId = () => {
    return v4();
    }
```

## Esercício 2

```typescript
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```



// **a)** *Explique o código acima com as suas palavras.*

// **Resposta:** O código acima cria uma tabela no banco de dados, e insere os dados do usuário no banco de dados.

// **b)** Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

```sql
CREATE TABLE IF NOT EXISTS users_autenticacao (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL
);
```

// **c)** Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

```typescript
import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { generateId } from "../services/generateId";

export async function createUser(req: Request, res: Response) {
  const userId = generateId();
  const newUser: user = req.body;
  if (
    !newUser.email ||
    !newUser.password ||
    !newUser.name ||
    !newUser.nickname
  ) {
    return res.status(400).json({
      error: "Missing data",
    });
  } else {
    await connection
      .insert({
        id: userId,
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
        nickname: newUser.nickname,
      })
      .into("users_autenticacao");
    res.send();
  }
}
```

### Exercício 3

```typescript
 import * as jwt from "jsonwebtoken";

 const expiresIn = "1min"

 const generateToken = (id: string): string => {
   const token = jwt.sign(
     {
       id
     },
     process.env.JWT_KEY as string,
     {
       expiresIn
     }
   );
   return token;
 }
```

// a) O que a linha as string faz? Por que precisamos usar ela ali?

// Resposta: Porque ela é uma forma de segurança, pois ela garante que o token não será alterado.

// b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função:

```typescript
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export type payload = {
    id: string;
};

  const generateToken = (data: payload) => {
      console.log(process.env.JWT_KEY);
    const token = jwt.sign(
        {
            id: data.id,

        },
        process.env.JWT_KEY as string,
        { expiresIn: "10m" }
    );
    return token;
    };

    export { generateToken };

```

## Exercício 4

a) b) e c)

```typescript
import { Request, Response } from "express";
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/generateId";
import {createUser} from './createUser'

export async function signUp(req: Request, res: Response) {
    const { email, password, name, nickname} = req.body;
    try{
    
        if (!email || !password || !name || !nickname) {
            return res.status(400).json({
            error: "Missing data",
            });
        }
    
        if (email.indexOf("@") === -1) {
            return res.status(400).json({
            error: "Invalid email",
            });
        }
    
        if (password.length < 6) {
            return res.status(400).json({
            error: "Invalid password, must be at least 6 characters",
            });
        }
        
        const userId = generateId();

        const token = generateToken({ id: userId });
    
        await createUser(userId, email, password, name, nickname);
        
        res.status(200).send({
            token,
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
    }
```

## Exercício 5

a) Crie uma função que retorne as informações de um usuário a partir do email

```typescript
import connection from "../connection";
import { Request, Response } from "express";

export async function getUserByEmail (req: Request, res: Response) {
    try {
        const email = req.params.email;
        const user = await connection("users_autenticacao")
            .select("*")
            .where("email", email)
            .first();
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        return res.json(user);
    } catch (err:any) {
        return res.status(500).json({
            error: err.message
        });
    }
}
```

## Exercício 6

```typescript
import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/generateToken";


export async function login (req: Request, res: Response) {
    const { email, password } = req.body;
    try{
    
        if (!email || !password) {
            return res.status(400).json({
            error: "Missing data",
            });
        }
    
        if (email.indexOf("@") === -1) {
            return res.status(400).json({
            error: "Invalid email",
            });
        }
    
        if (password.length < 6) {
            return res.status(400).json({
            error: "Invalid password, must be at least 6 characters",
            });
        }
        
        const user = await connection("users_autenticacao")
            .select("*")
            .where("email", email)
            .first();
        
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        
        if (user.password !== password) {
            return res.status(401).json({
                error: "Invalid password, wrowng password"
            });
        }
        
        const token = generateToken({ id: user.id });
        
        res.status(200).send({
            token,
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
    }
```

## Exercício 7

// a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*

// Resposta: Porque o jwt.verify retorna um objeto, e não um array.



// b) Crie uma função que realize a mesma funcionalidade da função acima:

```typescript
type AuthenticationData = {
    id: string;
  }

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

## Exercício 8

```typescript
export async function getDataByActiveToken (req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const data = getData(token);
    const user = await connection("users_autenticacao").where("id", data.id).select("*").first();
    if (!user) {
      return res.status(401).json({ error: "User not found." });
    }
    return res.json({ user });
  } catch (error:any) {
    return res.status(400).json({ error: error.message });
  }
}
```

