import React, { Component } from 'react'

//I need to create a class for my light box/switch
//inside the class I will have some set states, background color, text color
//I will create a button called "LightBox"
//it will assume the set states 
//it will have an onClick
//I will create a method that changes the text and background in the box/switch
//the text will go from "off" --> "on"
//the background will change from white --> yellow 


 class LightSwitch extends Component {
     constructor(props){
        super(props)
       this.state = {
        light: "OFF",  // "light" will be my on/off text designation
        colorBox: "white" // colorBox is the background

        }
     }
     lightOnOff = () => {
         //this method will change the text inside the lightbox to "on"
         //the background inside the box will change to yellow 
         //I will use conditionals to operate the box
         if (this.state.light === "ON") {
             this.setState({light: "OFF", colorBox: "white"})
            } else { 
                this.setState({light: "ON", colorBox: "yellow"})
            }
        }
        render() {
            return (
                <>
                <button 
                id = "LightSwitch" onClick = {this.lightOnOff} style = {{color: "black", height: 100, width: 100, margin: 20, background: this.state.colorBox}} > 
                    {this.state.light} 
                </button>
            
            </>
    )
}
}

export default  LightSwitch

            

          
            
             
          
    
       
        