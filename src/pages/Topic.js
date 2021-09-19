import axios from 'axios';
import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import PaginationComponent from '../components/paginationComponent/PaginationComponent'

export default class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.match.params.category,
            news: []
        }
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?pageSize=100&category=${this.state.category}&apiKey=81b8c2fc259c4192b5ffbda9bb1ce2ca&country=in`)
            .then(res => this.setState({ news: res.data.articles }))

    }
    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category !== nextProps.match.params.category) {
            this.setState({ category: nextProps.match.params.category })
            axios.get(`https://newsapi.org/v2/top-headlines?pageSize=100&category=${nextProps.match.params.category}&apiKey=81b8c2fc259c4192b5ffbda9bb1ce2ca&country=in`)
                .then(res => this.setState({ news: res.data.articles }))
        }
    }

    render() {
        return this.state.news.length ? <div className="main-container">  <PaginationComponent news_data={this.state.news} /></div>:null
         
    }
}