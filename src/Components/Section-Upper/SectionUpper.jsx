import React from "react";
import "./SectionUpper.css"
import { FaCloudSun } from "react-icons/fa";
import { RiHazeFill } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";
import { IoMdSunny } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa";

const SectionUpper = ({placeData , currenTime}) => {
  return (
    <section className="section-upper">
      {placeData && (
        <div className="upper-container">
          <div className="upper-row">
            <div className="upper-col">
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
              {placeData.weather[0].main === "Rain" && (
                <FaCloudRain className="weatherIcon" />
              )}

              <p className="temperature">
               <span>{(placeData?.main.temp - 273.15).toFixed(1)}</span>  °C
              </p>
            </div>
            <div className="upper-col2">
              <p className="city">{placeData?.name}</p>
              <p className="wtype">{placeData?.weather[0].main}</p>
            </div>
          <div className="time">
            <p className="timepara">{currenTime}</p>
          </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionUpper;
