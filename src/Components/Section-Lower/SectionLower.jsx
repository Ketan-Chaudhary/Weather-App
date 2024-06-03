import React from 'react'


const SectionLower = ({placeData}) => {
  return (
    <section>
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
    </section>
  )
}

export default SectionLower