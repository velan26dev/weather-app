import React, { useEffect, useState } from 'react'
import './weather.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

const Weather = () => {

    const[city, setCity]=useState("")
    const [weatherData, setWeatherData] = useState(false)
    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    }

    const search = async (city) => {
        if (city === "") {
            alert("Enter City Name...");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                location: data.name,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                icon: icon
            });
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching Weather data");  
        } 
    }
    
    useEffect(() => {
        search("Chennai");
    }, [])

  return (
      <>
          <section className='container'>
              <div className='weather'>
                  <div className='search-box'>
                      <input type="text" placeholder='Search City' value={city} onChange={(e)=>setCity(e.target.value)}/>
                      <img src={search_icon} alt="search" onClick={() => {search(city); setCity("")}} />
                  </div>
                  {weatherData ? <>
                    <img src={weatherData.icon} alt="weather-icon" />
                    <p className='temperature'>{weatherData.temperature} &deg;C</p>
                    <p className='city'>{weatherData.location}</p>
                    <div className='weather-data'>
                        <div className='col'>
                            <img src={humidity_icon} alt="humidity" />
                            <div>
                                <p>{weatherData.humidity} %</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className='col'>
                            <img src={wind_icon} alt="wind" />
                            <div>
                                <p>{weatherData.windSpeed} Km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                  </> : <>
                    <h1 id='error'>Something is problem...☹️</h1>
                  </>}
                  
              </div>
          </section>
      </>
  )
}

export default Weather