import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({msg: message,
    type: type})
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const [mode, setmode] = useState('light');
  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success")
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor="#052c65";
      showAlert("Dark mode has been enabled", "success")
    }
  }

  return (
    <>
   <Navbar title="TextUtiles2" about = "About Us" mode = {mode} toggleMode = {toggleMode}  />
   <Alert alert={alert}/>
   <div className = "container my-3">
  <Textbox  heading="Enter Your Text Here" mode = {mode} showAlert={showAlert}/>
   </div>
    </>

    
  );
}

export default App;



