const inputbox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weather-img");
const temperture=document.querySelector(".temp");
const desc=document.querySelector(".descrption");
const humidity=document.querySelector(".humidity")
const windspeed=document.querySelector(".wind")


async function checkweather(city){
    const api_key="cdcff2ee0ee5bdc2d7438e2e627273e3";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    

    const weather_data=await fetch(`${url}`).then(response =>
    response.json());
    
    temperture.innerHTML=`${Math.round(weather_data.main.temp -273.15)}°C`;
    desc.innerHTML=`${weather_data.weather[0].descrption}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    windspeed.innerHTML=`${weather_data.wind.speed}KM/H`;
    

    switch(weather_data.weather[0].main){
        case  'Clouds':
            weather_img.src="/assets/cloud.png";
            break;
        case  'Clear':
            weather_img.src="/assets/clear.png";
            break;
        case  'Rain':
            weather_img.src="/assets/rain.png";
            break;
        case  'Mist':
            weather_img.src="/assets/mist.png";
            break;
        case  'Snow':
            weather_img.src="/assets/snow.png";
            break;
    }
};




 searchBtn.addEventListener("click",()=>{
    checkweather(inputbox.value);
 });