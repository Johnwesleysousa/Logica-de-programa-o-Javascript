/*Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

let grausFahrenheit = parseFloat
let grausCelsius = parseFloat

alert("Conversão de Temperatura graus Fahrenheit para graus Celsius.");

grausFahrenheit = parseFloat(prompt("Informe a temperatura em graus Fahnheit: "));

grausCelsius = (grausFahrenheit - 32) * (5/9)

alert("A temperatura em graus Celsius é :" + grausCelsius + "°C");