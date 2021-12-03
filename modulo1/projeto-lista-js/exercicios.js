// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = Number(prompt("Digite a altura do retângulo: "));
  largura = Number(prompt("Digite a largura do retângulo: "));
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = Number(prompt("Digite o ano atual: "));
  anoNascimento = Number(prompt("Digite o ano de nascimento: "));
  console.log(anoAtual - anoNascimento);
}
  

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome: ");
  idade = Number(prompt("Digite sua idade: "));
  email = prompt("Digite seu email: ");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt("Digite a sua primeira cor favorita: ");
  cor2 = prompt("Digite a sua segunda cor favorita: ");
  cor3 = prompt("Digite a sua terceira cor favorita: ");
  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const variavelLogica = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = variavelLogica;
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  return string1 === string2;
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoRG) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Digite o ano atual: "));
  anoNascimento = Number(prompt("Digite o ano de nascimento: "));
  anoEmissaoRG = Number(prompt("Digite o ano de emissão do RG: "));

  let idade = anoAtual - anoNascimento;
  let tempoDeEmissao = anoAtual - anoEmissaoRG;

  if (idade <= 20 && tempoDeEmissao >= 5) {
    console.log(true);
  } else if (idade >= 20 && idade <= 50 && tempoDeEmissao >= 10) {
    console.log(true);
  } else if (idade >= 50 && tempoDeEmissao >= 15) {
    console.log(true);
  } else {
    console.log(false);
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 === 0) {
    return true;
  } else if (ano % 4 === 0 && ano % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(maiorDeIdade, possuiEnsinoMedio, possuiDisponibilidade) {
  // implemente sua lógica aqui
  maiorDeIdade = prompt("Você é maior de idade? (Sim/Não)").toLowerCase();
  possuiEnsinoMedio = prompt("Você possui ensino médio? (Sim/Não)").toLowerCase();
  possuiDisponibilidade = prompt("Você possui disponibilidade para cursar o curso? (Sim/Não)").toLowerCase();

  if (maiorDeIdade.includes("sim") === true &&
    possuiEnsinoMedio.includes("sim") === true &&
    possuiDisponibilidade.includes("sim") === true) {
    console.log(true);
  } else {
    console.log(false);
  }

}