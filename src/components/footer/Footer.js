import React from 'react'
import './footer.css'
const Footer = () => {
    return <div className="footer">
        <div className="footer-about">
            <h1>NEWSSTORY</h1>
            <hr />
            <p >
                NEWSSTORY is a personal project developed by Aniruddh using APIs from newsapi.org and newsdata.io.
            </p>
        </div>
        <div className="footer-cat">
            <h3>Categories</h3>
            <ul>
                <li>business</li>
                <li>science</li>
                <li>technology</li>
                <li>sports</li>
                <li>health</li>
                <li>entertainment</li>
            </ul>
        </div>
    </div>
}

export default Footer;