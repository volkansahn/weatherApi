const dotenv = require('dotenv');

const weatherData = async function (req, res, next) {
    const cities = req.body.city.split(' ');
    const weather = {};
    const weatherData = [];
    
    for(let city of cities) {
      const apiKey = "c44b7061af894324a05114304230112";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      
      const response = await fetch(url);
      const data = await response.json();
      weather[city] = `${data.current.temp_c}C`;
      weatherData.push({
        city: city,
        temp: `${data.current.temp_c}C`
      });  
    }
    
    res.weather = weather;
    res.weatherData = weatherData;
    next();
  }
  
module.exports = weatherData;
  