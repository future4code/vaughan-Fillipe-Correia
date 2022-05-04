import PostData from "../data/PostData"
import Post from "../model/Post"
import { PostInputDTO } from "../types/postInputDTO";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export default class PostBusiness{

    constructor(
        private postData:PostData,
        private idGenerator:IdGenerator,
        private authenticator:Authenticator,
    ){}
    
    createPost = async (input: PostInputDTO, token:string) =>{
        //validacao, o post pode ou não ter uma imagem
        const {title, body, image_url, post_type} = input
        if(!title || !body){
            throw new Error("Campos inválidos")
        }
       
        // pegar identificador do usuario pelo token
        const user = this.authenticator.getTokenData(token)

        //conferir se o usuario existe
        if(!user){
            throw new Error("Usuário não encontrado")
        }

        // criar uma data atual para o post
        const currentTime = new Date()        

        //criar uma id pro post
        const id = this.idGenerator.generateId()

        //criar o post no banco
        const post = new Post(
            id,
            title,
            body,
            post_type,
            image_url,
            currentTime,
            user.id
        )
        await this.postData.insert(post)
        //retornar o post
        return post
    }
}