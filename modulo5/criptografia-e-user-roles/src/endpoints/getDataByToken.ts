import { Request, Response } from "express";
import connection from "../connection";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


type AuthenticationData = {
    id: string;
    role: string;
  }

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role,
  };
  return result;
};

export async function getDataByActiveToken (req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const data = getData(token);
    const user = await connection("users_autenticacao").where("id", data.id).select("*").first();
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "NORMAL") {
      throw new Error("Access denied, only NORMAL users can access this endpoint");
    }
    return res.json({ user });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({
          message: err.message,
        });
    } else {
        res.status(500).send("Xiiii, deu ruim!")
    }
}
}