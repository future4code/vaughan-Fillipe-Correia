import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";


      // const id: string = Date.now().toString()

      // CREATE TABLE labecommerce_users (
      //    id VARCHAR(255) PRIMARY KEY,
      //     name VARCHAR(255),
      //     email VARCHAR(255),
      //     password VARCHAR(255)
      //     );

// queryBuilder to create a new user
export async function createUser(req: Request, res: Response) {
   try {
      const { name, email, password } = req.body;
      const id: string = Date.now().toString();
      const query = `INSERT INTO labecommerce_users (id, name, email, password) VALUES ('${id}', '${name}', '${email}', '${password}')`;
      await connection.query(query);
      res.send({ message: "Usuário criado com sucesso!" });
   } catch (error:any) {
      res.status(400).send({ message: error.message });
   }
   }

