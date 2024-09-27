let a,b;
let saida = document.getElementById("saida");
a=10;
b="10";
saida.innerHTML="Igualdade = "+(a==b)+"<br>";
saida.innerHTML+="Idêntico = "+(a===b)+"<br>";
saida.innerHTML+="Não igual = "+(a!=b)+"<br>";
saida.innerHTML+="Não Idêntico = "+(a!==b)+"<br>";