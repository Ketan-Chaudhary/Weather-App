import React from "react";
import { FaCloudSun } from "react-icons/fa";
import { RiHazeFill } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";
import { IoMdSunny } from "react-icons/io";

const SectionUpper = ({placeData , currenTime}) => {
  return (
    <section>
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
    </section>
  );
};

export default SectionUpper;
