
"use strict";

const KELVIN_0C = 273.15;

// ----------------------------------------
//                TABELA
// ----------------------------------------

const CITY_LBL_A = 0;
const CITY_DROP_A = 1;
const TEMP_LBL_A = 2;
const TEMP_VAL_A = 3;
const ICON_COL_A = 4;

const CITY_LBL_B = 6;
const CITY_DROP_B = 7;
const TEMP_LBL_B = 8;
const TEMP_VAL_B = 9;
const ICON_COL_B = 10;

const SPACE_COL = 5;

const CITY_1 = "s+cell_0_" + CITY_DROP_A;
const CITY_2 = "s+cell_0_" + CITY_DROP_B;
const CITY_3 = "s+cell_1_" + CITY_DROP_A;
const CITY_4 = "s+cell_1_" + CITY_DROP_B;
const CITY_5 = "s+cell_2_" + CITY_DROP_A;
const CITY_6 = "s+cell_2_" + CITY_DROP_B;

// ----------------------------------------

var CitiesPT;  // [{nome: c_name, long: longitude, lat: latitude}]

// ----------------------------------------
async function mainfav(citiesTblId) {

   CitiesPT = await fill_citiesPT();
   CitiesPT.sort(compareCities);
   
   // --- função para inicar o header marquee
   create_header_marquee();

   // --- tabela funcional
   create_cities_table(citiesTblId, 3, 11);
}

// -------------------------------------
function create_header_marquee() {

   let header_city = document.getElementById('header_city');
   let dropboxHTML = create_city_dropbox('header_dropbx', 'update_header');
   header_city.innerHTML = dropboxHTML;

   let ixLeiria = ix_city('Leiria');
   let dropbox = header_city.firstElementChild;
   dropbox.selectedIndex = ixLeiria;
   update_header(dropbox);
}

// -------------------------------------
async function update_header(dropbox) {

   let city = dropbox.value;   
   let weather =  await current_weather(city);

   let tempt = weather.main.temp - KELVIN_0C;
   let header_temp = document.getElementById('header_temp');
   header_temp.innerHTML = tempt.toFixed(0) + " &deg;C";

   let tempt_max = weather.main.temp_max -  - KELVIN_0C;
   let header_temp_max = document.getElementById('header_temp_max');
   header_temp_max.innerHTML = tempt.toFixed(0) + " &deg;C";

   let tempt_min = weather.main.temp_min -  - KELVIN_0C;
   let header_temp_min = document.getElementById('header_temp_min');
   header_temp_min.innerHTML = tempt.toFixed(0) + " &deg;C";
}

// -------------------------------------
function ix_city(city_name) {

   for (var ix =0; ix< CitiesPT.length; ++ix) 
      if (city_name == CitiesPT[ix].name) return ix+1;

   return -1;  // se não for encontrado
}

// -------------------------------------
async function fill_citiesPT() {

   var cities_pt = [];
   // Retirar cidades dos CONCELHOS
   for (var i=0; i<CONCELHOS.length; ++i) {

      var city = CONCELHOS[i].designacao;

      cities_pt.push({
         'lat':   0,
         'long':  0, 
         'name': city
      });
   }

   return cities_pt;
}

// -------------------------------------
function compareCities(cityA, cityB) {

   if (cityA.name > cityB.name) return 1;
   if (cityA.name < cityB.name) return -1;
   return 0;
}

