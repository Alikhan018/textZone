import './App.css';
import Alerts from './component/Alerts';
import Navbar from './component/Navbar.js';
import TextForm from './component/textForm.js';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light'); 
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 3000);
  const changeMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      showAlert("! DarkMode enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("! LightMode enabled", "success");
    }
  }
  
  return (
    <>
      <Navbar name="TheText" optionOne="Home" optionTwo="About TheText" optionThree="CheckOut" mode={mode} changeMode={changeMode} />
      <Alerts alert={alert}/>
      <div className="container my-3">
        <TextForm text="Enter Text" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
