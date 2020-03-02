function por42(num1, num2){
    var min=num1;
    var max=num2;
    while(min<max){
        if(min%84===0){
            return min;
        }
       min ++;
       
    }console.log("Não encontrado");
}
