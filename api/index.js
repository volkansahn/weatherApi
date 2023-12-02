const express = require('express');
const weatherData = require('./middleware/weatherData.js')
const app = express();
app.set('view engine', 'ejs');
app.set('views','../views');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.use('/getWeather',weatherData);

app.post('/getWeather',  (req, res) => {
/*  
    res.json({
    "weather": res.weather,
  });
*/ 
  console.log(res.weatherData);
  res.render('pages/result',{weatherData: res.weatherData});

});

app.listen(3000, () => {
  console.log('server started');
});