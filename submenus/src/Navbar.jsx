import React from 'react'
import logo from "./images/logo.svg";
import {FaBars} from "react-icons/fa";


function Navbar() {
  return (
    <nav className='nav'>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} className="nav-logo" alt="" />
                <button className="btn toggle-btn" >
                    <FaBars></FaBars>

                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;