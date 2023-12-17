import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        <div className="logo">
            <img src="https://yt3.ggpht.com/ytc/AMLnZu97E4mkhR3WwavowWD7kFtIceVAwTBrRzELwP-d3XY=s900-c-k-c0x00ffffff-no-rj" alt="no image" />
            <h1>JAIMEET SINGH</h1>
        </div>
        <div className="navItems">
            <Link to={'/#home'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <HashLink to={'/#about'}>About</HashLink>
            <HashLink to={'/#brands'}>Brands</HashLink>
            <Link to={'/services'}>Services</Link>
        </div>
    </nav>
  )
}

export default Header