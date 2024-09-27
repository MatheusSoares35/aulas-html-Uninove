let a,b,c,d;
let saida = document.getElementById("saida");

//variáveis a b e c declaradas
a=50;
b=120;
c=200;

// variável a é maior ou igual a b >>OU<< variável a é menor ou igual a variável c?
d=(a>=b) || (a<=c);

// variável de "b" contento o resultado lógico da operação
saida.innerHTML=`OR d = ${d}`;
