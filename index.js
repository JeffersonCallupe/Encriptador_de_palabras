
function encriptar(){
    let texto = document.getElementById("input_texto").value;

    if (/[^a-z\s]/.test(texto)) {
        alert("Solo letras en minúscula y sin acentos");
        return;
    }

    let texto_encriptado = document.getElementById("dato_encriptado");
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let copyButton = document.getElementById("copy");

    let texto_cifrado = texto 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    
    if (texto.length != 0){
        texto_encriptado.value = texto_cifrado; 
        titulo.textContent = "";
        parrafo.textContent=""; 
        muñeco.style.display = "none";
        if(copyButton.style.display = "none"){
            copyButton.style.display = "block";
        }
        input_texto.value='';
    }else{
        titulo.textContent = "Ningún mensaje encontrado";
        parrafo.textContent="Ingresa el texto que desees encriptar o desencriptar."; 
        muñeco.style.display = "block";
        dato_encriptado.value='';
        copyButton.style.display = "none";
    }
}


function copiar() {
    
    let texto_encriptado = document.getElementById("dato_encriptado");

    let wasDisabled = texto_encriptado.disabled;
    if (wasDisabled) {
        texto_encriptado.disabled = false;
    }
    texto_encriptado.select();
    texto_encriptado.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    if (wasDisabled) {
        texto_encriptado.disabled = true;
    }

    alert("Texto copiado:  " + texto_encriptado.value);
}



function desencriptar(){
    let texto = document.getElementById("input_texto").value;
    let texto_desencriptado = document.getElementById("dato_encriptado");
    let copyButton = document.getElementById("copy");

    let texto_descifrado = texto 
        .replace(/enter/gi, "e")
        .replace(/mes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0){
        texto_desencriptado.value = texto_descifrado; 
        titulo.textContent = "";
        parrafo.textContent=""; 
        muñeco.style.display = "none";
        if(copyButton.style.display = "none"){
            copyButton.style.display = "block";
        }
        input_texto.value='';
    }else{
        titulo.textContent = "Ningún mensaje encontrado";
        parrafo.textContent="Ingresa el texto que desees encriptar o desencriptar."; 
        muñeco.style.display = "block";
        dato_encriptado.value='';
        copyButton.style.display = "none";
    }
}