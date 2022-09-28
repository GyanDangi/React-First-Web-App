
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light');// whether dark mode is enable or not

  const toggleMode=()=>{

    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#10065b';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    {/* Is navbar se humne propstype aur default propstype sikha hai */}
{/* <Navbar title="TextUtils" aboutText="About Us"/> */}
{/* <Navbar /> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-3" >
<TextForm heading="Enter the text to analyze" mode={mode}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
