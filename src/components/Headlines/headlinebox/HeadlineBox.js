import React from 'react'
import './headlinebox.css'

const HeadlineBox = ({ data }) => {
    return <div className="headline-box">
        <a href={data.url} target="_blank" rel="noreferrer">
            <h4>{data.title}</h4>
        </a>
    </div>
}

export default HeadlineBox;