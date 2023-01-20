
const apikey = "d9b9e4b6a98f4ee3b25f3f5ad4fd247e";


// funcoes

/*const mostrartempobasedados = async (cidade) =>{
  const data = await mostrartempobasedados(cidade);

  elementoCidade.innerText = data.name;
}
*/


// funcao pesquisa cidade

function search() {
	var city = document.getElementById('LOCALIDADE').value;
	$.ajax({
		method:"GET",
		url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d9b9e4b6a98f4ee3b25f3f5ad4fd247e&units=metric"
		 })
	.done(function(msg){
		console.log(msg);

    /* displayweather: function(data){
      const{ name } = data;
      const { icon, description} = data.weather[0];
      const {temp, humidity } = data.main;
      const {speed} = data.wind;
      console.log(name,icon,description,temp,humidity,speed)
      document.querySelector(".city").innerText = "weather in" + name;
      document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + "@2x.png;" 
    }*/
    return msg;
})
}

fetch('https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d9b9e4b6a98f4ee3b25f3f5ad4fd247e&units=metric')
  .then(response => response.json())
  .then(data => {
    console.log(data.main.temp)
    // filtrando os dados pela chave "name"
    const filteredData = data.filter(item => item.name === "LOCALIDADE");
    // iterando pelos dados filtrados
    filteredData.forEach(item => {
      const { name, temp, pressure } = item;
      // criando elementos dinamicamente
      const elementName = document.createElement("p");
      elementName.innerHTML = name;
      const elementTemp = document.createElement("p");
      elementTemp.innerHTML = temp;
      const elementPressure = document.createElement("p");
      elementPressure.innerHTML = pressure;
      // adicionando elementos ao elemento pai
      const parent = document.getElementById("result");
      parent.appendChild(elementName);
      parent.appendChild(elementTemp);
      parent.appendChild(elementPressure);
    });
  })
  .catch(error => console.error(error))


//exemplo dado na aula de rodar texto corrido
function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; 
    var text = textNode.data;
    setInterval(function () {
     text = text[text.length - 1] + text.substring(0, text.length - 1);      
      textNode.data = text;
    }, 100);
}

//mostrartempo: (resp) 
/*$('.addToFavBtn').on('click', event => {
  var cidade = $(event.target).parents()[1].firstElementChild.innerHTML;

  var favorites = localStorage.getItem("favorites");
  if (!favorites){
    localStorage.setItem("favorites", JSON.stringify({stores:[]}));
    favorites = JSON.parse(localStorage.getItem("favorites"));*/

// data e hora - a resolver 
// new Date() cria 1 objeto com a data e hora atual
/*const d = new Date();
document.getElementById("demo").innerHTML = d;*/

//GPS W3SCHOOL

var x = document.getElementById("GPS");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}