```
let vezesQueAparece = 0;
    for(let i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] == numeroEscolhido){
            vezesQueAparece++;
        }
    }
    if(vezesQueAparece == 0){
        return "Número não encontrado";
    }
    return `O número ${numeroEscolhido} aparece ${vezesQueAparece}x`;
}
```