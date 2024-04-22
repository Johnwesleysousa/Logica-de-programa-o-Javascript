// Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
// soma dos quadrados dos três valores lidos.

let a
let b
let c
let soma

a = parseFloat(prompt("Digite o valor A: "));
b = parseFloat(prompt("Digite o valor B: "));
c = parseFloat(prompt("Digite o valor C: "));

soma = (a ** 2) + (b ** 2) + (c ** 2);

alert("A soma dos quadrados dos valores é: " + soma);