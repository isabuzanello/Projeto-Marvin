function maiusculo(palavra){
    var inicio=palavra.substr(0,3).toUpperCase();
    var resto=palavra.substr(3);
    return inicio+resto;
}

