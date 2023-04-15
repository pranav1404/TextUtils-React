import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type :  type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode =  () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  }

  return (
    <div className = "App">
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}  />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading = "Enter the text to analyse" mode = {mode} toggleMode = {toggleMode}/>
      </div>
    </div>
  );
}

export default App;