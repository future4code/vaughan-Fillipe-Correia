import express, { Request, Response } from 'express';
import cors from 'cors';
import connection from './connection';
import { AddressInfo } from 'net';


const app = express();
app.use(express.json());
app.use(cors());

// ## Exercício da Semana:

// Olá, tudo bem? O exercício de hoje vai lidar com um tema que vocês já estão acostumados. Já pedimos para vocês fazerem só o Front, já pedimos para fazerem o Front integrado, já até pedimos um projeto usando somente Node para isso: uma To Do List. Dessa vez, vai ser um pouquinho diferente, vocês vão fazer o backend dela.

// Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

// As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

// Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

// FUNÇÃO E ENDPOINT PARA CADASTRAR USUÁRIO

async function createUser (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  await connection('TodoListUser').insert({
    id,
    name,
    nickname,
    email,
  });
}

app.post('/user', async (req: Request, res: Response) => {
  try {
    const {id, name, nickname, email } = req.body;
    await createUser(id, name, nickname, email);
    res.status(200).send('Usuário criado com sucesso!');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// FUNÇÃO E ENDPOINT PARA PEGAR USUÁRIO POR ID

async function getUserById (id: string): Promise<any> {
  const result = await connection('TodoListUser').where('id', id).select('id','nickname');
  return result[0];
}

app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
      }
});

// FUNÇÃO E ENDPOINT PARA EDITAR USUÁRIO POR ID

async function editUser (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  await connection('TodoListUser').where('id', id).update({
    name,
    nickname,
    email,
  });
}

app.put('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, nickname, email } = req.body;
    await editUser(id, name, nickname, email);
    res.status(200).send('Usuário editado com sucesso!');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// FUNÇÃO E ENDPOINT PARA CRIAR TAREFA

async function createTask (
  id: string,
  title: string,
  description: string,
  status: string,
  limit_date: string,
  creator_user_id: string
): Promise<void> {
  await connection('TodoListTask').insert({
    id,
    title,
    description,
    status,
    limit_date,
    creator_user_id,
  });
}

async function formatDate (date: string): Promise<string> {
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
}


app.post('/task', async (req: Request, res: Response) => {
  try {
    const { id, title, description, status, limit_date, creator_user_id } = req.body;
    const date = await formatDate(limit_date);
    await createTask(id, title, description, status, date, creator_user_id);
    res.status(200).send('Tarefa criada com sucesso!');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// FUNÇÃO E ENDPOINT PARA PEGAR TAREFA POR ID

async function getTaskById (id: string): Promise<any> {
  const result = await connection('TodoListTask').where('id', id).select('*');
  return result[0];
}

app.get('/task/:id', async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});






app.listen(process.env.PORT || 3003, () => {
 if (process.env.NODE_ENV !== 'test') {
 console.log('Server started on port 3003!');
}
});