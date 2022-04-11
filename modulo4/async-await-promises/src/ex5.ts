import axios from 'axios';
import {baseURL} from './baseURL';

// Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa mensagem como notificação para todos os usuários. A princípio, não utilize o Promise.all

const sendNotification = async (users: any[], message: string): Promise<any> => {
    for (const user of users) {
        await axios.post(`${baseURL}/notifications`, {
            userId: user.id,
            message
        });
    }
}

