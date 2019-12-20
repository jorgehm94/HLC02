

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
    document.getElementById("cambioOpacity").addEventListener("click", function(){
        document.getElementById("cambioOpacity").innerHTML = "por visitar la página debera pagar 20 euros";
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