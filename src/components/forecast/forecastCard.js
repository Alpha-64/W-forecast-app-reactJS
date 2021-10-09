import React, { useState, useEffect } from 'react'

const ForecastCard = ({ tempInfo }) => {
    const [weatherPhase, setweatherPhase]  =useState(" ");

    const {
        temp,
        humidity,
        /* pressure, */
        weathermood,
        name,
        speed,
        country,
        sunrise,
        sunset 
    } = tempInfo;

        useEffect(() => {
            if(weathermood){
                switch (weathermood) {
                    case "Clouds": setweatherPhase("wi-day-cloudy");
                        break;
                    case "Haze": setweatherPhase("wi-day-sunny-overcast");
                        break;
                    case "Clear": setweatherPhase("wi-day-sunny");
                        break;     
                    case "Rain": setweatherPhase("wi-day-rain");
                        break;

                    default:  setweatherPhase("wi-day-haze");
                        break;
                }
            }
         }, [weathermood]);


    /* converting time into minutes */
    let sec = sunset;
        let date = new Date(sec * 1000);
        let timeStr = `${date.getHours()} : ${date.getMinutes()}`
    let min = sunrise;
        const newDate = new Date(min * 1000);
        let rise = `${newDate.getHours()} : ${newDate.getMinutes()}` 
    return (
        <>
              {/* our Main Temprature card */}
              <article className="widget">
              <div className="weatherIcon">
                  <i className={`wi ${weatherPhase}`}></i>
              </div>
              <div className="weatherInfo">
                  <div className="temperature">
                      <span>{temp}&deg;</span>
                  </div>
                  <div className="description">
                      <div className="weatherCondition">{weathermood}</div>
                      <div className="place">{name} , {country}</div>
                  </div>
              </div>
              <div className="date">{new Date().toLocaleString()}</div>
              
              {/* bottom  section */}

              <div className="extra-temp">
              <div className="temp-info-minmax">
                  <div className="two-sided-section">
                      <p><i className={"wi wi-humidity"}></i></p>
                      <p className="extra-info-leftside">{humidity}<br />Humidity</p>
                  </div>
                  <div className="two-sided-section">
                      <p><i className={"wi wi-rain"}></i></p>
                      <p className="extra-info-leftside">{timeStr} <br />sunset</p>
                  </div>
              </div>
              <div className="weather-extra-info">
              <div className="two-sided-section">
              <p><i className={"wi wi-rain"}></i></p>
              <p className="extra-info-leftside">{rise}<br />Sunrise</p>
          </div>
          <div className="two-sided-section">
                      <p><i className={"wi wi-strong-wind"}></i></p>
                      <p className="extra-info-leftside">{speed} <br />Speed</p>
                  </div>
              </div>
              </div>
          </article>
        </>
    )
}

export default ForecastCard
