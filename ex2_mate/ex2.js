/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Páxina de mates que usa .css </h1>')

// as variables decláranse
var numeroUno; 
var numeroDos;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
numeroUno = prompt('Primer número: ');
numeroDos = prompt('Segundo número: ');

// convertimos a números
var suma = parseInt(numeroUno)+parseInt(numeroDos);
document.write('El resultado de sumar ' + numeroUno + ' + ' + numeroUno + ' es <b>' + suma + '</b>');

// fallos nos cálculos
var numeroTres = 0;
document.write('<br> <hr>Atención ós erros nas contas (dividir entre 0) será...'+ numeroUno/numeroTres); // opsssss

document.write('<hr><h3>Javascript "inventa" un número entre 0 e 10</h3>');

var numeroInventado = Math.random() * 11;

var numeroAleatorio = Math.random();
document.write('<br>Xenero un número aleatorio menor ca un: '+ numeroAleatorio);

//olliño con este truquito para non crear máis variables
numeroAleatorio = numeroAleatorio*10;
document.write('<br> Agora está entre 0 e 10: '+ numeroAleatorio);

//olliño con este truquito para non crear máis variables (outra vez)
numeroAleatorio = Math.round(numeroAleatorio)
document.write('<br> Redondeo para non andar con decimais '+ numeroAleatorio);