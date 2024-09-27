let a,b,c,d,e;
let saida = document.getElementById("saida");

//variáveis declaradas
a=50;
b=120;
c=200;

/*condições ternárias(se ou senão) esse operador analisa se o resultado de 
uma operação lógica determina um valor lógico e verifica se esse 
valor corresponde a verdadeio ou falso
*/
d=(a<=b) ? "Verdadeiro" : "Falso";
e=(a>=c) ? "Verdadeiro" : "Falso";
saida.innerHTML=`d = ${d}<br>`;
saida.innerHTML+=`e = ${e}`;
