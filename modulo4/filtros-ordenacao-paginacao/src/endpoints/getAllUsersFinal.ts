import { Request, Response } from "express";
import { app } from "../app";
import { connection } from "../data/connection";

//  Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:

// - Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
// - Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
// - Caso o usuário não forneça número de página, deve começar na página 1

export async function selectAllUsers4(): Promise<any> {
  const result = await connection.raw(`
         SELECT id, name, email, type
            FROM aula48_exercicio
            ORDER BY email;
    `);

  return result[0];
}

export const getAllUsersFinal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers4();
    const name = req.query.name as string;
    const type = req.query.type as string;
    const page = req.query.page as any;

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }
    if (!name && !type && !page) {
      res.status(200).send(users.slice(0, 5));
    } else if (name) {
      res
        .status(200)
        .send(
          users
            .filter((user: { name: string }) => user.name === name)
            .slice(0, 5)
        );
    } else if (type) {
      res
        .status(200)
        .send(
          users
            .filter((user: { type: string }) => user.type === type)
            .slice(0, 5)
        );
    } else if (page) {
      res.status(200).send(users.slice((page - 1) * 5, page * 5));
    }
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
