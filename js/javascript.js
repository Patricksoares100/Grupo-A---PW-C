function search() {
	var city = document.getElementById('LOCALIDADE').value;
	$.ajax({
		method:"GET",
		url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d9b9e4b6a98f4ee3b25f3f5ad4fd247e&units=metric"
		 })
	.done(function(msg){
		console.log(msg);
})
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
