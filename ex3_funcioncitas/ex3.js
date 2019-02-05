/* 
	Código en JavaScript
	Nome do ficheiro: ex3.js
	Usado: function
*/

/*	
	Función sen parámetros
*/
function saludar () {
	var nombre= prompt('Nombre: ');
	alert('Hola '+ nombre);
}

/*	
	Función á que lle pasamos un parámetro e fai o que lle pedimos
*/
function cotillear(nombre) {
	document.write('<br> Que tal estás '+ nombre);
}
/*	
	Función á que lle pasamos dous parámetros e devolve un valor
*/
function calcularMedia(numeroUno,numeroDos) {
	notaFinal=(parseInt(numeroUno)+parseInt(numeroDos))/2;
	return notaFinal;
}


document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Traballamos con funcións</h1>');

document.write('Algunhas veñen predefinidas: <code>alert(), prompt(), parseInt()</code> <br>');
document.write('Outras están na biblioteca <i>Math</i> como <code>Math.random(), Math.round()</code> <br>');
document.write('<hr>Podemos definir nós mesmos funcións: <code>saludar(), cotillear(), calcularMedia()</code><br>');
document.write('O resultado das chamadas será:  <hr>');


//chamada á función saudar()


saludar();


document.write('Chamada á función <code>cotillear()</code><br>');
cotillear('Juan');
cotillear('Andrea');
cotillear('Pablo');

document.write('<hr>Chamada á función <code>calcularMedia()</code>');
var notaMedia=calcularMedia(prompt('Primera nota: '),prompt('Segunda nota : '));
document.write('<br> A túa nota final é... '+ notaMedia);