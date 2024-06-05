# Weather App

## Overview

This repository contains the source code for a weather application built using React.js. The app fetches weather data from the OpenWeatherMap API and displays the current weather conditions for a specified location. It includes features like temperature, humidity, wind speed, and weather descriptions.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **OpenWeatherMap API**: For fetching weather data.
- **Fetch**: For making HTTP requests.

## Features

- **Current Weather Information**: Displays the current weather conditions for a specified location.
- **Temperature**: Shows the current temperature in Celsius or Fahrenheit.
- **Humidity**: Displays the current humidity level.
- **Wind Speed**: Shows the current wind speed.
- **Weather Description**: Provides a brief description of the current weather conditions.
- **Search Functionality**: Allows users to search for the weather in different cities.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up OpenWeatherMap API Key**
   - Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for an API key.
   - Create a `.env` file in the root directory of the project and add your API key:
     ```env
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000`.



## Usage

### Searching for Weather

1. **Enter City Name**: Type the name of the city you want to search for in the input field.
2. **View Weather Data**: The app will display the current weather information for the specified city, including temperature, humidity, wind speed, and a brief description.

### Temperature Units

- The temperature can be toggled between Celsius and Fahrenheit by updating the relevant code or UI component that handles this functionality (implementation may vary).

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.



## Acknowledgments

- Thanks to the developers of React and Axios for their excellent libraries.
- Special thanks to [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- Thanks to all contributors who have helped improve this project.

