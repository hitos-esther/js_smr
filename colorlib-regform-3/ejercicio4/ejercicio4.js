/*

*/

function letraDni(){

const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

let dni = Number(document.getElementById('dni').value);

let resto = dni % 23;

let letra = LETRAS.substring(resto,resto+1);

document.getElementById('letra').innerHTML = "La letra es: "+letra;
}