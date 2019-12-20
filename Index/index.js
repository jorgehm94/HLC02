
var euros = 0;

function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
  }

  function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
  }

  function evento()
  {
    euros = euros+10;
    document.getElementById("cambioOpacity").addEventListener("click", function (){
      
      document.getElementById("cambioOpacity").innerHTML = "por visitar la página debera pagar "+euros+" euros";
    });
    
  }

  function transicion(){
    var texto = document.getElementsByClassName('transition');

    for (i = 0; i < texto.length; i++) {
      texto[i].innerHTML="Cascading Style Sheets, en español «Hojas de estilo en cascada»"
    }
  }

  function textoNormal(){
    var texto = document.getElementsByClassName('transition');

    for (i = 0; i < texto.length; i++) {
      texto[i].innerHTML="Info <---"
    }
  }

  function autores(){
    var texto = document.getElementsByClassName('autores');

    for (i = 0; i < texto.length; i++) {
      texto[i].innerHTML="David seda Jimenez"+"<br>"+"Jorge Herrera Molina"
    }

  }

  function autoresNormal(){
    var texto = document.getElementsByClassName('autores');

    for (i = 0; i < texto.length; i++) {
      texto[i].innerHTML="Autores (Pasame el raton)"
    }
  }