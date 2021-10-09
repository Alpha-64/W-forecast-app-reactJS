import React, { useState, useEffect } from 'react'
import './temprature.css'
import ForecastCard from './forecastCard';

const Temprature = () => {
    
const [searchValue, setsearchValue] = useState("Lucknow");
const [tempInfo, settempInfo] = useState(""); 

const getWeatherInfo = async () => {
    try {
        let  url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=37cb45e95889899b6d24992ced793945`;

        const resp = await fetch(url);
        const data = await resp.json();

        const{ temp, humidity, /* pressure */ }= data.main
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset,sunrise } = data.sys;
        

        const updatedWeatherInfo = {
            temp,
            humidity,
            /* pressure, */
            weathermood,
            name,
            speed,
            country,
            sunrise,
            sunset
        };
        settempInfo(updatedWeatherInfo); 
}
    catch(error){
        console.log(error);
    }
};

useEffect(() => {
    getWeatherInfo();
}, [] );

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search 🌦" autoFocus id="search" className="searchTerm" 
                    value={searchValue} 
                    onChange={(e) => setsearchValue(e.target.value) } />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

          {/* our main Temprature card */}
          <ForecastCard  tempInfo={ tempInfo }/>

            
        </>
    )
}

export default Temprature
