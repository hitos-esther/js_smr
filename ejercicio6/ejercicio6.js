/** JavaScript para el ejercicio 6 
 * Detecta Cadena de caracteres, y te dice si es palindromo o no 
 * Authora: Esther Hitos Garcia
 * */

function esPalindromo() {
    let palabra = document.getElementById('caracteres').value;
    let resultadoPalindromo ="";
    // eliminamos los espacios en blanco y mayusculas /minusculas
    palabra = palabra.replace(/ /g, "");
    palabra = /[^A-Za-z0-9]/g;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] != palabra[palabra.length - i - 1]) {
            resultadoPalindromo += ("La palabra <strong> NO es Palindromo</strong>");
        }
    }
    resultadoPalindromo += ( "La palabra <strong> SI es Palindromo</strong>");
}
/**function palindrome(str) {
  // Paso 1. Pon en minuscula la cadena y usa el RexEXP para remover los caracteres no deseados en el.
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  var lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";
     
  // Paso 2. Utiliza los métodos de encadenamiento con funciones integradas.
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";
   
  //  Paso 3. Revisa si reverseStr es estrictamente igual a lorRegStr y regresa un BooLean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}
 
palindrome("A man, a plan, a canal. Panama");
*/
