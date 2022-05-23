/**
 * JavaScript de Ejercicio 7
 * 
 * Authora: Esther Hitos Garcia
 */
 document.getElementById('Euclides').addEventListener("click",divisionEuclides);
function divisionEuclides() {
    
    let divi =Number (document.getElementById('dividendo').value);
    let divisor =Number( document.getElementById('divisor').value);
    let cociente =0;
    while (divi>=divisor){

       divi -= divisor;
       cociente++;      
    }

    document.getElementById('resultadoDivision').innerHTML = "El cociente es <strong>"+cociente+"</strong> y el resto <strong>"+divi+"</strong>";
}