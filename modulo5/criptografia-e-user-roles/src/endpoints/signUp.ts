import { Request, Response } from "express";
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/generateId";
import {createUser} from './createUser'
import * as bcrypt from 'bcryptjs';
import dotenv from "dotenv";
dotenv.config();

export const generateHash = async (password: string): Promise<string> => {
      const rounds = Number(process.env.BCRYPT_COST);
      const salt = await bcrypt.genSalt(rounds);
      const result = await bcrypt.hash(password, salt);
      return result;
      };
  

export async function signUp(req: Request, res: Response) {
    const { email, password, name, nickname, role} = req.body;
    try{
    
        if (!email || !password || !name || !nickname || !role) {
            throw new Error("Missing data");
        }
    
        if (email.indexOf("@") === -1) {
            throw new Error("Invalid email, must contain @");
        }
    
        if (password.length < 6) {
            throw new Error("Invalid password, must be at least 6 characters");
        }

        const hash = await generateHash(password);
        
        const userId = generateId();

        const token = generateToken({ id: userId, role: role });
    
        await createUser(userId, email, hash, name, nickname, role);
        
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