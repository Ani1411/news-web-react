import React from 'react'
import './categoryNewsBox.css'
import loadIcon from '../../../assets/images.png'

const CategoryNewsBox = ({ data }) => {
    return <a className="cat-ns-box" href={data.link} target="_blank" rel="noreferrer">
        <div className="cat-ns-img">
            {
                data.image_url ?
                    <img src={data.image_url} alt={data.title} />
                    :
                    <img src={loadIcon} alt={data.title} />
            }
        </div>
        <div className="cat-ns-title">
            <h3>{data.title}</h3>
        </div>
    </a>
}

export default CategoryNewsBox;