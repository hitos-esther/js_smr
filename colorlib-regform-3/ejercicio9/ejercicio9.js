/**
 * 
 * 
 * 
 */
 document.getElementById('buscar').addEventListener("click",buscarNombre);
function buscarNombre(){

    const meses = ["Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre",
                    "Nobiembre",
                    "Diciembre"]

    let mes =Number(document.getElementById("mes").value);

    let numeroMes = mes -1;
    //let respuesta ="";

    let respuesta = (numeroMes == -1)? "no has elegido numero: ": meses[numeroMes];
   /* if(numeroMes==-1)
        respuesta= "No has elegido numero";
    else
        respuesta = meses[numeroMes];*/
    

    document.getElementById("nombreMes").innerHTML=respuesta;
}