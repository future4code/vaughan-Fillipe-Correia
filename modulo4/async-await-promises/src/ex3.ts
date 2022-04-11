import axios from 'axios';
import {baseURL} from './baseURL';

// Agora, vamos melhorar um pouco a nossa função, criando uma tipagem que represente os assinantes da nossa aplicação. No nosso caso, eles possuem um `id`, `name` e `email`, como indicado abaixo:

// ```tsx
// type user = {
// 	id: string;
// 	name: string;
// 	email: string;
// }
// ```

type user = {
    id: string;
    name: string;
    email: string;
}

// a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
// Resposta: Não, pois o retorno da função é um array de objetos.

// b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
// Resposta: Porque o retorno da função é um array de objetos, e não um array de qualquer coisa.

// c. Reimplemente a função, corretamente.
// Resposta: 

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email
    }));
}

