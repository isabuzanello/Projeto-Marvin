function acharNumero(numero){
    if (numero < 5){
    return "mercurio"    
    }
    if (5<=numero && numero<=10){
        return "venus"
    }
    if (10<numero && numero<=100){
        return "terra"
    }
    if (numero>100){
        return "marte"
    }
}
