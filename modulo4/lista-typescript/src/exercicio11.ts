// Escreva uma função para converter de números normais para algarismos romanos (`string`).

// Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram por centenas de anos. Inventaram estradas de concreto e até biquínis. Uma coisa que eles nunca descobriram foi o número zero. Isso tornou a escrita e a datação de histórias extensas de suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles criaram ainda está em uso hoje. 

// Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter números maiores que cerca de 3000. (Os próprios romanos não tendiam a ir mais alto)

// A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.

// Para ver isso na prática, considere o exemplo de 1990.

// Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC

// input: number
// output: string

function algarismoRomano (numero: number): string {
    let algarismoRomano: string = '';
    const algarismosRomanos: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const algarismos: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i: number = 0; i < algarismos.length; i++) {
        while (numero >= algarismos[i]) {
            algarismoRomano += algarismosRomanos[i];
            numero -= algarismos[i];
        }
    }
    return algarismoRomano;
}

console.log(algarismoRomano(Number(process.argv[2])));