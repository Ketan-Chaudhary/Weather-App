import React from "react";
import "./SectionLower.css";
const SectionLower = ({ placeData }) => {
  return (
    <section className="lowerSection">
      {placeData && (
        <div className="lowerContainer">
          <div className="sectionDetail">
            <p className="detailHeading">Temperature</p>
            <p className="detailValue">
              {(placeData?.main.temp - 273.15).toFixed(1)} °C
            </p>
          </div>

          <div className="sectionDetail">
            <p className="detailHeading">Temperature Min</p>
            <p className="detailValue">
              {(placeData?.main.temp_min - 273.15).toFixed(1)} °C
            </p>
          </div>

          <div className="sectionDetail">
            <p className="detailHeading">Temperature Max</p>
            <p className="detailValue">
              {(placeData?.main.temp_max - 273.15).toFixed(1)} °C
            </p>
          </div>

          <div className="sectionDetail">
            <p className="detailHeading">Humidity</p>
            <p className="detailValue">{placeData?.main.humidity}</p>
          </div>
        </div>
      )}
      {placeData && <div className="lowerContainer2">
      <div className="sectionDetail">
            <p className="detailHeading">pressure</p>
            <p className="detailValue">{placeData?.main.pressure}</p>
          </div>

          <div className="sectionDetail">
            <p className="detailHeading">Visibility</p>
            <p className="detailValue">{placeData?.visibility}</p>
          </div>
          <div className="sectionDetail">
            <p className="detailHeading">Wind Speed</p>
            <p className="detailValue">{placeData?.wind.speed} km/hr</p>
          </div>
          <div className="sectionDetail">
            <p className="detailHeading">description</p>
            <p className="detailValue">{placeData?.weather[0].description}</p>
          </div>
      </div> }
    </section>
  );
};

export default SectionLower;
