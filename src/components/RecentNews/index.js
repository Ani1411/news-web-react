import React from 'react'
import NewsBox from './newsbox/NewsBox'


const RecentNews = ({ data }) => {
    return <div >
        <h1>RECENT NEWS</h1>
        <hr></hr>
        <div style={{ padding: '10px 20px'}}>
            {
                data.map(item => {
                    return <NewsBox data={item} />
                })
            }
        </div>
    </div>

}
export default RecentNews;