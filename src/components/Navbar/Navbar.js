import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './nav.css'
import { categories } from '../../utility';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true)
    const nav_ul_ref = useRef(null);
    const handleNav = () => {
        setShowNav(!showNav)
        nav_ul_ref.current.style.width = showNav ? '100%' : 0
    }

    return <nav>
        <NavLink to="/">
            <h1 className="logo">
                <span>WEB</span>
                <span>NEWS</span>
            </h1>
        </NavLink>
        <ul className="menu-list sidebar" ref={nav_ul_ref}>
            <li><Link className="nav-link" to="/">Home</Link></li>
            {
                categories.map(item => {
                    return <li key={item} onClick={() => window.scrollTo(0, 0)}>
                        <NavLink className="nav-link" activeClassName="active" to={"/" + item + '/'}>{item}</NavLink>
                    </li>
                })
            }
        </ul>
        <div className="nav-icons">
            <span onClick={() => handleNav()} > <i className={showNav ? "fas fa-bars" : "fas fa-times"} /> </span>
        </div>
    </nav>
}

export default Navbar;