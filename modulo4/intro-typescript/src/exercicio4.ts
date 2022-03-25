const comparaDoisNumeros = (): number => {
    var numero1 = Number(process.argv[2]);
    var numero2 = Number(process.argv[3]);
    if (numero1 > numero2) {
        return numero1
    } else {
        return numero2
    }
}

console.log(comparaDoisNumeros())
    
