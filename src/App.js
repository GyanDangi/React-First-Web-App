
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


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
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    {/* Is navbar se humne propstype aur default propstype sikha hai */}
{/* <Navbar title="TextUtils" aboutText="About Us"/> */}
{/* <Navbar /> */}

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3" >
<TextForm showAlert={showAlert}  heading="Enter the text to analyze" mode={mode}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
