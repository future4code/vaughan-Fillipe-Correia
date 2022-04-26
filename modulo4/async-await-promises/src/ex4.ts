import axios from 'axios';
import {baseURL} from './baseURL';

// Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.



// *a.* Qual é o tipo dessa função? Por quê?
// Resposta: É uma async arrow function que retorna um Promise<any>, pois ela é assíncrona.

// b. Implemente a função solicitada
// Resposta:

const createNews = async (title: string, content: string, date:number): Promise<any> => {
    const response = await axios.put(`${baseURL}/news`, {
        title,
        content,
        date
    });
    return response.data;
}

