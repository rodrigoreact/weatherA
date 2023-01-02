import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import countries from './countries.json';
import imgDefault from '../img/03n.png';
import Fecha from './Fecha';

const WeatherApplication = () => {

    const [currentWeather, setCurrentWeather] = useState({})

    useEffect(() => {
        function success(pos) {
            const crd = pos.coords;

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=ec3f7168c60946c3164dad39de1aa4c8`)
            .then(res => setCurrentWeather(res.data))

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
        }
        

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }, [])
    
    const Kelvin = `${currentWeather.main?.temp}`
    const Farenheit = ((Kelvin - 273.15) * 9 / 5 + 32).toFixed(1)
    const Celsius = (Kelvin - 273.15).toFixed(1)

    const [isFarenheit, setIsFarenheit] = useState(false)

    let currentCountry = countries.find(function (country) {
        return country.code === `${currentWeather.sys?.country}`
    })
    
    return (
        <div className='weather__app' >
            <h1>WEATHER </h1>
            <div className='first_contain'>
          
                <div className='img_geo'>
                <Fecha />
                    {currentWeather.weather?.[0].icon ? <img src={`https://openweathermap.org/img/wn/${currentWeather.weather?.[0].icon}@2x.png`} alt="weather icon" /> : <img src={imgDefault} alt="weather icon" /> }                
                    <p><i className='bx bx-map-pin'></i> {currentWeather.name ? currentWeather.name : "city"}, {currentCountry?.name ? currentCountry?.name : "country"}</p>
                </div>
           
            </div>
          
            <div className='info_weather'>
                <div className='info temp'>
                     <p>Temp.</p>
                    <i className='bx bxs-sun'></i>
                    <p>{currentWeather.main?.temp ? (isFarenheit ? Farenheit : Celsius) : "0"}<br />{isFarenheit ? "°F" : "°C"}</p>
                </div>
                <div className='info wind'>
                    <p>Wind</p>
                    <i className='bx bxl-tailwind-css'></i>
                    <p>{currentWeather.wind?.speed ? currentWeather.wind?.speed : "0"}<br />m/s</p>
                </div>
                <div className='info cloud'>
                    <p>Humidity</p>
                    <i className='bx bxl-google-cloud'></i>
                    <p>{currentWeather.clouds?.all ? currentWeather.clouds?.all : "0"}<br />%</p>
                </div>
                <div className='info press'>
                    <p>Pressure</p>
                    <i className='bx bxs-thermometer'></i>
                    <p>{currentWeather.main?.pressure ? currentWeather.main?.pressure : "0"}<br />hPa</p>
                </div>
                <div className='button'>
                    <button onClick={() => setIsFarenheit(!isFarenheit)}><i className='bx bx-shuffle'>Cambiar a:</i>  {isFarenheit ? "°C" : "°F"} </button>                 
                </div>

            </div>
        </div>
    );
};

export default WeatherApplication;