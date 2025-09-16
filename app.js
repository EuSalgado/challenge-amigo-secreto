// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigo = '';

function agregarAmigo() {
  const inputElement = document.getElementById('amigo');
  const nombreAmigo = inputElement.value;

  if (nombreAmigo.trim() === '') {
    alert('Por favor, inserte un nombre');
  } else {
    amigos.push(amigo);
    inputElement.value = '';
  }
}
