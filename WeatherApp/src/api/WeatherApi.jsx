import axios from 'axios';


const API_KEY="5333102cc358d1713b92a8aca3b67a3a";

export const fetchWeather = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    console.log(response.data)
    return response.data;
  };