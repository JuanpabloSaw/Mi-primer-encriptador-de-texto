function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
  } else {
    muñeco.scr = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.jpg";
  } else {
    muñeco.scr = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar texto", "warning");
  }
}

function copiar() {
  let textarea = document.getElementById("texto");
  let texto = textarea.value;

  if (texto) {
    navigator.clipboard.writeText(texto).then(() => {
      swal("Texto copiado!", "El texto ha sido copiado al portapapeles", "success");
    }).catch((error) => {
      console.error("Error al copiar texto:", error);
      swal("Error", "No se pudo copiar el texto al portapapeles", "error");
    });
  } else {
    swal("Ooops!", "No hay texto para copiar", "warning");
  }
}

function formatearTexto(texto) {
  // Convertir a minúsculas
  texto = texto.toLowerCase();

  // Reemplazar caracteres acentuados por sus equivalentes sin acento
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return texto;
}

document.getElementById("texto").addEventListener("input", function () {
  this.value = formatearTexto(this.value);
});
