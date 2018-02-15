const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
});
function getNews() {
  const articleRequest = new XMLHttpRequest(); // se crea el objeto
  articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}
function handleError() {
  console.log('Se ha presentado un error');
}
function addNews() {
  const data = JSON.parse(this.responseText);
  // console.log(data);
  const name = data.name;
  console.log(name);
  const height = data.height;
  console.log(height);

  // const article = data.response.docs[0];
  // const title = article.headline.main;
  // const snippet = article.snippet;

  let li = document.createElement('li');
  li.className = 'articleClass';
  li.innerText = `${name} mide ${height}0 cm. ` ;
  responseContainer.appendChild(li);


}
