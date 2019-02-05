/* 
	Código en JavaScript
	Nome do ficheiro: ex4.js
	Usado: switch(), case, break, default
*/
/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Traballamos con condicionais</h1>');

// varios caracteres entre comiñas forman unha cadea (string)
var lang = prompt('De qué país eres? ');
document.write('Eres de ' + lang +  '<br>'); // unha cadea detrás da outra co signo +

/*	
	avaliamos o que introduce o usuario
*/

switch(lang)
{
	case 'españa':
		document.write('<b>Buenos días</b>');
	break;
	case 'francia':
		document.write('<b>Bonjour</b>');
	break;
	case 'portugal':
	case 'brasil':
		document.write('<b>Bom día</b>');
	break;
	default:
		document.write('<b>Hello!!</b>');
	break;
}; 

document.write('<h6>Truquito: En Sublime Text: Edit/Emoji</h6>');