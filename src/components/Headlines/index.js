import React from 'react'
import HeadlineBox from './headlinebox/HeadlineBox'


const Headlines = ({ data }) => {
    return <div style={{ padding: '10px' }} >
        <h1>Top Headlines</h1>
        <hr />
        <div style={{ padding: '5px 5px' }}>
            {
                data.map(item => {
                    return <HeadlineBox data={item} />
                })
            }
        </div>
    </div>
}
export default Headlines;