import React, { Component } from 'react'
import BoxImgBg from '../BoxImgBg/BoxImgBg'
import './mainHighlights.css'

export default class MainHighlights extends Component {
    render() {
        let highlights_class = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
        return (
            <div className="main-highlights">
                {
                    this.props.sample.map((item, i) => {
                        return <div className={highlights_class[i] + ' highlight'}>
                            <BoxImgBg data={item} height={i === 1 || i === 2 || i === 5 || i === 6 ? '400px' : '200px'} />
                        </div>
                    })
                }
            </div>
        )
    }
}