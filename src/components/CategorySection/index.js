import axios from 'axios'
import React, { Component, } from 'react'
import CategoryNewsBox from './categoryNewsBox/CategoryNewsBox'
import './categoryNewsBox/categoryNewsBox.css'
import { categories, NEWS_DATA_API_KEY } from './../../utility/'
import { NavLink } from 'react-router-dom'

const cors_uri = 'https://cors-anywhere.herokuapp.com/'


export default class CategoriseSection extends Component {
    constructor() {
        super();
        this.state = {
            categoriseNews: []
        }
    }

    componentDidMount() {
        categories.forEach(cat => {
            axios.get(cors_uri + 'https://newsdata.io/api/1/news?apiKey=' + NEWS_DATA_API_KEY + '&country=in&language=en&category=' + cat)
                .then(res => {
                    this.setState({ categoriseNews: { ...this.state.categoriseNews, [cat]: res.data.results } })
                })
                .catch(err => console.log(err.response))
        })
    }
    render() {
        return Object.entries(this.state.categoriseNews).map(([key, arr]) => {
            return <div key={key} className="cat-ns-container">
                <div className="cat-ns-head">
                    <h1>{key}</h1>
                    <span onClick={() => window.scrollTo(0, 0)}>
                        <NavLink to={"/" + key}>See More</NavLink>
                    </span>
                </div>
                <hr />
                <div className="cat-ns-list">
                    {
                        arr.slice(0, 5).map(item => <CategoryNewsBox data={item} key={item.title} />)
                    }

                </div>
            </div>
        })

    }
}


