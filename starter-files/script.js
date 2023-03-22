// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
let pregunta = document.getElementById("input");
let boton = document.getElementById("button1");
function fetchAnswer(url) {
    fetch(url)
      .then (answer=> answer.json()) ;

    let ubicacion = document.getElementById("answer");
    ubicacion.innerHTML(respuesta);
}

boton.addEventListener('click', validadInput(pregunta));

function limpiar(pregunta, ubicacion) {
    setTimeout(() => {
        pregunta.innerHTML(` `);
        ubicacion.innerHTML(` `);
    }, 5000);

}
function validadInput(pregunta) {
    if (pregunta.value == "") {
        //alert("NO hay ninguna pregunta")
        console.log("NO hay ninguna pregunta");
    }
}