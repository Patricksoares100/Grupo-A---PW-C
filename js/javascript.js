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


function animate_string(id) {
    var element = document.getElementById(id);
    // Returns a reference to the element by its ID; the ID is a string which can be used to identify the element; it can be established using the id attribute in HTML, or from script.
    var textNode = element.childNodes[0]; // will produce the same result as the HTML content of the first child node.
    var text = textNode.data;

    setInterval(function () {
     text = text[text.length - 1] + text.substring(0, text.length - 1); 
     // The length property represents the length of a string. It returns the number of characters units in the string.
      textNode.data = text;
    }, 100);
}
