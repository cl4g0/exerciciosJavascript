document.write("<h1>Operaciones</h1>");
document.write('<button onclick="suma()">Sumar</button>');
document.write('<button onclick="resta()">Restar</button>');
document.write('<button onclick="multiplicacion()">Multiplicar</button>');
document.write('<button onclick="division()">Dividir</button>');
document.write('<button onclick="media()">Media</button>');

function suma(){
	var numero1 = prompt('Elige un número ');
	var numero2 = prompt('Elige otro número ');
	resposta = parseInt(numero1) + parseInt(numero2);
	alert("El resultado es " + resposta);
}
function resta(){
	var numero1 = prompt('Número (minuendo)');
	var numero2 = prompt('Número (sustraendo)');
	resposta = parseInt(numero1) - parseInt(numero2);
	alert("El resultado es " + resposta);
}
function multiplicacion(){
	var numero1 = prompt('Elige un número ');
	var numero2 = prompt('Elige otro número ');
	resposta = parseInt(numero1) * parseInt(numero2);
	alert("El resultado es " + resposta);
}
function division(){
	var numero1 = prompt('Número (dividendo)');
	var numero2 = prompt('Número (divisor)');
	resposta = parseInt(numero1) / parseInt(numero2);
	alert("El resultado es " + resposta);
}
function media(){
	var numero1 = prompt('Elige un número ');
	var numero2 = prompt('Elige otro número ');
	resposta = (parseInt(numero1) + parseInt(numero2))/2;
	alert("El resultado es " + resposta);
}
