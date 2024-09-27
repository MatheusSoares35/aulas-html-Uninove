let a,b,res;
let saida = document.getElementById("saida");
//variavel a = 9 e b = 10
a=9;
b=10;


res=(a<b);
//variável res igual a 9 menor que 10 = verdadeiro


saida.innerHTML=`a = ${a} , b = ${b} <br>`;//mostrando o conteúdo da variável
saida.innerHTML+=`a < b : ${(a<b)} <br>`;// a é menor que b = verdadeiro
saida.innerHTML+=`!( a < b) : ${!(a<b)}<br>`;// a NÂO é menor que b = false


saida.innerHTML+="res : "+typeof(res);
//exibição do tipo de variável resposta = boleano(falso/verdadeiro)