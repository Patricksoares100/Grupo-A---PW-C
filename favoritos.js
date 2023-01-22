
const apikey = "d9b9e4b6a98f4ee3b25f3f5ad4fd247e";

function searchFavoritos() {
  var quadroDefault = $('#cidades-default').clone();
  var citys = localStorage.getItem('Favoritos').split(',');
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

