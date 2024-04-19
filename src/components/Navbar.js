import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//props in react ................
export default function Navbar(props) {
  return (
    // ye js literal backtrick ke andar likhte.... jo ki use kia add krne ke lie props bagera
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    <div className="container-fluid">
        {/* it is prop.. {props.tittle} define in app.js */}
      <Link className="navbar-brand" to="/">{props.tittle}</Link> 
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
         
        
          <li className="nav-item">
            <Link className="nav-link active" aria-disabled="true" to="/about">About</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          
        </form> */}
       
      {/* ye sb className ko litreal se bdla hai js ke jo ki bootstrap ka hai class */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode </label>
</div>
      </div>
     
      
    </div>
    
  </nav>
  )
}

// it is used for detecting error ye bolra hai ki string hi bhej skte hai 
//it is functionbased components... string bhej ray isliye string likha jo bhje bo likhege like object,number..jo bhi
//it indicate the type of prop..
Navbar.prototype={
    tittle:PropTypes.string,
    // tittle:PropTypes.string.isRequired, it make the tittle prop required
     about:PropTypes.string

}
//it is default props if no props is defined then deafult props render
Navbar.defaultProps={
    tittle:'it is default tittle',
    about:'it is default about'
}
