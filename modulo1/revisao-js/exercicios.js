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
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
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