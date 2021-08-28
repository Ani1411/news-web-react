import React, { Component } from 'react'
import './boxImgBg.css'

export default class BoxImgBg extends Component {
    render() {
        let data = this.props.data
        return (
            <div className="news-img-box">
                <a className="news-img-box-link" href={data.url} target="_blank" rel="noreferrer">
                    <div className="title-box" style={{height:this.props.height}} >
                        <img width='100%' height="100%" alt={data.title} src={data.urlToImage}/>
                        <div className="black-box"></div>
                        <div className="txt-over-img">
                            <h3>{data.title}</h3>
                            {/* <p>{sample.description}</p> */}
                            <span>{Date(data.publishedAt).slice(0, 15)}</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}