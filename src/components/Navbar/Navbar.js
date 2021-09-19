import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './nav.css'
import { categories } from '../../utility';

const Navbar = () => {
    return <nav>
        <NavLink to="/">
            <h1 className="logo">
                <span>WEB</span>
                <span>NEWS</span>
            </h1>
        </NavLink>
        <ul className="menu-list">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {/* <li >
                <NavLink className="nav-link" activeClassName="active" to={"/business"}>{'business'}</NavLink>
            </li>
            <li >
                <NavLink className="nav-link" activeClassName="active" to={"/science"}>{'science'}</NavLink>
            </li>
            <li >
                <NavLink className="nav-link" activeClassName="active" to={"/technology"}>{'technology'}</NavLink>
            </li>
            <li >
                <NavLink className="nav-link" activeClassName="active" to={"/item"}>{'item'}</NavLink>
            </li> */}
            {
                categories.map(item => {
                    return <li key={item} onClick={() => window.scrollTo(0, 0)}>
                        <NavLink className="nav-link" activeClassName="active" to={"/" + item + '/'}>{item}</NavLink>
                    </li>
                })
            }
            {/* <li><i className="fas fa-search" /></li> */}
        </ul>
    </nav>
}
export default Navbar;