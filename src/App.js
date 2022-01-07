import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const[mode,setMode] = useState('dark');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
      <NavBar title = "TextUtils" aboutText="About" mode= {mode} toggleMode={toggleMode}/>
      <About />
      <TextForm heading = "Enter the text below" />
    </>
  );
}

export default App;
