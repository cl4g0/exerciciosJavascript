var puntos = 0;
var lang = '';

var word1gal = 'hola';
var word1en = 'hello';
var word2gal = 'can';
var word2en = 'dog';
var word3gal = 'gato';
var word3en = 'cat';
var word4gal = 'casa';
var word4en = 'house';
var word5gal = 'arbore';
var word5en = 'tree';

function inglesAgallego(){
document.getElementById("tabla").style.display = 'block';	
document.getElementById("word1").innerHTML =  'Traduce al inglés: ' + word1gal;
document.getElementById("word2").innerHTML =  'Traduce al inglés: ' + word2gal;
document.getElementById("word3").innerHTML =  'Traduce al inglés: ' + word3gal;
document.getElementById("word4").innerHTML =  'Traduce al inglés: ' + word4gal;
document.getElementById("word5").innerHTML =  'Traduce al inglés: ' + word5gal;
var lang = 'en';
return lang;
}

function gallegoAingles(){
document.getElementById("word1").innerHTML =  'Traduce al gallego: ' + word1en;
document.getElementById("word2").innerHTML =  'Traduce al gallego: ' + word2en;
document.getElementById("word3").innerHTML =  'Traduce al gallego: ' + word3en;
document.getElementById("word4").innerHTML =  'Traduce al gallego: ' + word4en;
document.getElementById("word5").innerHTML =  'Traduce al gallego: ' + word5en;
var lang = 'gal';
return lang;
}


document.getElementById("final").innerHTML = lang;

function validate(){
// while(lang == 'en'){
if (document.getElementById('word1respuesta').value == word1en) {
	document.getElementById("word1validate").innerHTML =  'correcto';
	puntos = puntos + 10;
	return puntos;
}else if(document.getElementById('word1respuesta').value !== word1en){
	document.getElementById("word1validate").innerHTML =  'incorrecto';
}
if (document.getElementById('word2respuesta').value == word2en) {
	document.getElementById("word2validate").innerHTML =  'correcto';
	puntos = puntos + 10;
	return puntos;
}else if(document.getElementById('word2respuesta').value != word2en){
	document.getElementById("word2validate").innerHTML =  'incorrecto';
}
if (document.getElementById('word3respuesta').value == word3en) {
	document.getElementById("word3validate").innerHTML =  'correcto';
	puntos = puntos + 10;
	return puntos;
}else if(document.getElementById('word3respuesta').value != word3en){
	document.getElementById("word3validate").innerHTML =  'incorrecto';
}
if (document.getElementById('word4respuesta').value == word4en) {
	document.getElementById("word4validate").innerHTML =  'correcto';
	puntos = puntos + 10;
	return puntos;
}else if(document.getElementById('word4respuesta').value != word4en){
	document.getElementById("word4validate").innerHTML =  'incorrecto';
}
if (document.getElementById('word5respuesta').value == word5en) {
	document.getElementById("word5validate").innerHTML =  'correcto';
	puntos = puntos + 10;
	return puntos;
}else if(document.getElementById('word5respuesta').value != word5en){
	document.getElementById("word5validate").innerHTML =  'incorrecto';
}
//}
// while(lang == 'gal'){
// if (document.getElementById('word1respuesta').value == word1gal) {
// 	document.getElementById("word1validate").innerHTML =  'correcto';
// 	puntos = puntos + 10;
// 	return puntos;
// }else if(document.getElementById('word1respuesta').value !== word1gal){
// 	document.getElementById("word1validate").innerHTML =  'incorrecto';
// }
// if (document.getElementById('word2respuesta').value == word2gal) {
// 	document.getElementById("word2validate").innerHTML =  'correcto';
// 	puntos = puntos + 10;
// 	return puntos;
// }else if(document.getElementById('word2respuesta').value != word2gal){
// 	document.getElementById("word2validate").innerHTML =  'incorrecto';
// }
// if (document.getElementById('word3respuesta').value == word3gal) {
// 	document.getElementById("word3validate").innerHTML =  'correcto';
// 	puntos = puntos + 10;
// 	return puntos;
// }else if(document.getElementById('word3respuesta').value != word3gal){
// 	document.getElementById("word3validate").innerHTML =  'incorrecto';
// }
// if (document.getElementById('word4respuesta').value == word4gal) {
// 	document.getElementById("word4validate").innerHTML =  'correcto';
// 	puntos = puntos + 10;
// 	return puntos;
// }else if(document.getElementById('word4respuesta').value != word4gal){
// 	document.getElementById("word4validate").innerHTML =  'incorrecto';
// }
// if (document.getElementById('word5respuesta').value == word5gal) {
// 	document.getElementById("word5validate").innerHTML =  'correcto';
// 	puntos = puntos + 10;
// 	return puntos;
// }else if(document.getElementById('word5respuesta').value != word5gal){
// 	document.getElementById("word5validate").innerHTML =  'incorrecto';
// }
//}
}





switch(puntos) {
  case 10:
    document.getElementById("final").innerHTML = 'Hay que estudiar más.. Has conseguido 10 puntos';
    break;
  case 20:
    document.getElementById("final").innerHTML = 'Nada mal! Has conseguido 20 puntos';
  case 30:
    document.getElementById("final").innerHTML = 'Felicidades! Has conseguido 30 puntos';
    break;
  case 40:
    document.getElementById("final").innerHTML = 'Felicidades! Has conseguido 40 puntos';
    break;
  case 50:
    document.getElementById("final").innerHTML = 'Felicidades! HAS ACERTADO TODAS';
    break;
    break;
  default:
    document.getElementById("final").innerHTML = 'No has acertado ninguna! Repasa y vuelve una vez lo hayas echo';
}