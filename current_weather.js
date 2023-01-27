
// ------------------------------------------------------------
//                CURRENT WEATHER
// ------------------------------------------------------------

async function get_openWeather(url) {

   const response = await fetch(url);
   const answ = response.json();

   return answ;
 }

// ------------------------------------------------
async function current_weather( city ) {

   const API_KEY = "d9b9e4b6a98f4ee3b25f3f5ad4fd247e"; // ok

   try {
       let url = "https://api.openweathermap.org/data/2.5/weather?q="
         + city + "&appid=" 
         + API_KEY;

      const weather = await get_openWeather(url);
      return weather;

   } catch(err) {
       console.log(err);
       return null;
      }
};

// ------------------------------------------------------------
//             GEOLOCALIZAÇÃO
// ------------------------------------------------------------

async function success(pos) {

   const coords = pos.coords;
   console.log('Your current position is:');
   console.log(`Latitude : ${coords.latitude}`);
   console.log(`Longitude: ${coords.longitude}`);
   console.log(`More or less ${coords.accuracy} meters.`);
}
 
// ------------------------------------------------
function error(err) {
   console.log(`ERROR(${err.code}): ${err.message}`);
}
 
// ------------------------------------------------
function getLocation() {

   const gps_options = {
      maximumAge: 0,
      timeout: 10000,
      enableHighAccuracy: true,
   };
   
   console.log("Hello!");
   navigator.geolocation.getCurrentPosition(success, error, gps_options);
} 

