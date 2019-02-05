/* 
	Código en JavaScript
	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/

// preguntamos un dato con prompt() e mostrámolo con alert()
//declaramos unha variable para gardar a resposta
var nombre = prompt('¿Como te llamas?');
var apellidoUno = prompt('¿Cuál es tu primer apellido?');
var apellidoUno = prompt('¿Cuál es tu segundo apellido?');
alert('Encantado '+ nombre + ' ' + apellidoUno + ' ' + apellidoUno);


// o navegador sabe HTML:
document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Imágen no encontrado" width="100px">');
document.write('<h1>Bienvenido al primer ejercicio</h1>'); // podemos inserir HTML
document.write('Iremos aprendendo. '); //non fai caso dos saltos de liña
document.write('Para un salto de liña usamos a etiqueta HTML: <br>');
document.write('Funciona? Lembramos a raia: <hr>');

// confirm() mostra cadro de diálogo OK ou Cancel:
var exit= confirm('Quieres salir? ');

if(exit)
{
	document.write('<br> Hasta la próxima '+ nombre);
} 
else 
{
	document.write('<br> Me alegro de que te quedes un rato más, <b>'+ nombre + '</b> :)');
}