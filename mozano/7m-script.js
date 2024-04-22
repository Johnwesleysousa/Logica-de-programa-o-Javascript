// Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o 
// quadrado da soma dos três valores lidos.

let a
let b
let c
let resultado

alert("a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.")

a = parseFloat(prompt("Digite o valor A: "));
b = parseFloat(prompt("Digite o valor B: "));
c = parseFloat(prompt("Digite o valor B: "));
resultado = (a + b + c) ** 2

alert("O quadrado da soma dos valores A, B e C é: " + resultado)
