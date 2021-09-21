import axios from 'axios';
import React, { Component } from 'react'
import PaginationComponent from '../components/paginationComponent/PaginationComponent'
import { NEWS_API_KEY } from '../utility';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.match.params.category,
            news: []
        }
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?pageSize=100&category=${this.state.category}&apiKey=${NEWS_API_KEY}&country=in`)
            .then(res => this.setState({ news: res.data.articles }))

    }
    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category !== nextProps.match.params.category) {
            this.setState({ category: nextProps.match.params.category })
            axios.get(`https://newsapi.org/v2/top-headlines?pageSize=100&category=${nextProps.match.params.category}&apiKey=${NEWS_API_KEY}&country=in`)
                .then(res => this.setState({ news: res.data.articles }))
        }
    }

    render() {
        return <div className="main-container">
            {
                this.state.news.length ?
                    <PaginationComponent news_data={this.state.news} />
                    :
                    null
            }
        </div>

    }
}