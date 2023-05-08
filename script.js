const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function btnDesEncriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function btnCopiar(){
    const textoCopiar = document.querySelector(".mensaje");
    textoCopiar.select();
    document.execCommand('copy');
}

//Encripta el texxto
function encriptar(stringEncriptado){
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCode.length; i++){
        if(stringEncriptado.includes(matrizCode[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }
    return stringEncriptado;
}

//Desencripta el texto
function desencriptar(stringDesencriptado){
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCode.length; i++){
        if(stringDesencriptado.includes(matrizCode[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }
    return stringDesencriptado;
}
