// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
// VOLUME  COMPRIMENTO * LARGURA * ALTURA.

let volume 
let comprimento 
let largura 
let altura 

alert("Digite as informações abaixo para sabe o volume de uma caixa");

comprimento = parseFloat(prompt("Digite o comprimento: "));

largura = parseFloat(prompt("Digite a largura: "));

altura = parseFloat(prompt("Digite a altura: "));

volume = comprimento * largura * altura

alert("O volume da caixa é: " + volume+ " metros cúbicos" );