// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
// dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
// disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

let cotacaoDolar
let valorDolar
let valorReal

alert("Convertendo dolar para real");

cotacaoDolar = parseFloat(prompt("Digite a cotação do dolar atual: "));

valorDolar = parseInt(prompt("Digite quantos dolares você tem: "));

valorReal = cotacaoDolar * valorDolar

alert("O valor em reais é: " + valorReal);
