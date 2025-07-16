import React from 'react'
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
  return (
      <>
          <section className='container'>
              <div className='weather'>
                  <div className='search-box'>
                      <input type="text" placeholder='Search City' />
                      <img src={search_icon} alt="search" />
                  </div>
                  <img src={clear_icon} alt="weather-icon" />
                  <p className='temperature'>16 &deg;C</p>
                  <p className='city'>Chennai</p>
                  <div className='weather-data'>
                      <div className='col'>
                          <img src={humidity_icon} alt="humidity" />
                          <div>
                            <p>91 %</p>
                            <span>Humidity</span>
                          </div>
                      </div>
                      <div className='col'>
                          <img src={wind_icon} alt="wind" />
                          <div>
                            <p>3.6 Km/h</p>
                            <span>Wind Speed</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Weather