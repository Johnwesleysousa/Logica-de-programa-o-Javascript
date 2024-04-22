// Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
// automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
// (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
// distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da 
// distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
// LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
// média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
// quantidade de litros (LITROS_USADOS) utilizada na viagem.


let tempo 
let velocidade 
let distancia
let litros


tempo = parseFloat(prompt("Digite o tempo gasto na viagem: "));
velocidade = parseInt(prompt("Digite a velocidade média durante a viagem: "));

distancia = tempo * velocidade

litros = distancia / 12

alert("Velocidade média: " + velocidade + " Km/h");
alert("Tempo gasto percorrido foi: " + tempo + " horas");
alert("A distancia percorrida foi: " + distancia + " Km");
alert("Quantidade de litros usados foi: " + litros + " litros");

// alert("A media velocidade é:" + velocidade + "Tempo gasto percorrido foi: " + tempo + "A distancia percorrida foi: " + distancia + "Quantidade de litros usados foi:" + litros);