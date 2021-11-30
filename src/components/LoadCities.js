import React, { Component } from "react";
import store from '../redux/store.js';
import {cities} from '../redux/actions/cities.js';
import Box from "./Box";

export class LoadCities extends Component {
    state = {
        weather: [],
        imagens: {},
    }

  static get properties() {
    return {
      location: {type: Object},
      icon: {type: String},
      apiKey: {type: String},
      city: {type: Object},
      name:{type: String},
    };
  }

  constructor() {
    super();
    this.location={};
    this.icon="";
    this.apiKey= `e8673ed1285aaec8b632f5502df1bc92`;
    this.setState({weather: store.getState().cities})
    this.name="";
    this.importAll()
  }

  componentDidMount() {
    
    var _this = this;
    navigator.geolocation.getCurrentPosition(function(position) {

      _this.location.lat = position.coords.latitude;
      _this.location.lon = position.coords.longitude;

      _this.callApiForecastWeather();
      
      console.log("Latitude is :", _this.location.lat);
      console.log("Longitude is :", _this.location.lon);
    },
    function(error) {
      //Default City
      _this.location.lat= 39.74362;
      _this.location.lon = -8.80705;

      _this.callApiForecastWeather();
      console.error("Error Code = " + error.code + " - " + error.message);
    });
   
  }

  
  async callApiCurrentWeather(){
    console.log("entrei no callApiCurrentWeather");
    var _this=this;
    var data = {
        "coord": {
            "lon": -7.8224,
            "lat": 40.6551
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "nuvens dispersas",
                "icon": "03d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 14.27,
            "feels_like": 13.03,
            "temp_min": 14.27,
            "temp_max": 17.29,
            "pressure": 1026,
            "humidity": 49,
            "sea_level": 1026,
            "grnd_level": 981
        },
        "visibility": 10000,
        "wind": {
            "speed": 1.53,
            "deg": 75,
            "gust": 2.24
        },
        "clouds": {
            "all": 38
        },
        "dt": 1638281190,
        "sys": {
            "type": 2,
            "id": 2005661,
            "country": "PT",
            "sunrise": 1638257703,
            "sunset": 1638291921
        },
        "timezone": 0,
        "id": 2734573,
        "name": "Santos Evos",
        "cod": 200
    }
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.location.lat}&lon=${this.location.lon}&appid=${this.apiKey}&units=metric&lang=PT`)
     
    await response.json().then(function(data){
        _this.name = data.name;

        console.log(data)
    })
  
   }
 
   
  callApiForecastWeather(){
    this.callApiCurrentWeather();
    var _this = this;
    var remove = -1;
    var data = {
        "lat": 40.6551,
        "lon": -7.8224,
        "timezone": "Europe/Lisbon",
        "timezone_offset": 0,
        "current": {
            "dt": 1638281189,
            "sunrise": 1638257703,
            "sunset": 1638291921,
            "temp": 14.27,
            "feels_like": 13.03,
            "pressure": 1026,
            "humidity": 49,
            "dew_point": 3.71,
            "uvi": 1.36,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 1.53,
            "wind_deg": 75,
            "wind_gust": 2.24,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "nuvens dispersas",
                    "icon": "03d"
                }
            ]
        },
        "minutely": [
            {
                "dt": 1638281220,
                "precipitation": 0
            },
            {
                "dt": 1638281280,
                "precipitation": 0
            },
            {
                "dt": 1638281340,
                "precipitation": 0
            },
            {
                "dt": 1638281400,
                "precipitation": 0
            },
            {
                "dt": 1638281460,
                "precipitation": 0
            },
            {
                "dt": 1638281520,
                "precipitation": 0
            },
            {
                "dt": 1638281580,
                "precipitation": 0
            },
            {
                "dt": 1638281640,
                "precipitation": 0
            },
            {
                "dt": 1638281700,
                "precipitation": 0
            },
            {
                "dt": 1638281760,
                "precipitation": 0
            },
            {
                "dt": 1638281820,
                "precipitation": 0
            },
            {
                "dt": 1638281880,
                "precipitation": 0
            },
            {
                "dt": 1638281940,
                "precipitation": 0
            },
            {
                "dt": 1638282000,
                "precipitation": 0
            },
            {
                "dt": 1638282060,
                "precipitation": 0
            },
            {
                "dt": 1638282120,
                "precipitation": 0
            },
            {
                "dt": 1638282180,
                "precipitation": 0
            },
            {
                "dt": 1638282240,
                "precipitation": 0
            },
            {
                "dt": 1638282300,
                "precipitation": 0
            },
            {
                "dt": 1638282360,
                "precipitation": 0
            },
            {
                "dt": 1638282420,
                "precipitation": 0
            },
            {
                "dt": 1638282480,
                "precipitation": 0
            },
            {
                "dt": 1638282540,
                "precipitation": 0
            },
            {
                "dt": 1638282600,
                "precipitation": 0
            },
            {
                "dt": 1638282660,
                "precipitation": 0
            },
            {
                "dt": 1638282720,
                "precipitation": 0
            },
            {
                "dt": 1638282780,
                "precipitation": 0
            },
            {
                "dt": 1638282840,
                "precipitation": 0
            },
            {
                "dt": 1638282900,
                "precipitation": 0
            },
            {
                "dt": 1638282960,
                "precipitation": 0
            },
            {
                "dt": 1638283020,
                "precipitation": 0
            },
            {
                "dt": 1638283080,
                "precipitation": 0
            },
            {
                "dt": 1638283140,
                "precipitation": 0
            },
            {
                "dt": 1638283200,
                "precipitation": 0
            },
            {
                "dt": 1638283260,
                "precipitation": 0
            },
            {
                "dt": 1638283320,
                "precipitation": 0
            },
            {
                "dt": 1638283380,
                "precipitation": 0
            },
            {
                "dt": 1638283440,
                "precipitation": 0
            },
            {
                "dt": 1638283500,
                "precipitation": 0
            },
            {
                "dt": 1638283560,
                "precipitation": 0
            },
            {
                "dt": 1638283620,
                "precipitation": 0
            },
            {
                "dt": 1638283680,
                "precipitation": 0
            },
            {
                "dt": 1638283740,
                "precipitation": 0
            },
            {
                "dt": 1638283800,
                "precipitation": 0
            },
            {
                "dt": 1638283860,
                "precipitation": 0
            },
            {
                "dt": 1638283920,
                "precipitation": 0
            },
            {
                "dt": 1638283980,
                "precipitation": 0
            },
            {
                "dt": 1638284040,
                "precipitation": 0
            },
            {
                "dt": 1638284100,
                "precipitation": 0
            },
            {
                "dt": 1638284160,
                "precipitation": 0
            },
            {
                "dt": 1638284220,
                "precipitation": 0
            },
            {
                "dt": 1638284280,
                "precipitation": 0
            },
            {
                "dt": 1638284340,
                "precipitation": 0
            },
            {
                "dt": 1638284400,
                "precipitation": 0
            },
            {
                "dt": 1638284460,
                "precipitation": 0
            },
            {
                "dt": 1638284520,
                "precipitation": 0
            },
            {
                "dt": 1638284580,
                "precipitation": 0
            },
            {
                "dt": 1638284640,
                "precipitation": 0
            },
            {
                "dt": 1638284700,
                "precipitation": 0
            },
            {
                "dt": 1638284760,
                "precipitation": 0
            },
            {
                "dt": 1638284820,
                "precipitation": 0
            }
        ],
        "hourly": [
            {
                "dt": 1638280800,
                "temp": 14.27,
                "feels_like": 13.03,
                "pressure": 1026,
                "humidity": 49,
                "dew_point": 3.71,
                "uvi": 1.36,
                "clouds": 38,
                "visibility": 10000,
                "wind_speed": 1.53,
                "wind_deg": 75,
                "wind_gust": 2.24,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638284400,
                "temp": 14.16,
                "feels_like": 12.91,
                "pressure": 1026,
                "humidity": 49,
                "dew_point": 3.61,
                "uvi": 0.8,
                "clouds": 36,
                "visibility": 10000,
                "wind_speed": 0.99,
                "wind_deg": 60,
                "wind_gust": 1.65,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638288000,
                "temp": 13.59,
                "feels_like": 12.39,
                "pressure": 1026,
                "humidity": 53,
                "dew_point": 4.2,
                "uvi": 0.32,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 0.69,
                "wind_deg": 37,
                "wind_gust": 1.35,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638291600,
                "temp": 11.27,
                "feels_like": 10.02,
                "pressure": 1026,
                "humidity": 60,
                "dew_point": 3.8,
                "uvi": 0,
                "clouds": 27,
                "visibility": 10000,
                "wind_speed": 1.04,
                "wind_deg": 46,
                "wind_gust": 1.21,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638295200,
                "temp": 9.39,
                "feels_like": 9.02,
                "pressure": 1027,
                "humidity": 67,
                "dew_point": 3.58,
                "uvi": 0,
                "clouds": 21,
                "visibility": 10000,
                "wind_speed": 1.44,
                "wind_deg": 61,
                "wind_gust": 1.4,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "céu pouco nublado",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638298800,
                "temp": 7.55,
                "feels_like": 7.55,
                "pressure": 1027,
                "humidity": 74,
                "dew_point": 2.57,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.2,
                "wind_deg": 51,
                "wind_gust": 1.39,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638302400,
                "temp": 7.15,
                "feels_like": 7.15,
                "pressure": 1028,
                "humidity": 76,
                "dew_point": 2.52,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 0.92,
                "wind_deg": 40,
                "wind_gust": 1.18,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638306000,
                "temp": 6.87,
                "feels_like": 6.87,
                "pressure": 1028,
                "humidity": 77,
                "dew_point": 2.5,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 0.87,
                "wind_deg": 36,
                "wind_gust": 1.07,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638309600,
                "temp": 6.58,
                "feels_like": 6.58,
                "pressure": 1028,
                "humidity": 79,
                "dew_point": 2.51,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 0.73,
                "wind_deg": 29,
                "wind_gust": 0.98,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638313200,
                "temp": 6.32,
                "feels_like": 6.32,
                "pressure": 1028,
                "humidity": 80,
                "dew_point": 2.53,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 0.64,
                "wind_deg": 63,
                "wind_gust": 0.87,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638316800,
                "temp": 6.07,
                "feels_like": 6.07,
                "pressure": 1028,
                "humidity": 82,
                "dew_point": 2.53,
                "uvi": 0,
                "clouds": 1,
                "visibility": 10000,
                "wind_speed": 0.34,
                "wind_deg": 72,
                "wind_gust": 0.71,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638320400,
                "temp": 5.83,
                "feels_like": 5.83,
                "pressure": 1027,
                "humidity": 84,
                "dew_point": 2.58,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 0.51,
                "wind_deg": 352,
                "wind_gust": 0.81,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638324000,
                "temp": 5.6,
                "feels_like": 5.6,
                "pressure": 1027,
                "humidity": 85,
                "dew_point": 2.58,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 0.2,
                "wind_deg": 24,
                "wind_gust": 0.67,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638327600,
                "temp": 5.45,
                "feels_like": 5.45,
                "pressure": 1027,
                "humidity": 86,
                "dew_point": 2.63,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 0.15,
                "wind_deg": 330,
                "wind_gust": 0.7,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638331200,
                "temp": 5.22,
                "feels_like": 5.22,
                "pressure": 1027,
                "humidity": 87,
                "dew_point": 2.58,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 0.14,
                "wind_deg": 207,
                "wind_gust": 0.58,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638334800,
                "temp": 5.06,
                "feels_like": 5.06,
                "pressure": 1027,
                "humidity": 88,
                "dew_point": 2.49,
                "uvi": 0,
                "clouds": 12,
                "visibility": 10000,
                "wind_speed": 0.54,
                "wind_deg": 311,
                "wind_gust": 0.88,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "céu pouco nublado",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638338400,
                "temp": 4.99,
                "feels_like": 4.99,
                "pressure": 1027,
                "humidity": 88,
                "dew_point": 2.5,
                "uvi": 0,
                "clouds": 22,
                "visibility": 10000,
                "wind_speed": 0.35,
                "wind_deg": 153,
                "wind_gust": 0.59,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "céu pouco nublado",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638342000,
                "temp": 5.49,
                "feels_like": 5.49,
                "pressure": 1026,
                "humidity": 86,
                "dew_point": 2.64,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 0.23,
                "wind_deg": 229,
                "wind_gust": 0.57,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638345600,
                "temp": 6.19,
                "feels_like": 6.19,
                "pressure": 1026,
                "humidity": 83,
                "dew_point": 2.8,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.03,
                "wind_deg": 201,
                "wind_gust": 1.2,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638349200,
                "temp": 7.75,
                "feels_like": 7.75,
                "pressure": 1026,
                "humidity": 76,
                "dew_point": 3.19,
                "uvi": 0.15,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.11,
                "wind_deg": 243,
                "wind_gust": 2.05,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638352800,
                "temp": 8.05,
                "feels_like": 7.59,
                "pressure": 1026,
                "humidity": 77,
                "dew_point": 3.59,
                "uvi": 0.19,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.36,
                "wind_deg": 230,
                "wind_gust": 2.37,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638356400,
                "temp": 8.55,
                "feels_like": 7.82,
                "pressure": 1026,
                "humidity": 77,
                "dew_point": 4.05,
                "uvi": 0.33,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.66,
                "wind_deg": 238,
                "wind_gust": 3.05,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638360000,
                "temp": 9,
                "feels_like": 7.83,
                "pressure": 1025,
                "humidity": 78,
                "dew_point": 4.66,
                "uvi": 0.42,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.24,
                "wind_deg": 223,
                "wind_gust": 3.87,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638363600,
                "temp": 9.45,
                "feels_like": 8.06,
                "pressure": 1024,
                "humidity": 82,
                "dew_point": 5.81,
                "uvi": 0.26,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.66,
                "wind_deg": 224,
                "wind_gust": 4.4,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0.09
            },
            {
                "dt": 1638367200,
                "temp": 9.16,
                "feels_like": 7.48,
                "pressure": 1022,
                "humidity": 86,
                "dew_point": 6.28,
                "uvi": 0.2,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 3.03,
                "wind_deg": 216,
                "wind_gust": 5.73,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0.17
            },
            {
                "dt": 1638370800,
                "temp": 8.66,
                "feels_like": 7.1,
                "pressure": 1021,
                "humidity": 92,
                "dew_point": 6.66,
                "uvi": 0.12,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.7,
                "wind_deg": 221,
                "wind_gust": 7.31,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0.21
            },
            {
                "dt": 1638374400,
                "temp": 8.39,
                "feels_like": 7.07,
                "pressure": 1021,
                "humidity": 96,
                "dew_point": 7.06,
                "uvi": 0.04,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.3,
                "wind_deg": 237,
                "wind_gust": 6.61,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "chuva fraca",
                        "icon": "10d"
                    }
                ],
                "pop": 0.21,
                "rain": {
                    "1h": 0.19
                }
            },
            {
                "dt": 1638378000,
                "temp": 8.76,
                "feels_like": 7.48,
                "pressure": 1021,
                "humidity": 95,
                "dew_point": 7.32,
                "uvi": 0,
                "clouds": 100,
                "visibility": 7870,
                "wind_speed": 2.33,
                "wind_deg": 255,
                "wind_gust": 6.57,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04d"
                    }
                ],
                "pop": 0.21
            },
            {
                "dt": 1638381600,
                "temp": 8.31,
                "feels_like": 6.92,
                "pressure": 1021,
                "humidity": 94,
                "dew_point": 6.61,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.37,
                "wind_deg": 269,
                "wind_gust": 6.29,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0.21
            },
            {
                "dt": 1638385200,
                "temp": 7.28,
                "feels_like": 6.25,
                "pressure": 1022,
                "humidity": 94,
                "dew_point": 5.74,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.77,
                "wind_deg": 277,
                "wind_gust": 3.46,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0.04
            },
            {
                "dt": 1638388800,
                "temp": 6.94,
                "feels_like": 5.78,
                "pressure": 1022,
                "humidity": 95,
                "dew_point": 5.55,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.84,
                "wind_deg": 274,
                "wind_gust": 3.8,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638392400,
                "temp": 6.45,
                "feels_like": 5.29,
                "pressure": 1022,
                "humidity": 96,
                "dew_point": 5.21,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.77,
                "wind_deg": 276,
                "wind_gust": 3.07,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638396000,
                "temp": 6.09,
                "feels_like": 4.82,
                "pressure": 1022,
                "humidity": 97,
                "dew_point": 4.92,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.82,
                "wind_deg": 267,
                "wind_gust": 3.55,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638399600,
                "temp": 5.74,
                "feels_like": 4.47,
                "pressure": 1021,
                "humidity": 97,
                "dew_point": 4.66,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.77,
                "wind_deg": 264,
                "wind_gust": 3.05,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638403200,
                "temp": 6.78,
                "feels_like": 5.65,
                "pressure": 1021,
                "humidity": 93,
                "dew_point": 5.04,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.79,
                "wind_deg": 267,
                "wind_gust": 4.98,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638406800,
                "temp": 5.67,
                "feels_like": 4.3,
                "pressure": 1020,
                "humidity": 96,
                "dew_point": 4.37,
                "uvi": 0,
                "clouds": 88,
                "visibility": 10000,
                "wind_speed": 1.85,
                "wind_deg": 259,
                "wind_gust": 3.85,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0.03
            },
            {
                "dt": 1638410400,
                "temp": 5.42,
                "feels_like": 3.92,
                "pressure": 1020,
                "humidity": 96,
                "dew_point": 4.11,
                "uvi": 0,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 1.94,
                "wind_deg": 278,
                "wind_gust": 4.91,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "nuvens quebradas",
                        "icon": "04n"
                    }
                ],
                "pop": 0.07
            },
            {
                "dt": 1638414000,
                "temp": 6.28,
                "feels_like": 4.38,
                "pressure": 1019,
                "humidity": 94,
                "dew_point": 4.63,
                "uvi": 0,
                "clouds": 82,
                "visibility": 10000,
                "wind_speed": 2.54,
                "wind_deg": 284,
                "wind_gust": 7.64,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "nuvens quebradas",
                        "icon": "04n"
                    }
                ],
                "pop": 0.19
            },
            {
                "dt": 1638417600,
                "temp": 7.26,
                "feels_like": 5.29,
                "pressure": 1018,
                "humidity": 90,
                "dew_point": 5.06,
                "uvi": 0,
                "clouds": 86,
                "visibility": 10000,
                "wind_speed": 2.89,
                "wind_deg": 311,
                "wind_gust": 8.74,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0.33
            },
            {
                "dt": 1638421200,
                "temp": 7.43,
                "feels_like": 5.42,
                "pressure": 1018,
                "humidity": 88,
                "dew_point": 4.81,
                "uvi": 0,
                "clouds": 89,
                "visibility": 10000,
                "wind_speed": 3,
                "wind_deg": 316,
                "wind_gust": 7.9,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0.29
            },
            {
                "dt": 1638424800,
                "temp": 7.32,
                "feels_like": 5.62,
                "pressure": 1018,
                "humidity": 87,
                "dew_point": 4.63,
                "uvi": 0,
                "clouds": 91,
                "visibility": 10000,
                "wind_speed": 2.54,
                "wind_deg": 328,
                "wind_gust": 7.12,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0.24
            },
            {
                "dt": 1638428400,
                "temp": 7.14,
                "feels_like": 6.29,
                "pressure": 1019,
                "humidity": 87,
                "dew_point": 4.45,
                "uvi": 0,
                "clouds": 95,
                "visibility": 10000,
                "wind_speed": 1.58,
                "wind_deg": 323,
                "wind_gust": 4.39,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "nublado",
                        "icon": "04n"
                    }
                ],
                "pop": 0.1
            },
            {
                "dt": 1638432000,
                "temp": 5.59,
                "feels_like": 5.59,
                "pressure": 1020,
                "humidity": 90,
                "dew_point": 3.32,
                "uvi": 0,
                "clouds": 59,
                "visibility": 10000,
                "wind_speed": 1.33,
                "wind_deg": 344,
                "wind_gust": 2.33,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "nuvens quebradas",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638435600,
                "temp": 7.16,
                "feels_like": 5.93,
                "pressure": 1021,
                "humidity": 82,
                "dew_point": 3.58,
                "uvi": 0.22,
                "clouds": 42,
                "visibility": 10000,
                "wind_speed": 1.95,
                "wind_deg": 350,
                "wind_gust": 6.45,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638439200,
                "temp": 8.97,
                "feels_like": 6.79,
                "pressure": 1021,
                "humidity": 65,
                "dew_point": 2.07,
                "uvi": 0.77,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 3.88,
                "wind_deg": 358,
                "wind_gust": 9.49,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638442800,
                "temp": 9.88,
                "feels_like": 7.3,
                "pressure": 1021,
                "humidity": 56,
                "dew_point": 1,
                "uvi": 1.35,
                "clouds": 28,
                "visibility": 10000,
                "wind_speed": 5.39,
                "wind_deg": 359,
                "wind_gust": 9.17,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638446400,
                "temp": 10.47,
                "feels_like": 8.85,
                "pressure": 1021,
                "humidity": 49,
                "dew_point": -0.34,
                "uvi": 1.76,
                "clouds": 25,
                "visibility": 10000,
                "wind_speed": 5.1,
                "wind_deg": 360,
                "wind_gust": 8.46,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1638450000,
                "temp": 10.9,
                "feels_like": 9.22,
                "pressure": 1021,
                "humidity": 45,
                "dew_point": -1.19,
                "uvi": 1.82,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 5.2,
                "wind_deg": 359,
                "wind_gust": 8.1,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            }
        ],
        "daily": [
            {
                "dt": 1638273600,
                "sunrise": 1638257703,
                "sunset": 1638291921,
                "moonrise": 1638240000,
                "moonset": 1638283800,
                "moon_phase": 0.85,
                "temp": {
                    "day": 13.72,
                    "min": 5.23,
                    "max": 14.27,
                    "night": 6.32,
                    "eve": 9.39,
                    "morn": 5.51
                },
                "feels_like": {
                    "day": 12.48,
                    "night": 6.32,
                    "eve": 9.02,
                    "morn": 4.29
                },
                "pressure": 1026,
                "humidity": 51,
                "dew_point": 3.77,
                "wind_speed": 2.4,
                "wind_deg": 77,
                "wind_gust": 3.51,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "nuvens quebradas",
                        "icon": "04d"
                    }
                ],
                "clouds": 51,
                "pop": 0,
                "uvi": 1.74
            },
            {
                "dt": 1638360000,
                "sunrise": 1638344164,
                "sunset": 1638378304,
                "moonrise": 1638330720,
                "moonset": 1638371820,
                "moon_phase": 0.89,
                "temp": {
                    "day": 9,
                    "min": 4.99,
                    "max": 9.45,
                    "night": 5.74,
                    "eve": 8.31,
                    "morn": 4.99
                },
                "feels_like": {
                    "day": 7.83,
                    "night": 4.47,
                    "eve": 6.92,
                    "morn": 4.99
                },
                "pressure": 1025,
                "humidity": 78,
                "dew_point": 4.66,
                "wind_speed": 3.03,
                "wind_deg": 216,
                "wind_gust": 7.31,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "chuva fraca",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 0.21,
                "rain": 0.19,
                "uvi": 0.42
            },
            {
                "dt": 1638446400,
                "sunrise": 1638430625,
                "sunset": 1638464689,
                "moonrise": 1638421680,
                "moonset": 1638460080,
                "moon_phase": 0.93,
                "temp": {
                    "day": 10.47,
                    "min": 3.9,
                    "max": 10.93,
                    "night": 3.9,
                    "eve": 5.55,
                    "morn": 7.32
                },
                "feels_like": {
                    "day": 8.85,
                    "night": 3.9,
                    "eve": 4.24,
                    "morn": 5.62
                },
                "pressure": 1021,
                "humidity": 49,
                "dew_point": -0.34,
                "wind_speed": 5.39,
                "wind_deg": 359,
                "wind_gust": 9.49,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "nuvens dispersas",
                        "icon": "03d"
                    }
                ],
                "clouds": 25,
                "pop": 0.33,
                "uvi": 1.82
            },
            {
                "dt": 1638532800,
                "sunrise": 1638517084,
                "sunset": 1638551076,
                "moonrise": 1638512820,
                "moonset": 1638548760,
                "moon_phase": 0.97,
                "temp": {
                    "day": 12.92,
                    "min": 3.44,
                    "max": 13.44,
                    "night": 9.79,
                    "eve": 10.06,
                    "morn": 3.72
                },
                "feels_like": {
                    "day": 11.83,
                    "night": 9.29,
                    "eve": 9.52,
                    "morn": 3.72
                },
                "pressure": 1027,
                "humidity": 60,
                "dew_point": 4.7,
                "wind_speed": 2.07,
                "wind_deg": 274,
                "wind_gust": 3.44,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "chuva fraca",
                        "icon": "10d"
                    }
                ],
                "clouds": 9,
                "pop": 0.34,
                "rain": 0.4,
                "uvi": 0.32
            },
            {
                "dt": 1638619200,
                "sunrise": 1638603542,
                "sunset": 1638637465,
                "moonrise": 1638604140,
                "moonset": 1638637980,
                "moon_phase": 0,
                "temp": {
                    "day": 11.77,
                    "min": 8.88,
                    "max": 13.32,
                    "night": 8.88,
                    "eve": 9.97,
                    "morn": 10.06
                },
                "feels_like": {
                    "day": 11.59,
                    "night": 8.88,
                    "eve": 9.97,
                    "morn": 9.71
                },
                "pressure": 1026,
                "humidity": 99,
                "dew_point": 10.86,
                "wind_speed": 1.64,
                "wind_deg": 203,
                "wind_gust": 4.08,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "chuva fraca",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 0.63,
                "rain": 1.4,
                "uvi": 1.58
            },
            {
                "dt": 1638705600,
                "sunrise": 1638689999,
                "sunset": 1638723857,
                "moonrise": 1638695160,
                "moonset": 1638727800,
                "moon_phase": 0.05,
                "temp": {
                    "day": 11.65,
                    "min": 5.61,
                    "max": 12.74,
                    "night": 6.09,
                    "eve": 7.39,
                    "morn": 5.61
                },
                "feels_like": {
                    "day": 10.33,
                    "night": 4.58,
                    "eve": 6.21,
                    "morn": 3.72
                },
                "pressure": 1028,
                "humidity": 56,
                "dew_point": 2.46,
                "wind_speed": 3.21,
                "wind_deg": 19,
                "wind_gust": 6.13,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "céu limpo",
                        "icon": "01d"
                    }
                ],
                "clouds": 0,
                "pop": 0,
                "uvi": 2
            },
            {
                "dt": 1638792000,
                "sunrise": 1638776455,
                "sunset": 1638810251,
                "moonrise": 1638785640,
                "moonset": 1638818220,
                "moon_phase": 0.09,
                "temp": {
                    "day": 13.21,
                    "min": 4.72,
                    "max": 14.36,
                    "night": 7.88,
                    "eve": 8.73,
                    "morn": 4.72
                },
                "feels_like": {
                    "day": 11.97,
                    "night": 7.21,
                    "eve": 8.73,
                    "morn": 3.03
                },
                "pressure": 1027,
                "humidity": 53,
                "dew_point": 3.17,
                "wind_speed": 2.01,
                "wind_deg": 38,
                "wind_gust": 4.11,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "céu pouco nublado",
                        "icon": "02d"
                    }
                ],
                "clouds": 14,
                "pop": 0,
                "uvi": 2
            },
            {
                "dt": 1638878400,
                "sunrise": 1638862909,
                "sunset": 1638896647,
                "moonrise": 1638875400,
                "moonset": 1638909000,
                "moon_phase": 0.12,
                "temp": {
                    "day": 13.91,
                    "min": 7.13,
                    "max": 13.91,
                    "night": 7.52,
                    "eve": 10.92,
                    "morn": 7.13
                },
                "feels_like": {
                    "day": 13.21,
                    "night": 5.28,
                    "eve": 10.6,
                    "morn": 7.13
                },
                "pressure": 1023,
                "humidity": 71,
                "dew_point": 8.04,
                "wind_speed": 5.34,
                "wind_deg": 223,
                "wind_gust": 11.95,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "chuva moderada",
                        "icon": "10d"
                    }
                ],
                "clouds": 21,
                "pop": 0.99,
                "rain": 3.86,
                "uvi": 2
            }
        ],
        "name": ""
    }
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.location.lat}&lon=${this.location.lon}&appid=${this.apiKey}&units=metric&lang=PT`)
    .then(res => res.json())
    .then((data) => {
        
        console.log(data)
        data.name = _this.name;

        if(_this.state.weather.length != 0) {
            _this.state.weather.forEach((element,index) => {
                if(element.name === data.name) {
                    remove = index;
                }
            });
            if(remove != -1){
                _this.state.weather.splice(remove,1)
                _this.setState({weather: _this.state.weather})
            }
        }
        _this.state.weather.push(data)
        _this.setState({weather: _this.state.weather})
        
        store.dispatch(cities(_this.state.weather));
        
        console.log(_this.state.weather)

      })
      .catch(console.log)
    }

    importAll() {
        let r=require.context('../icons', false, /\.(png|jpe?g|svg)$/);
        let images = {};
        r.keys().forEach((item, index) => { 
          images[item.replace('./', '')] = r(item); 
        });
        //console.log(images)
        this.state.imagens = images;

        this.setState({imagens: this.state.imagens})
        //console.log(this.state.imagens)
    }
 

  render() {

    return (
        <div>
        <div className="weather-wrapper">
            {this.state.weather.length != 0 ? ( 
                this.state.weather.map((element, index) => {
                    return <Box key={index} city={element.name} temp={element.current.temp} icon={this.state.imagens[element.current.weather[0].icon+".png"].default}/>
                })
            ) : ( 
                <h2>Loading </h2>
            )}
            </div>
        </div>
    );
  
  }
}


//export default LoadCities;