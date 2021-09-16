import React from 'react'
import { toDate } from '../../../utility'
import './boxImgBg.css'


const BoxImgBg = ({ data, height }) => {
    return <div className="news-img-box">
        <a className="news-img-box-link" href={data.url} target="_blank" rel="noreferrer">
            <div className="title-box" style={{ height: height }} >
                <img alt={data.title} src={data.urlToImage} />
                <div className="black-box"></div>
                <div className="txt-over-img">
                    <h3>{data.title}</h3>
                    <span>{toDate(data.publishedAt)}</span>
                </div>
            </div>
        </a>
    </div>
}

export default BoxImgBg