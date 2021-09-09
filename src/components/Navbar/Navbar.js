import React from 'react'
import './nav.css'


const Navbar = () => {
    return <nav>
        <h1>NEWSAPP</h1>
        <ul className="menu-list">
            <li>Home</li>
            <li>business</li>
            <li>science</li>
            <li>technology</li>
            <li>sports</li>
            <li>health</li>
            <li>entertainment</li>
            <li><i className="fas fa-search" /></li>
        </ul>
    </nav>
}
export default Navbar;