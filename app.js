let respuesta = document.querySelector(".MensajeUsuario");

function Encriptar() {
    let textEncriptar = document.getElementById("TextoUsuario").value;
    let aviso = document.querySelector(".Texto-aviso");
    let contenido = document.querySelector(".ResultadoContenedor");
    let btnCopiar = document.getElementById("copiar");

    // Normalizar el texto y reemplazar caracteres especiales
    let txt = textEncriptar.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ").trim();

    aviso.style.background = "";
    aviso.style.color = "";
    aviso.style.fontWeight = "";
    aviso.textContent = "";

    let textoCifrado = textEncriptar
        .replace(/e/gi, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "uftar");

    if (textEncriptar.trim() === "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío!";
        
        setTimeout(() => {
            aviso.style.background = "";  
            aviso.style.color = "";
            aviso.style.fontWeight = "";
            aviso.textContent = ""; 
        }, 1500);

    } else if (textEncriptar !== textEncriptar.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No se permiten mayúsculas";
        
        setTimeout(() => {
            aviso.style.background = "";  
            aviso.style.color = "";
            aviso.style.fontWeight = "";
            aviso.textContent = "";  
        }, 1500);

    } else if (textEncriptar !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No se permiten acentos ni caracteres especiales";
        
        setTimeout(() => {
            aviso.style.background = "";  
            aviso.style.color = "";
            aviso.style.fontWeight = "";
            aviso.textContent = "";  
        }, 1500);

    } else {

        respuesta.value = textoCifrado;
        
        if (contenido) {
            contenido.remove();
            btnCopiar.style.visibility = "inherit";
        }
    }
}

function Desencriptar(){
    let textEncriptar = document.getElementById("TextoUsuario").value;
    let aviso = document.querySelector(".Texto-aviso");
    let respuesta = document.querySelector(".MensajeUsuario");
    let contenido = document.querySelector(".ResultadoContenedor");

 
    let txt = textEncriptar.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ").trim();


    aviso.style.background = "";
    aviso.style.color = "";
    aviso.style.fontWeight = "";
    aviso.textContent = "";

   
    let textoCifrado = textEncriptar
        .replace(/enter/gi, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/uftar/g, "u");

    
    if (textEncriptar.trim() === "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío!";
        
        setTimeout(() => {
            aviso.style.background = "";  
            aviso.style.color = "";
            aviso.style.fontWeight = "";
            aviso.textContent = ""; 
        }, 1500);

    } else if (textEncriptar !== textEncriptar.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No se permiten mayúsculas";
        
        setTimeout(() => {
            aviso.style.background = "";  
            aviso.style.color = "";
            aviso.style.fontWeight = "";
            aviso.textContent = "";  
        }, 1500);

    } else if (textEncriptar !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No se permiten acentos ni caracteres especiales";
        
        setTimeout(() => {
            aviso.style.background = "";  
            aviso.style.color = "";
            aviso.style.fontWeight = "";
            aviso.textContent = "";  
        }, 1500);

    } else {
    
        respuesta.value = textoCifrado;

        if (contenido) {
            contenido.remove(); 
        }
    }
}

function Copiar(){
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy")
}