import React from 'react'
import { categories } from '../../utility'
import './footer.css'

const Footer = () => {
    return <div className="footer">
        <div className="footer-about">
            <h1>WEBNEWS</h1>
            <hr />
            <p >
                WEBNEWS is a personal project developed by Aniruddh using APIs from newsapi.org and newsdata.io.
            </p>
        </div>
        <div className="footer-cat">
            <h3>Categories</h3>
            <ul>
            {
                categories.map(item=>{
                    return <li key={item}><a href={"/"+item}>{item}</a></li>
                })
            }
            </ul>
        </div>
    </div>
}

export default Footer;