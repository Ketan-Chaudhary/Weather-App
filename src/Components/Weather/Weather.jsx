import React, { useEffect, useState } from "react";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";

import SectionUpper from "../Section-Upper/SectionUpper";
import SectionLower from "../Section-Lower/SectionLower";
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
      </div>
        <SectionUpper placeData={placeData } currenTime={currenTime} />
        <SectionLower placeData={placeData}/>
    </section>
  );
};

export default Weather;
