// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import AboutUs from './components/AboutUs';
import { useState } from "react";
import Alert from './components/Alert';
// import ReactDOM from 'react-dom/client';

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom"



function App() {
  //video 12 ...states bala
  const [mode, setMode] = useState('light'); 
  const toggle=()=>{
if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#495d7a';
  showalert("Dark mode enabled","success")
  document.title="My App-Dark mode" //dynamically changing title which is in index.html
}else{
setMode('light');
document.body.style.backgroundColor='white';
showalert("Light mode enabled","success")
document.title="My App" //dynamically changing title which is in index.html
}
  }
  const [alert, setAlert] = useState(null); //alert bali video ka hai
  const showalert=(message,type)=>{
    setAlert({ //alert object bn gya yha.
message:message,
type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return ( // it will return only one tag ...and class replace with className
  <>  {/* it is the main tag which get returned */}

  {/* <Navbar /> */} {/* //it is for default props */}
  {/* router is used for single page switching */}
  {/* <BrowserRouter>   */}
<Navbar tittle= "AnuragApp" about="New About" mode={mode} togglemode={toggle}/>
<Alert alerts={alert}/>
{/* bootstrap ki class hai container*/}
<div className="container"> 

{/* Syntax of routers */}
{/* <Routes> */}
  {/* path is same as to in navbar.js */}
            {/* <Route exact path="/about" element={<AboutUs/>}></Route> */}
            {/* <Route
              exact path="/"
              element={
               
              }
            ></Route>
          </Routes>
      
</BrowserRouter> */}
 <Textform showAlert={showalert} heading="Enter Text to analyze " mode={mode}/>
      </div>

 </>
  );
}

export default App;
