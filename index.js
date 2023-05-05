const apikey="863242cfb2b1d357e6093d9a4df19a4b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbtn=document.querySelector(".searchbtn");
const searchbox=document.querySelector(".searchbox");
var temp=document.querySelector(".temp");
var searchedcity=document.querySelector(".searchedcity");
var humidpercent= document.querySelector(".humidpercent");
var speedvalue= document.querySelector(".speedvalue");
var weathericon= document.querySelector(".weathericon")
var citylocation= document.querySelector(".citylocation");

 async function changeweather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    temp.innerHTML=Math.round(data.main.temp)+"°c";
    searchedcity.innerHTML=data.weather[0].description;
    humidpercent.innerHTML=data.main.humidity+" %";
    speedvalue.innerHTML=data.wind.speed+" km/h";
    citylocation.innerText=data.name;

    if(data.weather[0].main=="Clouds"){
      weathericon.src="images/cloudy.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="images/sunny.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="images/thunderstorm.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="images/rainy.gif";
    }
    else if(data.weather[0].main=="snow"){
        weathericon.src="images/snow.png";
    }
}

searchbtn.addEventListener("click",()=>{
    
    changeweather(searchbox.value);
})

