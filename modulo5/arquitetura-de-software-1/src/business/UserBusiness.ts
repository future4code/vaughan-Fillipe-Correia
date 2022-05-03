import { UserDatabase } from '../data/UserDatabase';
import { HashManager } from '../services/hashManager';
import { Authenticator } from '../services/authenticator';
import { IdGenerator } from '../services/idGenerator';
import { USER_ROLES } from '../types/User';
import { User } from '../types/User';


const userDatabase = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();


export class UserBusiness{
    login = async (email:string, password:string) => {
        if(!email || !password){
            throw new Error("Missing inputs email or password");
        }

        const user = await userDatabase.selectUserByEmail(email);

        if(!user){
            throw new Error("User not found");
        }

        const passwordIsCorrect: boolean = await hashManager.compare(password, user.password);

        if(!passwordIsCorrect){
            throw new Error("Invalid password");
        }

        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        });

        return token;
}

    signUp = async (name:string, email:string, password:string, role:USER_ROLES) => {
        if(!name || !email || !password || !role){
            throw new Error("Missing inputs");
        }

        if(email.indexOf("@") === -1){
            throw new Error("Invalid email");
        }

        if(password.length < 6){
            throw new Error("Invalid password");
        }

        if(!(role === USER_ROLES.NORMAL || role === USER_ROLES.ADMIN)){
            throw new Error("Invalid role");
        }

        const userId = idGenerator.generateId();

        const hashPassword = await hashManager.hash(password);

        const user = new User(userId, name, email, hashPassword, role);

        await userDatabase.insertUser(user);

        const token = authenticator.generateToken({
            id: userId,
            role: role
        })

        return token;
    }

    getAllUsers = async (token:string) => {
        if(!token){
            throw new Error("Missing token");
        }

        // const userData = authenticator.getData(token);

        // if(userData.role !== USER_ROLES.ADMIN){
        //     throw new Error("You are not an admin");
        // }

        const users = await userDatabase.getAllUsers();

        return users;
    }

    deleteUser = async (token:string, id:string) => {
        if(!token || !id){
            throw new Error("Missing inputs");
        }

        const userData = authenticator.getData(token);

        if(userData.role !== USER_ROLES.ADMIN){
            throw new Error("You are not an admin");
        }

        await userDatabase.deleteUser(id);
    }
}