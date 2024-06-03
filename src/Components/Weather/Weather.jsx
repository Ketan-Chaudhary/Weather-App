import React, { useEffect, useState } from "react";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { RiHazeFill } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";
import { IoMdSunny } from "react-icons/io";
let WEATHER_API_KEY = "0b2c554bf6ae854fe89082ed78da00c5";

const Weather = () => {
  const [place, setPlace] = useState("Jabalpur");
  const [placeData, setPlaceData] = useState(null);
  const currenTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    // hour12: true
  });
  const getWeatherData = async () => {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    if (place && place.length > 0) {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${WEATHER_API_KEY}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log("GET WEATHER DATA RESPONSE ", data);
        setPlaceData(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <section className="w-wrapper">
      <div className="w-container">
        <div className="search">
          <input
            type="search"
            placeholder="Enter the city Name"
            onChange={(e) => setPlace(e.target.value)}
          />
          <button onClick={getWeatherData}>
            <FaSearch size={22} />
          </button>
        </div>

        {placeData && (
          <div className="row">
            <div className="section1">
              <div className="section11">
                {placeData.weather[0].main === "Clouds" && (
                  <FaCloudSun className="weatherIcon" />
                )}
                {placeData.weather[0].main === "Haze" && (
                  <RiHazeFill className="weatherIcon" />
                )}
                {placeData.weather[0].main === "Smoke" && (
                  <WiSmoke className="weatherIcon" />
                )}
                {placeData.weather[0].main === "Clear" && (
                  <IoMdSunny className="weatherIcon" />
                )}

                <p className="temperature">
                  {(placeData?.main.temp - 273.15).toFixed(1)} deg Celcius
                </p>
              </div>
              <div className="section11">
                <p className="city">{placeData?.name}</p>
                <p className="wtype">{placeData?.weather[0].main}</p>
              </div>
            </div>
            <div className="time">
              <p className="timepara">{currenTime}</p>
            </div>
          </div>
        )}

        {placeData && (
          <div className="section2">
            <div className="section21">
              <p className="head1">Temperature</p>
              <p className="head2">
                {(placeData?.main.temp - 273.15).toFixed(1)} deg Celcius
              </p>
            </div>

            <div className="section21">
              <p className="head1">Temperature Min</p>
              <p className="head2">
                {(placeData?.main.temp_min - 273.15).toFixed(1)} °C
              </p>
            </div>

            <div className="section21">
              <p className="head1">Temperature Max</p>
              <p className="head2">
                {(placeData?.main.temp_max - 273.15).toFixed(1)} °C
              </p>
            </div>

            <div className="section21">
              <p className="head1">Humidity</p>
              <p className="head2">{placeData?.main.humidity}</p>
            </div>

            <div className="section21">
              <p className="head1">pressure</p>
              <p className="head2">{placeData?.main.pressure}</p>
            </div>

            <div className="section21">
              <p className="head1">Visibility</p>
              <p className="head2">{placeData?.visibility}</p>
            </div>
            <div className="section21">
              <p className="head1">Wind Speed</p>
              <p className="head2">{placeData?.wind.speed} km/hr</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
