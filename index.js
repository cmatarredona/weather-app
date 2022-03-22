async function searchCityTime(city){
    const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b41e50be3526e41030f1dff9d160061`);
    return await result.json();
}
function fahToCel(fah){
    return Math.floor((fah-32)*5/9);
}
async function displayCityTime(cityJSON){
    const datos=await cityJSON;
    console.log(datos);
    document.getElementById("datos").innerHTML=`
    <h1>${datos.name} ${datos.sys.country}</h1>
    <p>${datos.weather[0].main}</p>
    <p>${datos.wind.speed}Km/h</p>
    <p>Temperatura actual ${fahToCel(datos.main.temp)}ºC</p>
    <p>Temperatura máxima ${fahToCel(datos.main.temp_max)}ºC</p>
    <p>Temperatura mínima ${fahToCel(datos.main.temp_min)}ºC</p>

    `;
}
searchCityTime("Madrid");
document.forms.search.addEventListener(
    "submit",
    (e)=>{
        e.preventDefault();
        displayCityTime(searchCityTime(e.target.city.value));
        document.forms.search.reset();
    }
)