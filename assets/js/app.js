const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getPoke();

});
function getPoke() {
  const pokeRequest = new XMLHttpRequest(); // se crea el objeto
  pokeRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  pokeRequest.onload = addPoke;
  pokeRequest.onerror = handleError;
  pokeRequest.send();
}
function handleError() {
  console.log('Se ha presentado un error');
}

function addPoke() {
  const data = JSON.parse(this.responseText);
  // console.log(data);
  const name = data.name;
  // console.log(name);
  const height = data.height;
  // console.log(height);
  const id = data.id;
  // console.log(id);
  const imgUrl = 'https://pokeapi.co/media/sprites/pokemon/' + id + '.png' ;
  // console.log(imgUrl);
  const type = data.types[0].type.name;
  // console.log(type);
  const weight = data.weight;
  // console.log(weight);

  let li = document.createElement('li');
  let img = document.createElement('img');
  img.setAttribute('src', imgUrl);
  li.className = 'info';
  li.innerText = `${name} es de tipo ${type}, mide ${height}0 cm. y pesa ${weight}pokeKg.  ` ;
  responseContainer.appendChild(li);
  responseContainer.appendChild(img);
}
