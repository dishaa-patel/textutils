import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
//import {
 // BrowserRouter as Router,
 // Route,
//  Switch,
//} from "react-router-dom";



function App() {
  const[mode,setMode] = useState('light');
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
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      {/*<Router> */}
      <NavBar title = "TextUtils" aboutText="About" mode= {mode} toggleMode={toggleMode}/>
      <Alert alert = {alert} />
      {/*<Switch> */}
           {/*<Route path="/about"> */}
           {/* <About /> */}
         {/* </Route> */}
         {/* <Route path="/"> */}
          <TextForm showAlert= {showAlert} heading = "Enter the text below" />
          {/*</Route> */}
       {/* </Switch> */}
        {/* </Router> */}
      
      
    </>
  );
}

export default App;
