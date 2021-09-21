import React from 'react'
import NewsBox from './newsbox/NewsBox'


const RecentNews = ({ data }) => {
    return <div style={{ padding: '10px' }} >
        <h1>RECENT NEWS</h1>
        <hr />
        <div style={{ padding: '5px' }}>
            {
                data.map(item => {
                    return <NewsBox data={item} key={item.title} />
                })
            }
        </div>
    </div>

}
export default RecentNews;