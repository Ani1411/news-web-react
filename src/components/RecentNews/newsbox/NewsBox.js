import React from 'react'
import { toDate } from '../../../utility';
import './newsbox.css'
import loadIcon from '../../../assets/images.png'

const NewsBox = ({ data }) => {
    return <a className="newsbox" href={data.url} target="_blank" rel="noreferrer">
        <div className="newsbox-img">
            {
                data.urlToImage ?
                <img src={data.urlToImage} alt={data.title} />
                :
            <img src={loadIcon} alt={data.title} />
            }
        </div>
        <div className="news-content">
            <div className="news-title">
                <h3>{data.title}</h3>
                <span className="publish-date">{toDate(data.publishedAt)}</span>
                {
                    data.author && <span >
                        by <strong>
                            <span className="author">
                                {data.author}
                            </span>
                        </strong>

                    </span>
                }
            </div>
            <p className="news-desc">{data.description}</p>
        </div>
    </a>
}

export default NewsBox;
