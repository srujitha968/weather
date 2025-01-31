import React, { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [curr, setCurr] = useState('')
  const [icon, setIcon] = useState('')
  const [wind, setWind] = useState('')
  const [hum, setHum] = useState('')
  const [date0, setdate0] = useState('')
  const [temp0, setTemp0] = useState('')
  const [icon0, setIcon0] = useState('')
  const [date1, setdate1] = useState('')
  const [temp1, setTemp1] = useState('')
  const [icon1, setIcon1] = useState('')
  const [date2, setdate2] = useState('')
  const [temp2, setTemp2] = useState('')
  const [icon2, setIcon2] = useState('')
  const [date3, setdate3] = useState('')
  const [temp3, setTemp3] = useState('')
  const [icon3, setIcon3] = useState('')
  const [date4, setdate4] = useState('')
  const [temp4, setTemp4] = useState('')
  const [icon4, setIcon4] = useState('')
  const [date5, setdate5] = useState('')
  const [temp5, setTemp5] = useState('')
  const [icon5, setIcon5] = useState('')
  const [date6, setdate6] = useState('')
  const [temp6, setTemp6] = useState('')
  const [icon6, setIcon6] = useState('')

  function check() {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=36d1b7c23cfd4c74b6e51847253101&q=${city}&days=7`)
      .then((response) => {
        setTemp0(`${response.data.forecast.forecastday[0].day.avgtemp_c}\u00B0C`)
        setIcon0(response.data.forecast.forecastday[0].day.condition.icon)
        setdate0(response.data.forecast.forecastday[0].date)
        setTemp1(`${response.data.forecast.forecastday[1].day.avgtemp_c}\u00B0C`)
        setIcon1(response.data.forecast.forecastday[1].day.condition.icon)
        setdate1(response.data.forecast.forecastday[1].date)
        setTemp2(`${response.data.forecast.forecastday[2].day.avgtemp_c}\u00B0C`)
        setIcon2(response.data.forecast.forecastday[2].day.condition.icon)
        setdate2(response.data.forecast.forecastday[2].date)
        setTemp3(`${response.data.forecast.forecastday[3].day.avgtemp_c}\u00B0C`)
        setIcon3(response.data.forecast.forecastday[3].day.condition.icon)
        setdate3(response.data.forecast.forecastday[3].date)
        setTemp4(`${response.data.forecast.forecastday[4].day.avgtemp_c}\u00B0C`)
        setIcon4(response.data.forecast.forecastday[4].day.condition.icon)
        setdate4(response.data.forecast.forecastday[4].date)
        setTemp5(`${response.data.forecast.forecastday[5].day.avgtemp_c}\u00B0C`)
        setIcon5(response.data.forecast.forecastday[5].day.condition.icon)
        setdate5(response.data.forecast.forecastday[5].date)
        setTemp6(`${response.data.forecast.forecastday[6].day.avgtemp_c}\u00B0C`)
        setIcon6(response.data.forecast.forecastday[6].day.condition.icon)
        setdate6(response.data.forecast.forecastday[6].date)
      }
      )
    axios.get(`https://api.weatherapi.com/v1/current.json?key=36d1b7c23cfd4c74b6e51847253101&q=${city}`)
      .then((res) => {
        setCurr(`Temp is ${res.data.current.temp_c}\u00B0C / ${res.data.current.temp_f}\u00B0F`)
        setIcon(res.data.current.condition.icon)
        setWind(` Wind speed is ${res.data.current.wind_kph} km/hr`)
        setHum(`Humidity is ${res.data.current.humidity}%`)
      })
  }
  const val = parseFloat(curr.split(" ")[2]);
  const style = {
    '--bg-image': val>29 ? 'url("https://media.istockphoto.com/id/1349387823/photo/small-light-fluffy-clouds-in-blue-sky-in-autumn.jpg?s=612x612&w=0&k=20&c=jTFlDqIduTvsAz7_-U27Ih62OyHunsowVba-OYptv0Y=")' : 
              'url("https://media.istockphoto.com/id/615116338/photo/stormy-clouds-for-background.jpg?s=612x612&w=0&k=20&c=uFwhUflrYkLMrQ10feAa_UmzsHas78gLLVejZ2ccSB8=")',
  };
  return (
    <>
      <div id="main">
        <div id="first"
         style={{
        ...style,
        backgroundImage: 'var(--bg-image)',
        backgroundSize: 'cover',
      }}>
          <h1>Weather Report</h1>
          <input type='text' value={city} onChange={(e) => { setCity(e.target.value) }} placeholder='Enter your city'/>
          <button onClick={check}>weather</button>
          <h2>Today's Report</h2>
          <div id="first-one">
            <h3>{curr}</h3>
            <img src={icon} />
          </div>
          <h3>{wind}</h3>
          <h3>{hum}</h3>
          <div id="second">
            <h2 id="head">Weekly Report</h2>
            <div id="con">
              <div className="third">
                <h3>{date0}</h3>
                <img src={icon0} />
                <h3>{temp0}</h3>
              </div>
              <div className="third">
                <h3>{date1}</h3>
                <img src={icon1} />
                <h3>{temp1}</h3>
              </div>
              <div className="third">
                <h3>{date2}</h3>
                <img src={icon2} />
                <h3>{temp2}</h3>
              </div>
              <div className="third">
                <h3>{date3}</h3>
                <img src={icon3} />
                <h3>{temp3}</h3>
              </div>
              <div className="third">
                <h3>{date4}</h3>
                <img src={icon4} />
                <h3>{temp4}</h3>
              </div>
              <div className="third">
                <h3>{date5}</h3>
                <img src={icon5} />
                <h3>{temp5}</h3>
              </div>
              <div className="third">
                <h3>{date6}</h3>
                <img src={icon6} />
                <h3>{temp6}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App