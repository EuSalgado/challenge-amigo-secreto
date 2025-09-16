// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const inputElement = document.getElementById('amigo');
  const nombreAmigo = inputElement.value;

  if (nombreAmigo.trim() === '') {
    alert('Por favor, inserte un nombre');
  } else {
    amigos.push(nombreAmigo);
    inputElement.value = '';
    actualizarAmigos();
  }
}

function actualizarAmigos() {
  const lista = document.querySelector('.name-list');
  lista.innerHTML = '';

  for (let amigo of amigos) {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = amigo;
    lista.appendChild(nuevoElemento);
  }
}
