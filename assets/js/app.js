// 'use strict' ;
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

function addPoke(response) {
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
  const weight = data.weight;
  // console.log(weight);
  // const type = data.types[0].type.name;
  // console.log(type);
  var pokeType1 = data.types[0].type.name;
  if (data.types.length === 2) {
    var pokeType2 = data.types[1].type.name;
  } else var pokeType2 = '';
  // console.log('Type 1: ', pokeType1);
  // console.log('Type 2: ', pokeType2);
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon-species/${data.id}`,
    type: 'GET', // aca va si sube o baja get o post
    datatype: 'json'
  }).done(function(species) {
    $('.other-side').append(species.flavor_text_entries[11].flavor_text);
 });


  let li = document.createElement('li');
  let img = document.createElement('img');
  img.setAttribute('src', imgUrl);
  li.className = 'info';
  li.innerText = `${name} es de tipo ${pokeType1} , ${pokeType2} mide ${height}0 cm. y pesa ${weight} pokeKg. ` ;
  responseContainer.appendChild(li);
  responseContainer.appendChild(img);

}