// ----------------------------------
async function create_cities_table(tblId, nRows, nCols) {

   let cell_text = null;
   let tbl = document.getElementById(tblId);

   for(let irow = 0; irow < nRows; irow++){
      let tr = tbl.insertRow();

      for(let icol = 0; icol < nCols; icol++) {
         let td = tr.insertCell();
         let cell_id = "cell_" + irow + "_" + icol; 
         td.id = cell_id;

         switch (icol) {
            case CITY_LBL_A:
            case CITY_LBL_B:  // Cidade
               cell_text = "Cidade:";
               td.className = "city_lbl"; 
               break;

            case CITY_DROP_A:
            case CITY_DROP_B:  // Selecionador de Cidades
               td.className = "city_name"; 
               break;

            case TEMP_LBL_A:
            case TEMP_LBL_B:  // Temperatura
               cell_text = "Temp:";
               td.className = "temp_lbl"; 
               break;
      
            case TEMP_VAL_A:
            case TEMP_VAL_B: // Valor da Temperatura
               cell_text = "";
               td.className = "temp_value"; 
               break;

            case ICON_COL_A:
            case ICON_COL_B:  // Ícone da Chuva
               cell_text = " ";
               td.className = "rain_icon"; 
               break;
      
            case SPACE_COL:  // Espaço vazio no centro
               cell_text = " ";
               td.className = "center_spacing"; 
               break;
         }  // switch(icol)

         if (icol == CITY_DROP_A || icol == CITY_DROP_B) {
            // Dropbox dentro do Espaço/Célula do nome das cidades
            td.innerHTML = create_city_dropbox(td.id);
         } else { 
            // Etiquetas
            td.innerHTML = cell_text;
         }

      }  
   }   

   // --- Preencher a dropbox que apaga os favoritos ---
   let dropbox = document.getElementById("delete_fav_box");

   let counter = 0;
   CitiesPT.forEach(city => {
      let opt = document.createElement("option");
      opt.value = counter++;
      opt.innerHTML = city.name;
      dropbox.appendChild(opt);
   });

  //  Devolver cidades favoritas
  await favorite_cities();
}

// ----------------------------------
async function save_favorites() {

   var ix;
   var city;
   var dropb;
      // Guardar cada uma das cidades posta como favoritos
   dropb = document.getElementById(CITY_1);
   ix = dropb.selectedIndex; 
   localStorage.setItem(CITY_1, ix);
   if (ix > 0) {
      city = CitiesPT[ix-1].name;
      localStorage.setItem("fav1", city);
   }

   dropb = document.getElementById(CITY_2);
   ix = dropb.selectedIndex;
   localStorage.setItem(CITY_2, ix);
   if (ix > 0) {
      city = CitiesPT[ix-1].name;
      localStorage.setItem("fav2", city);
   }

   dropb = document.getElementById(CITY_3);
   ix = dropb.selectedIndex;
   localStorage.setItem(CITY_3, ix);
   city = CitiesPT[ix];
   if (ix > 0) {
      city = CitiesPT[ix-1].name;
      localStorage.setItem("fav3", city);
   }

   dropb = document.getElementById(CITY_4);
   ix = dropb.selectedIndex;
   localStorage.setItem(CITY_4, ix);
   city = CitiesPT[ix];
   if (ix > 0) {
      city = CitiesPT[ix-1].name;
      localStorage.setItem("fav4", city);
   }
   
   dropb = document.getElementById(CITY_5);
   ix = dropb.selectedIndex;
   localStorage.setItem(CITY_5, ix);
   city = CitiesPT[ix];
   if (ix > 0) {
      city = CitiesPT[ix-1].name;
      localStorage.setItem("fav5", city);
   }

   dropb = document.getElementById(CITY_6);
   ix = dropb.selectedIndex;
   localStorage.setItem(CITY_6, ix);
   city = CitiesPT[ix];
   if (ix > 0) {
      city = CitiesPT[ix-1].name;
      localStorage.setItem("fav6", city);
   }


}

// -------------------------------------
function show_favorites() {

   //    IR BUSCAR FAVORITOS
   var fav1 = localStorage.getItem("fav1");
   var fav2 = localStorage.getItem("fav2");
   var fav3 = localStorage.getItem("fav3");
   var fav4 = localStorage.getItem("fav4");
   var fav5 = localStorage.getItem("fav5");
   var fav6 = localStorage.getItem("fav6");

   if (fav1) console.log("fav1: " + fav1);
   if (fav2) console.log("fav2: " + fav2);
   if (fav3) console.log("fav3: " + fav3);
   if (fav4) console.log("fav4: " + fav4);
   if (fav5) console.log("fav5: " + fav5);
   if (fav6) console.log("fav6: " + fav6);
}

// ----------------------------------
async function favorite_cities() {

   let ix, city, dropbox, weather;

   ix = localStorage.getItem(CITY_1);
   dropbox = document.getElementById(CITY_1);
   refresh_city_weather(ix, dropbox);

   ix = localStorage.getItem(CITY_2);
   dropbox = document.getElementById(CITY_2);
   refresh_city_weather(ix, dropbox);

   ix = localStorage.getItem(CITY_3);
   dropbox = document.getElementById(CITY_3);
   refresh_city_weather(ix, dropbox);
   
   ix = localStorage.getItem(CITY_4);
   dropbox = document.getElementById(CITY_4);
   refresh_city_weather(ix, dropbox);
   
   ix = localStorage.getItem(CITY_5);
   dropbox = document.getElementById(CITY_5);
   refresh_city_weather(ix, dropbox);
   
   ix = localStorage.getItem(CITY_6);
   dropbox = document.getElementById(CITY_6);
   refresh_city_weather(ix, dropbox);
}

