import axios from 'axios';
import {baseURL} from './baseURL';

// Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando *arrow function*.



//   a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
//   Resposta: A diferência é só onde a arrow function não tem o `async` antes do seu nome.

// b. Implemente a função solicitada, usando arrow function

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  }