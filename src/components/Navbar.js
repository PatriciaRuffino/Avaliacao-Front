/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from "../components/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#"><img className="logo" src= {logo} alt= "logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: "#C0C0C0"}} />
        </button>
      
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#main-info">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li><li className="nav-item">
              <a className="nav-link" href="#container">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#port">Portifólio</a>
            </li>
            
          </ul>
         
        </div>
      </nav>

    )
}
          
        

export default Navbar
