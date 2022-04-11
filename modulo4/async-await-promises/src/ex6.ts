import axios from 'axios';
import {baseURL} from './baseURL';

// Vamos reescrever a função anterior utilizando o Promise.all. Antes disso, responda as perguntas abaixo:

// a. O que o Promise.all faz?
// Resposta: Ele faz com que todas as promises sejam resolvidas antes de retornar o resultado.

// b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar as notificações para todos os usuários?
// Resposta: Nesse caso, o Promise.all é mais rápido que o forEach, pois ele não precisa esperar todas as promises para retornar.

// c. Reimplemente a função utilizando Promise.all
// Resposta:

const sendNotification = async (users: any[], message: string): Promise<any> => {
    const promises = users.map(async (user: any) => {
        await axios.post(`${baseURL}/notifications`, {
            userId: user.id,
            message
        });
    });
    await Promise.all(promises);
}
