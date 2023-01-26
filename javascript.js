
const apikey = "d9b9e4b6a98f4ee3b25f3f5ad4fd247e";
const citys = ["Leiria","Porto","Lisboa","Coimbra","Faro","Braga"];


//A chamar onLoad
function init() {
  //animate_string();
  getInicialCityData();
}

/*//leiria topo
function search() {
  var city = $('#lOCAL_LEIRIA').val();
	$.ajax({
		method:"GET",
		url: "https://api.openweathermap.org/data/2.5/weather?lat={39.7436}&lon={-8.8071}&appid="+apikey+"&units=metric"
		 })
	.done(function(msg){
    console.log(msg);
  })
}*/

// funcao pesquisa cidade

function search() {
	//var city = document.getElementById('').value;
  var city = $('#LOCALIDADE_SEARCH').val();
	$.ajax({
		method:"GET",
		url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric"
		 })
	.done(function(msg){
    console.log(msg);

    var cloneCard = $('#cidades-default').clone();
    // const icon = "http://openweathermap.org/img/wn/"

    $('#city', cloneCard).text(msg.name);
    $('#temp', cloneCard).text(msg.main.temp);
    $('#wind', cloneCard).text(msg.wind.speed);
    $('#humidity', cloneCard).text(msg.main.humidity);
    
    
    $('#search-result').append(cloneCard);	
})
}




function getInicialCityData() {
  var quadroDefault = $('#cidades-default').clone();
  citys.forEach(c => {
    $.ajax({
      method:"GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid="+apikey+"&units=metric"
       })
    .done(function(msg){
      var quadro = quadroDefault.clone();
      
    $('#city', quadro).text(msg.name);
    $('#temp', quadro).text(msg.main.temp);
    $('#wind', quadro).text(msg.wind.speed);
    

    $('#default-citys').append(quadro);
    
    
    });
});
}




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

function addFavoritos() {
  var old = JSON.parse(localStorage.getItem('Favoritos'));
  var city = $('#LOCALIDADE_SEARCH').val();
  //VER COMO GUARDAR AS VARIAS CIDADES NO LOCAL STORAGE
  // if(old){
  // VEr se quantodade =< 6
  //   localStorage.setItem('Favoritos',old.append(city));
  // } else {
  //   localStorage.setItem('Favoritos',JSON.stringify(city));
  // }
  localStorage.setItem('Favoritos',['Leiria','Porto','Braga']);
}
