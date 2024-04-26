import React, { useState } from 'react'

export default function DarkMode() {
    const [mode,setMode] = useState({
        backgroundColor: 'black',
        color:'white'
    });
    const [text,setText] = useState("Light Mode");
    const Modes = () => {
         if(text==="Light Mode"){
            setMode({
                backgroundColor: 'white',
                color:'black'
            })
            setText("Dark Mode")
         }
         else{
            setMode({
                backgroundColor: 'black',
                color:'white'
            })
            setText("Light Mode")
         }
    }
  return (
    <>
        
        <div class="form-check form-switch" style={{ backgroundColor: mode.backgroundColor, color: mode.color }}>
            <input class="form-check-input" onClick={Modes} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">{text}</label>
        </div>
    </>   
  );
}
