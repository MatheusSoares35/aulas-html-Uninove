let a,b,c;
let saida = document.getElementById("saida");
//variáveis "a", "b" e "c" --> 10,10 e 11
a=10;
b=10;
c=11;
saida.innerHTML="Menor = "+(a<b)+"<br>"; // 10 é maior que 10?
saida.innerHTML+="Menor ou igual = "+(a<=b)+"<br>";// 10 é menor ou igual a 10?
saida.innerHTML+="Maior = "+(c>b)+"<br>";// 11 é maor que 10?
saida.innerHTML+="Maior ou igual = "+(c>=b)+"<br>";// 11 é maior ou igual a 10?
