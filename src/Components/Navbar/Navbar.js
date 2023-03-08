import React from 'react'

import NavbarStyle from './Navbar.css'
import logo from './Logo/logo.png'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TbArrowsCross } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

//

function Navbar() {

const handleShow =()=>{
    const navItem = document.querySelector('.navbar_container');
    navItem.classList.add('active')
    navItem.classList.remove('hide')

}
const handleHide =()=>{
    const navItem = document.querySelector('.navbar_container');
    navItem.classList.add('hide')
    navItem.classList.remove('active')

}

  return (
    <header className='header'>
      <div className='container'>
        <nav className='navbar-content d-flex justify-content-between'>
            <div className='navbar-logo'>
                <a href='#' className='navbar-brand'>
                    <img className='img-fluid' src={logo} alt='logo' />
                </a>
            </div>
            
            <div className='navbar_container ms-auto my-auto'>
                <ul className='navbar nav'>
                <TbArrowsCross onClick={handleHide} className='cross_icon my-auto' />
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link' >Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/skill' className='nav-link' >Skill</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/service' className='nav-link' >Service</NavLink>
                    </li>
                </ul>
            </div>
            <div className='navIcon my-auto'>
                <BsFillGrid3X3GapFill onClick={handleShow} className='icon' />
            </div>
            
        </nav>
      </div>
    </header>
  )
}

export default Navbar
