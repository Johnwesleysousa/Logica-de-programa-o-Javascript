// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
// PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).
let valor
let taxa
let tempo
let prestacao

valor = parseFloat(prompt("Digite o valor da prestação: "));
taxa = parseFloat(prompt("digite a taxa: "));
tempo = parseInt(prompt("Digite o tempo: "));

prestacao = valor + (valor * taxa/100 ) * tempo

alert("O valor da prestação em atraso é: R$" + prestacao);
