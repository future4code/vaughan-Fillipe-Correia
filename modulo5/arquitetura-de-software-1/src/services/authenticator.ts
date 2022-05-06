import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../types/User";
import dotenv from "dotenv"
dotenv.config()

export type AuthenticationData = {
   id: string,
   role: USER_ROLES
}

export class Authenticator {
  generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      { expiresIn: "1h" }
    );
    return token;
  };

  getData = (token: string): AuthenticationData => {
    return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData;
   };
}