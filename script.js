// Lleva la vista a la documentación al buscar o al pulsar "Run".
// El desplazamiento suave lo controla el CSS (scroll-behavior).
const documentacion = document.getElementById('documentacion');

function irADocumentacion(event) {
  event.preventDefault();
  documentacion.scrollIntoView();
}

document.querySelector('.search').addEventListener('submit', irADocumentacion);
document.querySelector('.run-button').addEventListener('click', irADocumentacion);
