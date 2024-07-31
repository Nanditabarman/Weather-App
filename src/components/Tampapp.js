import React , {useEffect, useState} from'react';
import './css/style.css';

const Tampapp = () => {

    // initial value  (city,serach)     //Updated value setCity, setSearch
   const [city, setCity] = useState(null);
   const [search , setSearch] = useState("mumbai");

   useEffect( () => {
    const fatchApp = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b6c3802b29d8d86d60370cebb0f6c8be`
      );
      const data = await response.json();
      // Store data
      setCity(data.main);
    };
    fatchApp();
  },[search] )


  return (
    <>
     
      <div className="weather-card">
          <div className="search">
              <input type="search" placeholder="enter city name" spellcheck="false"  value={search}  onChange={ (event) => { setSearch(event.target.value) } }/>
                <button>
                  <i className="bi bi-search"></i>
                </button>
         </div>
  
   
  <div className="weather">
    <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
    { !city ? ( 
      <p> No Data found</p> 
    ) : (
      <div>
    <h1 className="temp">{city.temp}°C </h1>
    <h2 className="city">{search}</h2>
    <div className="details">
      <div  className="col display">
        <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"/>
        <div className="info">
          <p className="humidity">{city.humidity}%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="col">
        <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png"/>
        <div className="info">
          <p className="wind">{city.feels_like}</p>
          <p>Feels Like</p>
        </div>
      </div>
    </div>
    </div>
  ) 
}
  </div>
  </div>

    </>
  );
}
export default Tampapp;