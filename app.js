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

function sortearAmigo() {
  const lista = document.querySelector('.name-list');
  const elementoResultado = document.getElementById('resultado');

  if (amigos.length > 1) {
    const indiceAzar = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAzar];
    lista.innerHTML = '';

    elementoResultado.textContent = `¡El amigo sorteado es ${amigoSorteado}!`;
  } else alert('Por favor agregue a más de un amigo');
}
