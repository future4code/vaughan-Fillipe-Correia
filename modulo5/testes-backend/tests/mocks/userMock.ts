import { User, USER_ROLES } from "../../src/model/User";

export const UserMock = new User(
    "id_mockado",
    "fravo",
    "fravo@gmail.com",
    "jajaja12",
    USER_ROLES.NORMAL
)