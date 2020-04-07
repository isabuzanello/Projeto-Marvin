function por42(num1, num2){
    var min=num1;
    var max=num2;
    while(min+42<=max){ 
        if(min%42===0){
        return min+42;
        } 
        min ++;
    }console.log("Não encontrado");
    return false;
}