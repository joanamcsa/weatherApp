import React, { Component } from "react";
import store1 from '../redux/store.js';
import {cities} from '../redux/actions/cities.js';
import Box from "./Box";
import SmallBox from "./SmallBox";
import ItemList from "./ItemList";
import SearchBar from "./SearchBar";
import { store } from 'react-notifications-component';
import CountryCodes from "./data/CountryCodes.json";


export class LoadCities extends Component {
    state = {
        weather: store1.getState().cities,
        imagens: {},
        city: {},
        coord:{},
    }

  static get properties() {
    return {
      location: {type: Object},
      icon: {type: String},
      apiKey: {type: String},
      apiURL: {type: String},
      name:{type: String},
      code:{type: String},
    };
  }
  


  constructor() {
    super();
    this.location={};
    this.icon="";
    this.apiKey= `e8673ed1285aaec8b632f5502df1bc92`;
    this.apiURL =`https://api.openweathermap.org/data/2.5`;
    if(this.state.weather.length !== 0){
        this.setState({city: this.state.weather[0]})
    }
    this.name="";
    this.code="";
    this.importAll()
  }

  notificationCity = (title, type) => {
    store.addNotification({
      title: title,
      message: " ",
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }
  
  updateStorage() {
      localStorage.setItem('weather', JSON.stringify(this.state.weather));
      //this.notificationCity(` já existe!`, "danger");
  }
  
  componentDidMount() {
    
    
    var _this = this;
    if(localStorage.getItem('weather') && localStorage.getItem('weather')!=="" ){
        /* eslint-disable */
        this.state.weather = JSON.parse(localStorage.getItem('weather'))
        this.state.city= this.state.weather[0];
        this.setState({weather: this.state.weather});
        store1.dispatch(cities(this.state.weather));

    }
    navigator.geolocation.getCurrentPosition(function(position) {

      _this.location.lat = position.coords.latitude;
      _this.location.lon = position.coords.longitude;

      _this.callApiCurrentWeather();
      _this.callApiForecastWeather();
      
    },
    function(error) {
      //Default City
      _this.location.lat= 39.74362;
      _this.location.lon = -8.80705;

      _this.callApiCurrentWeather();
      _this.callApiForecastWeather();
      _this.notificationCity(`Loading default location.`, "info");
      console.error("Error Code = " + error.code + " - " + error.message);
    });
   
  }

  async callApiCurrentWeather(){

    var _this=this;
    
    const response = await fetch(`${this.apiURL}/weather?lat=${this.location.lat}&lon=${this.location.lon}&appid=${this.apiKey}&units=metric&lang=pt`)
     
    await response.json().then(function(data){
        _this.state.coord.lon = data.coord.lon;
        _this.state.coord.lat = data.coord.lat;

        _this.setState({coord: _this.state.coord});

        _this.name = data.name;
        _this.code = data.sys.country;

    })
  
   }
 
   
  callApiForecastWeather(){
    
    var _this = this;
    var remove = -1;
    
    fetch(`${this.apiURL}/onecall?lat=${this.location.lat}&lon=${this.location.lon}&appid=${this.apiKey}&units=metric&lang=pt`)
    .then(res => res.json())
    .then((data) => {
        if(!data.cod){
          data.name = _this.name;
          data.country = _this.code;

          if(_this.state.weather.length !== 0) {
              _this.state.weather.forEach((element,index) => {
                  if(element.lat.toFixed(2) === data.lat.toFixed(2) && element.lon.toFixed(2) === data.lon.toFixed(2)) {
                      remove = index;
                  }
              });
              if(remove !== -1){
                  _this.state.weather.splice(remove,1)
                  _this.setState({weather: _this.state.weather})
              }
          }
            _this.state.weather.push(data)

            _this.state.city = _this.state.weather[_this.state.weather.length - 1];

            _this.setState({city: _this.state.city})
            _this.setState({weather: _this.state.weather})
            
            store1.dispatch(cities(_this.state.weather));
            
            _this.updateStorage()
        }
        else{
          this.notificationCity(`Something went wrong. Please try again.`, "danger");
        }
        
      })
      .catch(console.log)

    }

    addCity = (name) => {
      console.log(CountryCodes["Portugal"]);
      this.code ="";

      if(name !== ""){
        if(name.split(",").length > 1){

          var str = name.split(",")[1].trim().toLowerCase();
          var arr = str.split(" ");
          var country="";

          if(arr.length > 1){
            for (var i = 0; i < arr.length; i++) {
              arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            country = arr.join(" ");
          } else {
            country = str.charAt(0).toUpperCase() + str.slice(1);
          }
          this.code = CountryCodes[country];
        }

        var _this=this;
        fetch(`${this.apiURL}/weather?q=${name},${this.code}&appid=${this.apiKey}&units=metric&lang=pt`)
        .then(res => res.json())
        .then((data) => {

            if(data.cod === "200" || data.cod===200){

                _this.name = data.name;
                _this.code = data.sys.country;
                _this.location.lat = data.coord.lat;
                _this.location.lon = data.coord.lon;
                
                _this.callApiForecastWeather();
                this.notificationCity(`${data.name} is now showing`, "success");
            }
            else if(data.cod === 404 || data.cod === "404"){
                this.notificationCity(`${name} not found. Please try again.`, "danger");
            }
            else {
              console.log(data)
                this.notificationCity(`Something went wrong. Please try again.`, "danger");
            }
          })
          .catch(console.log)
        }
        else {
          this.notificationCity(`Empty value. Please enter a city name.`, "danger");
            
        }

    }

    importAll() {
        let r=require.context('../icons', false, /\.(png|jpe?g|svg)$/);
        let images = {};
        r.keys().forEach((item, index) => { 
          images[item.replace('./', '')] = r(item); 
        });
        this.state.imagens = images;

        this.setState({imagens: this.state.imagens})

    }

    removeCity = (coord) => {
        var lat = coord.split(",")[0];
        var lon = coord.split(",")[1];
        var remove = -1;
        if(this.state.weather.length > 1){
            this.state.weather.forEach((element,index) => {
                if(element.lat.toString()=== lat && element.lon.toString() === lon){
                    remove=index;

                }
            });
            if(remove!==-1){
                this.notificationCity(`${this.state.weather[remove].name} was removed.`, "success");
                this.state.weather.splice(remove,1);
                this.setState({weather: this.state.weather});
                store1.dispatch(cities(this.state.weather));
            }
        }
        this.updateStorage()
    }

    selectCity = (index) => {
        if(index >= this.state.weather.length){
          index = index - this.state.weather.length;
        }
        this.state.city = this.state.weather[index];
        this.setState({city: this.state.city});
        this.updateStorage();
        this.notificationCity(`${this.state.city.name} - current weather and forecast are being displayed.`, "info");        
    }
 

  render() {

    return (
        <div>
        
        <div className="allCards">
        <div className="weather-wrapper">

            {Object.keys(this.state.city).length !== 0 ? ( 
                
                this.state.city.daily.map((element, index) => {
                    if(index===0){
                        return <Box key={index} city={this.state.city.name} temp={this.state.city.current.temp} icon={this.state.imagens[this.state.city.current.weather[0].icon+".png"].default}/>
                    }
                    else{
                        return (
                        <div className="smallCards" key={index}>
                            <SmallBox key={index} icon={this.state.imagens[element.weather[0].icon+".png"].default} date={element.dt} temp_min={element.temp.min} temp_max={element.temp.max}/> 
                        </div>)
                    }
                })
            ) : ( 
                <h2>Loading </h2>
            )}
            </div>
            </div>
            <div className="search-wrapper">
                <SearchBar image={this.state.imagens["search.png"].default} addCity={this.addCity}/>
            </div>
            <div className="search-wrapper">
            {this.state.weather.length !== 0 ? ( 
                  
                this.state.weather.map((element, index) => {
                    if(Object.keys(this.state.city).length !== 0 && (element.lat !== this.state.city.lat || element.lon !== this.state.city.lon)){
                        
                        return (<ItemList selectCity={this.selectCity} key={`${element.lat},${element.lon}`} index={index} coords={`${element.lat},${element.lon}`} removeCity={this.removeCity} trash={this.state.imagens["trash.png"].default}/>)
                    }
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