import React from 'react'
import HeadlineBox from './headlinebox/HeadlineBox'


const Headlines = ({ data }) => {
    return <div >
        <h1>Top Headlines</h1>
        <hr></hr>
        <div style={{ padding: '10px 10px'}}>
            {
                data.map(item => {
                    return <HeadlineBox data={item} />
                })
            }
        </div>
    </div>
}
export default Headlines;