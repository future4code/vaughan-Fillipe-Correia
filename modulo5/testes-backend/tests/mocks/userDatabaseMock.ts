import { User } from "../../src/model/User";

export class UserDatabaseMock {
  public async createUser(user: User): Promise<void> {}

  public async getUserById(id: string): Promise<User | undefined> {
    return new Promise((resolve) => {
        resolve(undefined);
        }
    );
}
}