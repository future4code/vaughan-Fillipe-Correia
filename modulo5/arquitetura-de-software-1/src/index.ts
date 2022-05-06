import {app} from "./controller/app"
import { UserController } from "./controller/UserController"

const userController = new UserController();

app.post("/login", userController.login);
app.post("/signup", userController.signUp);
app.get("/users", userController.getAllUsers);
app.delete("/users/:id", userController.deleteUser);