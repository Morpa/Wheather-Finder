import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import Titles from '../template/Titles'
import Form from '../template/Form'
import Weather from '../template/Weather'


console.log(process.env);

const API_KEY = process.env.REACT_APP_API_KEY
const lang = "pt"


export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      temperature: '',
      temp_max: '',
      temp_min: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      icon: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCall = this.handleCall.bind(this)
  }

  handleChange(e) {
    this.setState({ ...this.state, city: e.target.value })
  }

  handleCall() {
    const city = document.querySelector("#city").value
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`)
      .then(resp => {
        return this.setState({
          temperature: Math.round(resp.data.main.temp),
          temp_min: Math.round(resp.data.main.temp_min),
          temp_max: Math.round(resp.data.main.temp_max),
          city: resp.data.name,
          country: resp.data.sys.country,
          humidity: resp.data.main.humidity,
          description: resp.data.weather[0].description,
          icon: resp.data.weather[0].icon,
          error: ""
        })
      }).catch(error => {
        return this.setState({
          temperature: '',
          temp_max: '',
          temp_min: '',
          city: '',
          country: '',
          humidity: '',
          description: '',
          icon: '',
          error: "Por favor insira uma cidade válida!"
        })
      })
  }

  render() {
    return (
      <div className="container-fluid wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-sm-12 col-md-5 title-container">
              <Titles />
            </div>
            <div className="col-sm-12 col-md-7 form-container">
              <Form
                city={this.state.city}
                handleChange={this.handleChange}
                handleCall={this.handleCall}
              />
              <Weather
                country={this.state.country}
                temperature={this.state.temperature}
                temp_min={this.state.temp_min}
                temp_max={this.state.temp_max}
                humidity={this.state.humidity}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
