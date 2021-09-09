import React from 'react'
import './newsbox.css'
// import loadIcon from './../../../assets/loadIcon.png'

const NewsBox = ({ data }) => {
    return (
        <div className="newsbox">
            <div className="newsbox-img">
                <img src={data.urlToImage}  alt={data.title} />
            </div>
            <div className="news-content">
                <div className="news-title">
                    <a href={data.url} target="_blank" rel="noreferrer">
                        <h3>{data.title}</h3>
                    </a>
                    {
                        data.author && <span>by <strong>{data.author} </strong></span>
                    }
                    <span>{data.publishedAt}</span>
                </div>
                <p className="news-desc">{data.description}</p>
            </div>
        </div>
    )
}
export default NewsBox;
