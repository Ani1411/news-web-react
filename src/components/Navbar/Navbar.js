import React from 'react'
import './nav.css'


const Navbar = () => {
    return <nav>
        <h1>NEWSAPP</h1>
        <ul className="menu-list">
            <li>Home</li>
            <li>Science</li>
            <li>Technology</li>
            <li>Health</li>
            <li>Politics</li>
            <li>Art & Culture</li>
            <li><i className="fas fa-search" /></li>
        </ul>
    </nav>
}
export default Navbar;