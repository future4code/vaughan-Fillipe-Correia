import { UserBusiness } from "../src/business/UserBusiness";
import { CustomError } from "../src/errors/CustomError";
import { HashGeneratorMock } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/userDatabaseMock";

const userBusinessMock = new UserBusiness(
  new UserDatabaseMock() as any,
  new HashGeneratorMock(),
  new TokenGeneratorMock(),
  new IdGeneratorMock()
);

describe("UserBusinessMock-SignUp", () => {
  test("Return erro if name is empty", async () => {
    expect.assertions;
    try {
      await userBusinessMock.signup(
        "",
        "fravo@gmail.com",
        "jajaja12",
        "NORMAL"
      );
    } catch (error) {
        if(error instanceof CustomError){
            expect(error.message).toBe("Missing input");
            expect(error.statusCode).toBe(422);

        }
    }
  });
});

describe("UserBusinessMock-getUserById", () => {
  test("Return erro if id is empty", async () => {
    expect.assertions;
    try {
      await userBusinessMock.getUserById("");
    } catch (error) {
        if(error instanceof CustomError){
            expect(error.message).toBe("User not found");
            expect(error.statusCode).toBe(404);

        }
    }
  });

  test("Success getUserById", async () => {
    expect.assertions;
    try{
        const user = await userBusinessMock.getUserById("1");
        expect(user).toBeDefined();
        expect(user.getId()).toBe("1");
        expect(user.getName()).toBe("Fravo");
        expect(user.getEmail()).toBe("fravo@gmail.com");
        expect(user.getPassword()).toBe("jajaja12");
        expect(user.getRole()).toBe("NORMAL");
    }
    catch(error){
        if (error instanceof CustomError){
            expect(error.message).toBe("User not found");
            expect(error.statusCode).toBe(404);
        }
    }

  });
});
