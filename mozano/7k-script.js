// Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
// real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
// com o usuário, para que seja apresentado o valor em moeda americana.

let cotacaoDolar
let valorDolar
let valorReal

alert("Convertendo real para dolar");

valorReal = parseFloat(prompt("Digite o valor de reais que voce tem: "));

valorDolar = parseInt(prompt("Digite a cotação do dolar:  "));

cotacaoDolar = valorReal / valorDolar

alert("O você tem: " + cotacaoDolar + " Dolar ");