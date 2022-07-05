import React, { useEffect, useState } from "react";
import "./style.css"
import Weathercard from "./Weathercard";

const API_KEY = "INSERT YOUR API KEY HERE";

const Temp = () => {

    const [inputData, setInputData] = useState("pune");

    const [weatherData, setWeatherData] = useState({});

    const getWeatherInfo = async () => {
      try {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=${API_KEY}`;
          
          await fetch(url)
              .then((res) => res.json())
              .then((data) => {
                const { temp, humidity, pressure } = data.main;
                const { main: weathermood } = data.weather[0];
                const { name } = data;
                const { speed } = data.wind;
                const { country, sunset } = data.sys;

                const myNewWeatherInfo = {
                    temp,
                    humidity,
                    pressure,
                    weathermood,
                    name,
                    speed,
                    country,
                    sunset,
                  };

                  setWeatherData(myNewWeatherInfo);
              });

              
      } catch (error) {
          console.log(error)
      }
    }
    
    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <Weathercard weatherData={weatherData} inputData={inputData} setInputData={setInputData} getWeatherInfo={getWeatherInfo}/>
        </>
    );
};

export default Temp;
