// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
// utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
// C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
// multiplicação e apresentar doze resultados de saída.

let a = parseInt
let b = parseInt
let c = parseInt
let d = parseInt

let soma1 = parseInt
let soma2 = parseInt
let soma3 = parseInt
let soma4 = parseInt
let soma5 = parseInt
let soma6 = parseInt

let mult1
let mult2
let mult3
let mult4
let mult5
let mult6

a = parseInt(prompt("Digite o valor A "));
b = parseInt(prompt("Digite o valor B "));
c = parseInt(prompt("Digite o valor C "));
d = parseInt(prompt("Digite o valor D "));

soma1 = a + b
soma2 = a + c 
soma3 = a + d
soma4 = b + c
soma5 = b + d
soma6 = c + d

mult1 = (a * b);
mult2 = (a * c); 
mult3 = (a * d);
mult4 = (b * c); 
mult5 = (b * d);
mult6 = (c * d);

alert("Resultados da adição: ");
alert("A + B = " + soma1);
alert("A + C = " + soma2);
alert("A + D = " + soma3);
alert("B + C = " + soma4);
alert("B + D = " + soma5);
alert("C + D = " + soma6);




alert("Resultados da Multiplicação: ");
alert("A + B = " + mult1);
alert("A + C = " + mult2);
alert("A + D = " + mult3);
alert("B + C = " + mult4);
alert("B + D = " + mult5);
alert("C + D = " + mult6);
