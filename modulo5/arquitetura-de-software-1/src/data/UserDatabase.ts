import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase {
  insertUser = async (user:User) => {
    await this.connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    }).into("User_Arq");
  };

  selectUserByEmail = async (email: string): Promise<User> => {
    try {
      const result = await this.connection("User_Arq")
        .where({ email })
        .select("*");
      return result[0];
    } catch (error: any) {
      throw new Error(
        error.message ||
          "Error selecting user. Please check your system administrator."
      );
    }
  };

  getAllUsers = async (): Promise<User[]> => {
    try {
      const result = await this.connection("User_Arq").select("*");
      return result;
    } catch (error: any) {
      throw new Error(
        error.message ||
          "Error selecting users. Please check your system administrator."
      );
    }
  }

  deleteUser = async (id: string): Promise<void> => {
    try {
      await this.connection("User_Arq")
        .where({ id })
        .del();
    } catch (error: any) {
      throw new Error(
        error.message ||
          "Error deleting user. Please check your system administrator."
      );
    }
  }
}
    