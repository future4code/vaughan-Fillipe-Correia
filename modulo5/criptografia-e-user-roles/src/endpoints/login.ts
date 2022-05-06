import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/generateToken";
import * as bcrypt from "bcryptjs";


export const compareHash = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Missing data");
    }

    if (email.indexOf("@") === -1) {
      throw new Error("Invalid email, must contain @");
    }

    if (password.length < 6) {
      throw new Error("Invalid password, must be at least 6 characters");
      
    }

    const user = await connection("users_autenticacao")
      .select("*")
      .where("email", email)
      .first();


    if (!user) {
      throw new Error("User not found");
    }

    const isValid = await compareHash(password, user.password);

    if (!isValid) {
      throw new Error("Invalid password, wrong password");
    }

    const token = generateToken({ id: user.id, role: user.role });

    res.status(200).send({
      token,
    });
  } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({
            message: err.message,
          });
      } else {
          res.status(500).send("Deu ruim")
      }
  }
}