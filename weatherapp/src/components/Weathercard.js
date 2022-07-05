import React from "react";

const Weathercard = ({weatherData, inputData, setInputData, getWeatherInfo}) => {
    return <>
        <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search ... " autoFocus id="search" className="searchTerm" value={inputData} onChange={(event) => setInputData(event.target.value)}/>
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{weatherData.temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">Sunny</div>
                        <div className="place">Pune, IN</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:09 PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:09 PM <br />
                                Sunset
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:09 PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:09 PM <br />
                                Sunset
                            </p>
                        </div>
                    </div>
                </div>
            </article>
    </>;
};

export default Weathercard;
