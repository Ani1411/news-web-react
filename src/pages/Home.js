import axios from 'axios'
import React, { Component } from 'react'
import CategoriseSection from '../components/CategorySection'
import Headlines from '../components/Headlines'
import MainHighlights from '../components/MainSection/Highlights/Highlights'
import RecentNews from '../components/RecentNews'
import { NEWS_API_URL_HEAD } from '../utility'
import './../css/home.css'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }
    componentDidMount() {
        axios.get(NEWS_API_URL_HEAD)
            .then(res => {
                let response = res.data.articles.filter((v, i, a) => a.findIndex(t => ((t.title).toLocaleLowerCase() === (v.title).toLocaleLowerCase())) === i)
                this.setState({ news: response })
            })
            .catch(err => console.log(err.response))
        // let response = currentNews.filter((v, i, a) => a.findIndex(t => ((t.title).toLocaleLowerCase() === (v.title).toLocaleLowerCase())) === i)
        // this.setState({ news: response })
    }
    render() {
        console.log(this.state.news)
        var main_highlights = this.state.news.slice(0, 10)
        var recent_news = this.state.news.slice(10, 20)
        var headlines = this.state.news.slice(20)
        return this.state.news && <div className="main-container">
            <MainHighlights sample={main_highlights} />
            <div className="rc-hl-container">
                <RecentNews data={recent_news} />
                <Headlines data={headlines} />
            </div>
            <div className="categorise-news-section">
                <CategoriseSection />
            </div>
        </div>

    }
}
const IPGeo = 'https://ipapi.co/json/'