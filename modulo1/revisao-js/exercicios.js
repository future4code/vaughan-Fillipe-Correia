// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    start = 0;
    end = array.length - 1;
    while (start < end) {
        aux = array[start];
        array[start] = array[end];
        array[end] = aux;
        start++;
        end--;
    }
    return array;

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    novoArray = [];
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array;
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  noOddNumbers = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            noOddNumbers.push(array[i]);
        }
    }
    return noOddNumbers;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    evenNumbersRaisedToThePowerOfTwo = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbersRaisedToThePowerOfTwo.push(array[i] * array[i]);
        }
    }
    return evenNumbersRaisedToThePowerOfTwo;
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    maiorNumero = array[0];
    for (let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    return maiorNumero;

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    object = {};
    if (num1 > num2) {
        object.maiorNumero = num1;
        object.diferenca = num1 - num2;
        menorNumero = num2
        object.maiorDivisivelPorMenor = num1 % num2 === 0;
    } else if (num1 < num2) {
        object.maiorNumero = num2;
        object.diferenca = num2 - num1;
        menorNumero = num1;
        object.maiorDivisivelPorMenor = num2 % num1 === 0;
    } else {
        object.maiorNumero = num1;
        object.diferenca = 0;
        menorNumero = num1;
        object.maiorDivisivelPorMenor = true;
    }
    
    return object;
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   evenNumbers = [];
    for (i = 0; i < n; i++) {
        evenNumbers.push(i * 2);
    }
    return evenNumbers;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC) {
        return "Equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    function ordenaArray(array) {
        for (i = 0; i < array.length; i++) {
            for (j = 0; j < array.length; j++) {
                if (array[i] < array[j]) {
                    aux = array[i];
                    array[i] = array[j];
                    array[j] = aux;
                }
            }
        }
        return array;
    }
    array = ordenaArray(array);
    return [array[array.length - 2], array[1]];
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}