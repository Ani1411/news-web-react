import React from 'react'
import './categoryNewsBox.css'
// import loadIcon from './../../../assets/loadIcon.png'
import loadIcon from '../../../assets/loading.webp'

const CategoryNewsBox = ({ data }) => {
    return <a className="cat-ns-box" href={data.link}>
        {/* <div > */}
            <div className="cat-ns-img">
                {
                    data.image_url ?
                        <img src={data.image_url} alt={data.title} />
                        :
                        <img className="rotating" src={loadIcon} alt={data.title} />
                }
            </div>
            <div className="cat-ns-title">
                <h3>{data.title}</h3>
            </div>
        {/* </div> */}
    </a>
}

export default CategoryNewsBox;