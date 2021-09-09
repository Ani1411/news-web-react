import React from 'react'
import './categoryNewsBox.css'
import loadIcon from './../../../assets/loadIcon.png'

const CategoryNewsBox = ({ data }) => {
    return <div className="cat-ns-box">
        <div className="cat-ns-img">
            {
                data.image_url ?
                    <img src={data.image_url} alt={data.title} />
                    :
                    <img className="rotating" src={loadIcon} alt={data.title} />
            }
        </div>
        <div className="cat-ns-title">
            <a href={data.link}>
                <h3>{data.title}</h3>
            </a>
        </div>
    </div>
}

export default CategoryNewsBox;