import axios from 'axios'
import React, { Component, } from 'react'
import CategoryNewsBox from './categoryNewsBox/CategoryNewsBox'
import './categoryNewsBox/categoryNewsBox.css'
import { categories } from './../../utility/'
import { NavLink } from 'react-router-dom'

// const cors_uri2 = 'https://api.allorigins.win/get?url='
const cors_uri = 'https://cors-anywhere.herokuapp.com/'
// const key = 'pub_116372cfc513aa03e2c5a75098d27b49d736'


export default class CategoriseSection extends Component {
    constructor() {
        super();
        this.state = {
            categoriseNews: []
        }
    }
    //https://newsdata.io/api/1/news?language=en&category=technology

    componentDidMount() {
        categories.forEach(cat => {
            axios.get('https://newsdata.io/api/1/news?apiKey=pub_116372cfc513aa03e2c5a75098d27b49d736&country=in&language=en&category=' + cat)
                .then(res => {
                    console.log(res)
                    // this.setState({ categoriseNews: { ...this.state.categoriseNews, [cat]: JSON.parse(res.data.contents).results } })
                    this.setState({ categoriseNews: { ...this.state.categoriseNews, [cat]: res.data.results } })
                })
                .catch(err => console.log(err.response))
        })
    }
    render() {
        console.log(this.state.categoriseNews)
        return (
            <div>
                {
                    Object.entries(this.state.categoriseNews).map(([key, arr]) => {
                        return <div key={key} className="cat-ns-container">
                            <div className="cat-ns-head">
                                <h1>{key}</h1>
                                <span onClick={() => window.scrollTo(0, 0)}>
                                    <NavLink to={"/"+key}>See More</NavLink>
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
            </div>
        )
    }
}


