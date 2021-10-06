var caja =  document.getElementById("numero")
var boton =  document.getElementById("boton")
var informacion = document.getElementById("info")

var numeroAleatorio = Math.ceil(Math.random() * 100)

var intentos = 5

boton.addEventListener("click", adivina)

function adivina(){
  var numeroIngresado = caja.value
  if (numeroAleatorio == numeroIngresado) {
    informacion.innerHTML = "🎈🎆🎇 GANASTE ✨🎉🎊"
  }
  if (numeroIngresado > numeroAleatorio) {
    informacion.innerHTML = "Numero ingresado mayor 😑"
  }
  if (numeroIngresado < numeroAleatorio) {
    informacion.innerHTML = "Numero ingresado menor 🤐"
  }

  if (intentos == 0) {
    caja.className = "desactivar"
    boton.className = "desactivar"
    informacion.innerHTML = "Perdiste 😪"
  }
  intentos = intentos - 1
  alert("Te quedan "+intentos)

}