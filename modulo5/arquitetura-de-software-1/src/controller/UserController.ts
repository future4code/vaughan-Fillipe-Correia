import {Request, Response} from 'express';
import { UserBusiness } from '../business/UserBusiness';

const userBusiness = new UserBusiness();

export class UserController {
    login = async (req: Request, res: Response): Promise<void> => {
        try{
            const {email, password} = req.body;
            
            const token = await userBusiness.login(email, password);

            res.send({
                message: "Usuário logado!",
                token
            })
        } catch(error:any){
            res.status(400).send({
                message: error.message || "Usuário não encontrado!"
            })
        }
    }

    signUp = async (req: Request, res: Response): Promise<void> => {
        try{
            const {name, email, password, role} = req.body;
            
            const token = await userBusiness.signUp(name, email, password, role);

            res.send({
                message: "Usuário cadastrado!",
                token
            })
        } catch(error:any){
            res.status(400).send({
                message: error.message || "Usuário não cadastrado!"
            })
        }
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try{
            const token = req.headers.authorization as string;

            const users = await userBusiness.getAllUsers(token);

            res.send({
                message: "Usuários recuperados!",
                users
            })
        } catch(error:any){
            res.status(400).send({
                message: error.message || "Usuários não recuperados!"
            })
        }
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try{
            const token = req.headers.authorization as string;
            const {id} = req.params;

            await userBusiness.deleteUser(token, id);

            res.send({
                message: "Usuário deletado!"
            })
        } catch(error:any){
            res.status(400).send({
                message: error.message || "Usuário não deletado!"
            })
        }
    }
}