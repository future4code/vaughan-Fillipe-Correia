// Exercícios de interpretação:

//1.

// a. false (true && false = false)
// b. false (true && false && true = false)
// c. true (true && true = true)
// d. boolean

// 2.

// Os valores que chegam do prompt são do tipo string, quando nós "somamos" essas strings, estamos fazendo uma concatenação e não uma soma. 

// 3. 

// A sugestão seria transformar os valores do prompt em números com o Number().

// Ex: 

// let primeiroNumero = Number(prompt("Digite um numero!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));
// const soma = primeiroNumero + segundoNumero;
// console.log(soma);

// OU

// let primeiroNumero = prompt("Digite um numero!");
// let segundoNumero = prompt("Digite outro numero!");
// const soma = Number(primeiroNumero) + Number(segundoNumero);
// console.log(soma);

// Exercícios de escrita:

// 1. ==========================================

let idade = Number(prompt("Digite a sua idade."));
let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo(a)."));

console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idade > idadeAmigo);
console.log(idade - idadeAmigo);

// 2. ==========================================

let numeroPar = Number(prompt("Digite um número par."));
console.log(numeroPar % 2);
// O observado foi que o resto da divisão de um número par por 2 será sempre 0, enquanto o resto da divisão de um número ímpar por 2 será sempre 1. 

// 3.==========================================

let idade = Number(prompt("Digite a sua idade em anos (apenas números)."));

console.log("Sua idade em meses é: ", idade * 12, " meses.");
console.log("Sua idade em dias é: ", idade * 365, " dias.");
console.log("Sua idade em horas é: ", idade * (365 * 24), " horas.");

// 4. ==========================================

let primeiroNumero = Number(prompt("Digite o primeiro número."));
let segundoNumero = Number(prompt("Digite o segundo número."));

console.log("O primeiro número é maior que o segundo? ", primeiroNumero > segundoNumero);
console.log("O segundo número é maior que o primeiro? ", segundoNumero > primeiroNumero);
console.log("O primeiro numero é divisível pelo segundo? ",primeiroNumero % segundoNumero === 0);
console.log("O segundo numero é divisível pelo primeiro? ",segundoNumero % primeiroNumero === 0);

// DESAFIO =====================================

// 1. =================================================
// a)
let farenheit = 77;
let farenheitParaKelvin = (farenheit - 32) * (5/9) + 273.15;
console.log(farenheit + "°F", "em Kelvin é:",farenheitParaKelvin + "K");

// b)
let celsius = 80;
let celsiusParaFarenheit = celsius * (9/5) + 32;
console.log(celsius + "°C", "em Farenheit é:",celsiusParaFarenheit + "°F");

// c)
let celsius = 30;
let celsiusParaFarenheit = celsius * (9/5) + 32;
let celsiusParaKelvin = celsius + 273.15;
console.log(celsius + "°C", "em Farenheit é:",celsiusParaFarenheit + "°F");
console.log(celsius + "°C", "em Kelvin é:",celsiusParaKelvin + "K");

// d)
let celsiusPrompt = Number(prompt("Graus em Celsius."));
let celsiusPromptParaKelvin = celsiusPrompt + 273.15;
let celsiusPromptParaFarenheit = celsiusPrompt * (9/5) + 32;
console.log(celsiusPrompt + "°C", "em Kelvin é:",celsiusPromptParaKelvin + "K");
console.log(celsiusPrompt + "°C", "em Farenheit é:",celsiusPromptParaFarenheit + "°F");

// 2. =================================================
// a)
let quilowattsHora = 280;
console.log("A residência irá pagar: ", (quilowattsHora * 0.05));

// b)
let quilowattsHora = 280;
console.log("A residência irá pagar: ", (quilowattsHora * 0.05 ) - (quilowattsHora * 0.05 * (0.15)));

// 3. =================================================
// a)
let pesoEmLibra = 20;
let libraParaQuilograma = pesoEmLibra / 2.205;
console.log(`${pesoEmLibra}lb equivalem a ${libraParaQuilograma}kg.`);

// b)
let pesoEmOnca = 10.5;
let oncaParaQuilograma = pesoEmOnca / 3.527;
console.log(`${pesoEmOnca}oz equivalem a ${oncaParaQuilograma}kg.`);

// c)
let milha = 100;
let milhaParaMetro = milha * 1609;
console.log(`${milha}mi equivalem a ${milhaParaMetro}m.`);

// d)
let pes = 50;
let pesParaMetro = pes / 3.281;
console.log(`${pes}ft equivalem a ${pesParaMetro}m.`);

// e)
let gal = 103.56;
let galParaLitro = gal * 379;
console.log(`${gal}gal equivalem a ${galParaLitro}L.`);

// f)
let xic = 450;
let xicParaLitros = (xic * 6) / 25;
console.log(`${xic}xic equivalem a ${xicParaLitros}L.`);

