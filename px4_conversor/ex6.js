document.write("<h1>Operaciones</h1>");
document.write('<button onclick="distancia()">KM a M</button>');
document.write('<button onclick="divisa()">USD a EUR</button>');
document.write('<button onclick="tamaño()">GB a B</button>');
document.write('<button onclick="tiempo()">H a Min</button>');

function distancia(){
	var kilometros = prompt('Kilómetros ');
	resultado = parseInt(kilometros) * 1000;
	alert(resultado + " metros");
}
function divisa(){
	var dolares = prompt('USD');
	resultado = parseInt(dolares) / 1.15;
	alert(resultado + " euros");
}
function tamaño(){
	var gb = prompt('GB ');
	resultado = parseInt(gb) * 1000000000;
	alert(resultado + " bytes");
}
function tiempo(){
	var horas = prompt('H');
	resultado = parseInt(horas) * 60;
	alert(resultado + " minutos");
}