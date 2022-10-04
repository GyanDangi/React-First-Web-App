import React from 'react'
import PropTypes from 'prop-types'
import {  Link } from 'react-router-dom'

// import { a } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <a className="navbar-brand" to="/">{props.title}</a> */}
      <Link className="navbar-brand" to ="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mx-1   mb-lg-0">
          <li className="nav-item mx-1" >
            <Link className="nav-a active" aria-current="page" to="/"> Home </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-a" to="/about"> {props.aboutText} </Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled Dark-Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.prototype={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string
}
Navbar.defaultProps={
    title:'set title here',
    aboutText:'About'
}
