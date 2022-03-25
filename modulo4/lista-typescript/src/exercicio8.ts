// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

// Entradas: 
// input: string, string
// output: boolean

// Dicas: 
// Você precisará da data atual para fazer as operações, uma opção é utilizar new Date() para obter a data atual

// Para fazer as operações necessárias, você pode converter as datas para timestamp usando o método getTime() na data

function renovaCarteira (dataNascimento: string, dataEmissao: string): boolean {
    // dataNascimento = process.argv[2];
    // dataEmissao = process.argv[3];
    const dataAtual: Date = new Date();
    const dataNascimentoTimestamp: number = new Date(dataNascimento).getTime();
    const dataEmissaoTimestamp: number = new Date(dataEmissao).getTime();
    const dataAtualTimestamp: number = dataAtual.getTime();
    const idade: number = Math.floor((dataAtualTimestamp - dataNascimentoTimestamp) / (1000 * 60 * 60 * 24 * 365));
    const idadeEmissao: number = Math.floor((dataAtualTimestamp - dataEmissaoTimestamp) / (1000 * 60 * 60 * 24 * 365));
    const idadeRenovacao: number = idade % 5 === 0 ? idade : idade % 5;
    const idadeRenovacaoEmissao: number = idadeEmissao % 5 === 0 ? idadeEmissao : idadeEmissao % 5;
    return idadeRenovacao < 20 || idadeRenovacao === 20 || idadeRenovacaoEmissao < 20 || idadeRenovacaoEmissao === 20 ? true : false;
}

console.log(renovaCarteira(process.argv[2], process.argv[3]));