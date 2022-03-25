const calculadora = (num1: number, num2: number): void => {
    num1 = Number(process.argv[2]);
    num2 = Number(process.argv[3]);
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    var maior = num1 > num2 ? num1 : num2;
    console.log(`A soma é ${soma}`, `A subtração é ${subtracao}`, `A multiplicação é ${multiplicacao}`, `O maiornúmero é ${maior}`);
}

calculadora(10, 20);