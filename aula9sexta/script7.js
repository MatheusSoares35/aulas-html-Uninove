let a,b,c,d;
let saida = document.getElementById("saida");

//variaveis declaradas
a=50;
b=120;
c=200;

d=(a<=b) && (a<=c);
//variável a é menor ou igual a variável b >>E<< variável a é menor ou igual a variável c


// variável d está sendo exibida, mostrando o conteúdo da operação entre a, b e c
saida.innerHTML=`AND d = ${d}`;
