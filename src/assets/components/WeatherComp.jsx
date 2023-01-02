import React from 'react';
import { useState, useEffect } from 'react';
import WeatherApplication from './WeatherApplication';


const WeatherComp = () => {

    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
        }, 3000)

    }, [])

    return (
        <div className='card'>
            <div className='weather__card'>
                {load ?
                    <i className='bx bxl-google-cloud bx-tada bx-lg' ></i> :
                    <WeatherApplication />}
            </div>
        </div>
    );
};

export default WeatherComp;