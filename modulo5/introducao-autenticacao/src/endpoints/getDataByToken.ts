import { Request, Response } from "express";
import connection from "../connection";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


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