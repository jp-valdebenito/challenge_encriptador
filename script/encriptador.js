/* 
Reglas de encriptación 

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function encriptar(){
    let textoEncriptar = document.getElementById('inputTexto').value.toLowerCase();
    textoEncriptar = textoEncriptar.replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u');
    document.getElementById('tituloIndicador').style.display = "none";
    document.getElementById("imagenIndicador").style.display = "none";
    document.getElementById('textoIndicador').innerHTML = textoEncriptar.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    document.getElementById('botonCopiar').style.display = 'inline';
    return;
}

function desencriptar(){
    let textoDesencriptar = document.getElementById('inputTexto').value.toLowerCase();
    textoDesencriptar = textoDesencriptar.replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u');
    document.getElementById('tituloIndicador').style.display = "none";
    document.getElementById("imagenIndicador").style.display = "none";
    document.getElementById('textoIndicador').innerHTML = textoDesencriptar.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    document.getElementById('botonCopiar').style.display = 'inline';
    return; 
}

function copiarMensaje(){
    let valorTexto = document.getElementById('textoIndicador').innerHTML;
    navigator.clipboard.writeText(valorTexto);
    document.getElementById('tituloIndicador').style.display = "inline";
    document.getElementById("imagenIndicador").style.display = "inline";
    document.getElementById('textoIndicador').innerHTML = 'Ingresa el texto que desees encriptar o desencriptar';
    document.getElementById('botonCopiar').style.display = 'none';
    document.getElementById('textoIndicador').value = "";
    /*alert('Texto copiado exitosamente!'); */    
}