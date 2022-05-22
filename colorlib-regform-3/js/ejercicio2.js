/* javascript para el ejercicio 2 de portfolio de lenguajes de marcas */

function calcular(){

    // obtener dato (radio)

    const PI = 3.1416; // no seria necesario, está en la librería matemática básica de JS
    let radio = Number(document.getElementById('radio').value);

    // realizar cálculos

    let circunferencia = 2 * radio * PI;
    let circulo = radio ** 2 * PI;
    let esfera = radio ** 3 * PI;

    // mostrar resultados

    // te atreves a refactorizar la salida de resultados?????

    document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es : "+circunferencia;

    document.getElementById("circulo").innerHTML="El área del círculo es : "+circulo;

    document.getElementById("esfera").innerHTML="El volumen de la esfera es : "+esfera;
}