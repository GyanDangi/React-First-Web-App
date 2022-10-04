
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');// whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{

    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#10065b';
      showAlert("dark Mode has been enabled","success");
      document.title="dark mode"
      setInterval(() => {
        document.title="TextUtils is Amazing"
      }, 2000);
      setInterval(() => {
        document.title="Install TextUtils now"
     }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title="Light mode"
 
    }
  }
  return (
<>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3" >
          <Routes>
            <Route path="/about" element= { <About showAlert={showAlert} mode={mode}/>}>
            </Route> 
             <Route path="/" element= { <TextForm showAlert={showAlert}  heading="Enter the text to analyze" mode={mode}/>}> 
            </Route>
          </Routes> 
    </div>
    </Router> 
</>
  );
}

export default App;
