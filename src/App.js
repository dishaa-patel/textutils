import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type: type
    })

  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      setAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      setAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <NavBar title = "TextUtils" aboutText="About" mode= {mode} toggleMode={toggleMode}/>
      <Alert alert = {alert} />
      <About />
      <TextForm heading = "Enter the text below" />
    </>
  );
}

export default App;
