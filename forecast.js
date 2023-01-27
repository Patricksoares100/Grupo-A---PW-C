
const apikey = "d9b9e4b6a98f4ee3b25f3f5ad4fd247e";

// funcao pesquisa cidade, API para tempo para 5 dias - cnt=5
function search_dia() {
  var city = $('#LOCALIDADE_SEARCH').val();
	$.ajax({
		method:"GET",
		url: "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&cnt=5&appid="+apikey+"&units=metric"
		 })
	.done(function(msg){
    console.log(msg);

    $('#tempmin').text(msg.list[0].main.temp_min);  /*BUSCA VALOR DE TEMPERATURA MIN NO ARRAY*/
    $('#tempmin1').text(msg.list[1].main.temp_min);
    $('#tempmin2').text(msg.list[2].main.temp_min);
    $('#tempmin3').text(msg.list[3].main.temp_min);
    $('#tempmin4').text(msg.list[4].main.temp_min);
  
    $('#tempmax').text(msg.list[0].main.temp_max); /*BUSCA VALOR DE TEMPERATURA MAX NO ARRAY*/
    $('#tempmax1').text(msg.list[1].main.temp_max);
    $('#tempmax2').text(msg.list[2].main.temp_max);
    $('#tempmax3').text(msg.list[3].main.temp_max);
    $('#tempmax4').text(msg.list[4].main.temp_max);

    $('#tempsent').text(msg.list[0].main.feels_like); /*BUSCA VALOR DE SENSAÇÃO TERMICA NO ARRAY*/
    $('#tempsent1').text(msg.list[1].main.feels_like);
    $('#tempsent2').text(msg.list[2].main.feels_like);
    $('#tempsent3').text(msg.list[3].main.feels_like);
    $('#tempsent4').text(msg.list[4].main.feels_like);

    $('#temp0').text(msg.list[0].main.temp); /*BUSCA VALOR DE TEMPERATURA ATUAL NO ARRAY*/
    $('#temp1').text(msg.list[1].main.temp);
    $('#temp2').text(msg.list[2].main.temp);
    $('#temp3').text(msg.list[3].main.temp);
    $('#temp4').text(msg.list[4].main.temp);
    $('#temp5').text(msg.list[0].main.temp);
    $('#temp6').text(msg.list[1].main.temp);
    $('#temp7').text(msg.list[2].main.temp);
    $('#temp8').text(msg.list[3].main.temp);
    $('#temp9').text(msg.list[4].main.temp);

    $('#hora').text(msg.list[0].dt_txt);  /*BUSCA VALOR DE HORA NO ARRAY*/
    $('#hora1').text(msg.list[1].dt_txt);
    $('#hora2').text(msg.list[2].dt_txt);
    $('#hora3').text(msg.list[3].dt_txt);
    $('#hora4').text(msg.list[4].dt_txt);

    
    


  })
}





