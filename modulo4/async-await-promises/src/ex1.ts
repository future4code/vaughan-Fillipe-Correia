import axios from 'axios';
import {baseURL} from './baseURL';

// Vamos começar fazendo uma função nomeada simples que retorne todos os assinantes da nossa aplicação. Ela deve ser assíncrona, porque utiliza o `async` para fazer a comunicação com o banco de dados. Além disso, por ora, indique que ela vai retornar um array de "qualquer coisa"

// *a.* Qual endpoint você deve utilizar para isso?
// Resposta: /subscribers

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// Resposta: async function getSubscribers(): Promise<any[]>

// c. Implemente uma função nomeada que faça o que foi pedido.
// Resposta:

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };


