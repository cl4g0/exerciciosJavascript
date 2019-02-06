/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: 
*/

var numeroaleatorio = Math.round(Math.random()*10);
document.write('<h1>Acertar</h1> <br>');
var numero = prompt('Elige un número del 1 al 10: ');
if(numeroaleatorio == numero){
	document.write('<br><h2>Has acertado!</h2>');
} else{
	document.write('<br><h2>Has fallado :(</h2>');
}

document.write('<br>Elegiste el '+numero+' y era el '+numeroaleatorio);
/*	
	
*/
