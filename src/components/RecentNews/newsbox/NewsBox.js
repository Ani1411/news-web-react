import React from 'react'
import { toDate } from '../../../utility';
import './newsbox.css'

const NewsBox = ({ data }) => {
    return <a className="newsbox" href={data.url} target="_blank" rel="noreferrer">
        <div className="newsbox-img">
            <img src={data.urlToImage} alt={data.title} />
        </div>
        <div className="news-content">
            <div className="news-title">
                <h3>{data.title}</h3>
                {
                    data.author && <span>by <strong>{data.author} </strong></span>
                }
                <span>{toDate(data.publishedAt)}</span>
            </div>
            <p className="news-desc">{data.description}</p>
        </div>
    </a>
}

export default NewsBox;
