/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: 
*/
document.write('<h1>Super</h1>');

var precio1 = prompt('Cuanto vale el primer producto? ');
var precio2 = prompt('Cuanto vale el segundo producto? ');
var precio3 = prompt('Cuanto vale el tercer producto? ');

var totalsin = parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
var totaliva = parseInt(totalsin)*0.21+parseInt(totalsin);

document.write('El precio del primer producto es '+ precio1+' €');
document.write('<br>El precio del segundo producto es '+ precio2+' €');
document.write('<br>El precio del tercer producto es '+ precio3+' €');
document.write('<br>TOTAL SIN IVA '+ totalsin+' €');
document.write('<br>TOTAL CON IVA '+ totaliva+' €');

/*	
	
*/
