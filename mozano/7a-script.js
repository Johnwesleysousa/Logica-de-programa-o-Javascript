// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
// conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.




let grausCelsius = parseFloat
let grausFahrenheit = parseFloat

alert("Conversão de Temperatura  graus Celsius para  graus Fahrenheit.");
grausCelsius = parseFloat(prompt("Informe a temperatura em graus Celsius:"));

grausFahrenheit = (9 * grausCelsius + 160) / 5

alert("A temperatura em graus Fahrenheit é:" + grausFahrenheit + "°F");