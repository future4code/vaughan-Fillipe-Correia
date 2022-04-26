import axios from 'axios';
import {baseURL} from './baseURL';

// O desafio é: você deve criar uma arrow function assíncrona que imprima a mensagem "Oi" no terminal depois de 5 segundo a partir do momento em que o script foi rodado. 

const printOi = async (): Promise<any> => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Oi');
}

printOi();