// ----------------------------------
async function refresh_city_weather(ix, dropbox) {

   dropbox.selectedIndex = ix;
   let city = dropbox.value;
   if (city.length == 0) return;

   let weather = await current_weather(city);

   let icon = null;
   if (weather.weather != undefined) 
      icon = weather.weather[0].icon;

   let tempt = null;
   if (weather.main != undefined) 
      tempt = weather.main.temp - KELVIN_0C;

   do_update_city_weather(dropbox.id, tempt, icon);
}

// ----------------------------------
async function update_city_weather( dropbox ) {

   let city = dropbox.value;
   if (city.length == 0) return;

   let weather = await current_weather(city);

   let icon = null;
   if (weather.weather != undefined) 
      icon = weather.weather[0].icon;

   let tempt = null;
   if (weather.main != undefined) 
      tempt = weather.main.temp - KELVIN_0C;

   do_update_city_weather(dropbox.id, tempt, icon);
   save_favorites();
}

// ----------------------------------
async function do_update_city_weather(city_id, tempt, icon) {

   // --- Coordenadas no Espaço/Célula ---
   let dropb_id = city_id;
   let id_split = dropb_id.split('_');
   let xrow = id_split[1];
   let xcol = id_split[2];

   // --- Temperatura no Espaço/Célula --- 

   if (tempt) {
      let tempt_col;
      if (xcol == CITY_DROP_A) tempt_col = TEMP_VAL_A;
         else if (xcol == CITY_DROP_B) tempt_col = TEMP_VAL_B;
            else { alert("Invalid icol!"); return; } 
   
      let tempt_cell = "cell_" + xrow + "_" + tempt_col;
      let cell = document.getElementById(tempt_cell);
      
      cell.innerHTML = tempt.toFixed(0) + " &deg;C";
   }

   // --- Ícone Clima ---
   if (icon) {
      let icon_col;
      if (xcol == CITY_DROP_A) icon_col = ICON_COL_A;
         else if (xcol == CITY_DROP_B) icon_col = ICON_COL_B;
            else { alert("Invalid icol!"); return; } 

      let icon_cell = "cell_" + xrow + "_" + icon_col;
      let cell = document.getElementById(icon_cell);

      let icon_file = "https://openweathermap.org/img/wn/" +icon + "@2x.png"
      cell.innerHTML = '<img src="' + icon_file + '">';
   }
}

// ----------------------------------
function create_city_dropbox(cellId, callback = "update_city_weather") {

   // Criar Dropbox para a tabela
   let dropb = '<select '
      + ' id="s+' + cellId + '"'
      + ' name="n_' + cellId + '"'
      + ' onchange="' + callback + '(this)" '
      + ' class="cities_dropbox"> '
      + '<option value="">' 
      + '    ' +  '</option>';

   // Inserir dentro da Dropbox
   CitiesPT.forEach(city => {
   
      let city_name = city.name;
      dropb += '<option value="' + city_name + '">' +
      city_name + '</option>';
   });
   dropb += "</select>";

   return dropb;
}


// ----------------------------------
function del_favorite(dropbox) {

   var ix = dropbox.selectedIndex;

   var dbox;
   dbox = document.getElementById(CITY_1);
   if (dbox.selectedIndex == ix) dbox.selectedIndex = 0;

   dbox = document.getElementById(CITY_2);
   if (dbox.selectedIndex == ix) dbox.selectedIndex = 0;

   dbox = document.getElementById(CITY_3);
   if (dbox.selectedIndex == ix) dbox.selectedIndex = 0;

   dbox = document.getElementById(CITY_4);
   if (dbox.selectedIndex == ix) dbox.selectedIndex = 0;
   
   dbox = document.getElementById(CITY_5);
   if (dbox.selectedIndex == ix) dbox.selectedIndex = 0;

   dbox = document.getElementById(CITY_6);
   if (dbox.selectedIndex == ix) dbox.selectedIndex = 0;

   save_favorites();
}
