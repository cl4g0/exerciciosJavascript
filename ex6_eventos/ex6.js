/* 
	Código en JavaScript
	Nome do ficheiro: ex6.js
	Usados os eventos: onclick, onload, onmouseover
*/

/*	
	Definimos funcións ás que chaman os eventos
*/
function loading () {
	alert('😀 Cargando 😃');

}

function dos () {
	alert('😀 Moi boas 😃');
}

function uno () {
	alert('👍🏽 Botón presionado 👍🏽');
}

function tres () {
	alert('🚶🏼‍♀️ Paseando polo botón 🚶🏼‍♀️');
}

/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Programación orientada a eventos </h1>');

/*	
	Creamos botóns que respondan a eventos, no .html ou aquí mesmo
*/
document.write('<h3>Lembramos aquelo dos formularios e dos botóns </h3>');
document.write('<button onclick="uno()">Boton1 click </button>');
document.write('<button onclick="dos()">Boton2 click </button>');
document.write('<button onclick="tres()">Boton3 click </button>');
