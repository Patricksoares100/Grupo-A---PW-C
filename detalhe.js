
const apikey = "d9b9e4b6a98f4ee3b25f3f5ad4fd247e";

// funcao pesquisa cidade, API para tempo atual
function search() {
  var city = $('#LOCALIDADE_SEARCH').val();
  $.ajax({
  method:"GET",
  url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric"
})
.done(function(msg){
console.log(msg);

//vai buscar a informação relativa à cidade escolhida atraves da API com o método GET
$('#temperatura').text(msg.main.temp);
$('#temp_max').text(msg.main.temp_max);
$('#temp_min').text(msg.main.temp_min);
$('#vento').text(msg.wind.speed);
$('#nuvens').text(msg.clouds.all);
$('#press_atmos').text(msg.main.pressure);
$('#humidade').text(msg.main.humidity);
$('#coord_geo_lat').text(msg.coord.lat);
$('#coord_geo_lon').text(msg.coord.lon);
})
}


//GPS - tentativa de puxar localização de GPS atual

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
