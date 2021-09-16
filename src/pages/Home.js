import React, { Component } from 'react'
import CategoriseSection from '../components/CategorySection'
import Headlines from '../components/Headlines'
import MainHighlights from '../components/MainSection/Highlights/Highlights'
import RecentNews from '../components/RecentNews'
import './../css/home.css'
import { sample } from './../sample'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="main-container">
                    <section>
                        <MainHighlights sample={sample.slice(0, 10)} />
                    </section>

                </div>
                <div className="rc-hl-container">
                    <RecentNews data={sample.slice(0, 5)} />
                    <Headlines data={sample.slice(0, 10)} />
                </div>
                <div className="categorise-news-section">
                    <CategoriseSection/>
                </div>
            </div>
        )
    }
}