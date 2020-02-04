function tempo(data1, data2, unidade){
    var resultado = new Date(data2) - new Date(data1);
   if (unidade==="dia"){
       resultado=(new Date(data2) - new Date(data1))/(1000*60*60*24); 
   } else if (unidade==="mês"){
       resultado=(new Date(data2) - new Date(data1))/(1000*60*60*24*30);
   } else if(unidade==="ano"){
       resultado=(new Date(data2) - new Date(data1))/(1000*60*60*24*30*12);
   }

    return Math.round(Math.abs(resultado));
}

