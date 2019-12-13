function comprobacion()
{
    //variables
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var localidad = document.getElementById("localidad").value;
    var direccion = document.getElementById("direccion").value;
    var codpostal = document.getElementById("codpostal").value;
    var fecha = document.getElementById("fecha").value;



    if(nombre=="" || apellidos==""|| dni==""|| localidad=="" || direccion=="" || codpostal=="" || fecha=="" || comprobarCheckbox()  || comprobarRadioButton() )
        alert("Campos vacios en el formulario, comprobar de nuevo.");
    else
    {
      if(isNaN(codpostal))
        alert("codigo postal no valido");
      
      if(!isNaN(fecha))
        alert("Fecha no valida");

      //comprobar formado de 8 numero seguido de letra
      if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
        alert("Dni no valido");
      }


    }
       
}

function comprobarCheckbox()
{
    var contador=0;
    var i=0;

    
    formulario = document.getElementById("bloqueDatosAdicionales");
    for(; i<formulario.elements.length; i++) {
        
      var elemento = formulario.elements[i];
      if(elemento.type == "checkbox") {
        if(!elemento.checked) {
          contador++;
        }
        
      }
    }
    if(i==contador)
        return true;
    else
        return false;

}

function comprobarRadioButton()
{

    opciones = document.getElementsByName("enfermedad");

    for(var i=0; i<opciones.length; i++) {
        
        if(opciones[i].checked) {
            return false;
        }
    }
    
    return true;

}
