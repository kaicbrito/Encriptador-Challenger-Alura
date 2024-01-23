let withoutText = document.getElementById("without-text");
let defaultState = document.getElementById("default");


/**
 * Encripta el texto.
 *
 * cambia la letra e por enter
 * cambia la letra i por imes
 * cambia la letra a por ai
 * cambia la letra o por ober
 * cambia la letra u por ufat
 *
 * @param texto Texto a encriptar
 * @returns texto encriptado
 */
function encriptar(texto) {
    let encriptado = texto.replace(/e/g, "enter");
    encriptado = encriptado.replace(/i/g, "imes");
    encriptado = encriptado.replace(/a/g, "ai");
    encriptado = encriptado.replace(/o/g, "ober");
    encriptado = encriptado.replace(/u/g, "ufat");
    return encriptado;
}

/**
 * Desencripta el texto.
 *
 * cambia la palabra enter por e
 * cambia la palabra imes por i
 * cambia la palabra ai por a
 * cambia la palabra ober por o
 * cambia la palabra ufat por u
 *
 * @param texto
 * @returns texto desencriptado
 */
function desencriptar(texto) {
    let desencriptado = texto.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    return desencriptado;
}

/**
 * Encripta el texto y lo establece en el elemento con id encoded.
 */
function actionEncript() {
    let text = document.getElementById("texto").value;
    document.getElementById("encoded").textContent = encriptar(text);

    withoutText.classList.remove("hide");
    defaultState.classList.add("hide");
}

/**
 * Desencripta el texto y lo establece en el elemento con id encoded.
 */
function actionDesencript() {
    let text = document.getElementById("texto").value;
    document.getElementById("encoded").textContent = desencriptar(text);

    withoutText.classList.remove("hide");
    defaultState.classList.add("hide");
}

/**
 * Obtiene el texto encriptado y lo copia al portapapeles.
 */
function copyText() {
    let text = document.getElementById("encoded").textContent;
    navigator.clipboard.writeText(text).then(r => console.log(r));
    alert("Texto copiado");
}