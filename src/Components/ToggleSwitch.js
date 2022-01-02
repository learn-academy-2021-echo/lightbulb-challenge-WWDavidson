import React, { Component } from 'react'
import'./ToggleSwitch.scss';
import LightBulb from './LightBulb.js';

//I made this new switch so that it can soley fucntion as a light switch
//I found a toggle switch that I am going to try to replicate 
//Once I get it functioning, I will style it using CSS or SCSS. 
//It will have a simple ON/OFF funciton -> naturally in the OFF position
// I will then import an SVG image of a lightbulb where I can change the inside 
//from yellow to white 


class ToggleSwitch extends Component {
    constructor(props){
        super(props)
        this.state= {
            light: "OFF", //OFF will be the natural state of the toggle-switch
            lightBulb: "white",
        }
    }
    
    //here I will create my method to turn the lightbulb on 
    //it will start in the OFF/white position
    //when clicked ON it will turn the lightbulb ON/yellow
    lightOnOff = () => {
        if (this.state.light === "ON") {
            this.setState({light: "OFF", lightBulb: "white"})
           } else { 
               this.setState({light: "ON", lightBulb: "yellow"})
           }

    }
    
    
    render() {
        return (
           
            <div 
            
                
            className ="toggle-switch"> 
                
                <LightBulb color={this.state.lightBulb} /> 
                <input 
                type="checkbox"
                onClick= {this.lightOnOff}
                className="toggle-switch-checkbox"
                name={this.state.lightOnOff}
                id={this.props.Name}
                />
                <label className="toggle-switch-label" htmlFor={this.props.Name}>
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch"/>   
                </label>

                </div>
                
        )
    }
}
export default ToggleSwitch