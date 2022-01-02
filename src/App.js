import React, { Component } from 'react'
import './App.css'
import LightSwitch from './Components/LightSwitch'
import NewHeader from './Components/NewHeader'
import Footer from './Components/Footer'
import ToggleSwitch from './Components/ToggleSwitch'
import LightBulb from './Components/LightBulb'


class App extends Component{
  render(){
    return(
      <> 
      < NewHeader />
      <br></br>
      <br></br>
      <br></br>
      < ToggleSwitch Name='Light Switch'/>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      < Footer />
      </>
    )
  }
}
export default App
