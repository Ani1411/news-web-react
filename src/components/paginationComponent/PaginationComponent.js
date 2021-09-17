import React, { Component } from 'react'
import RecentNews from '../RecentNews'
import { sample } from '../../sample'
import './paginationComponent.css'
import axios from 'axios';


export default class PaginationComponent extends Component {
    constructor() {
        super();
        this.state = {
            total_pages: (sample.length) / 3,
            multiplier: 0,
            pageSize: 3
        }
        
    }
    handlePageNumberClick = (index) =>{
        window.scrollTo(0, 0)
        setTimeout(()=>this.setState({ multiplier: index }), 500)
    }
    
    render() {
        let pageSize = 5
        let total_pages = (this.props.news_data.length) / pageSize
        let num = Array(Math.ceil(total_pages)).fill().map((v, i) => i + 1);

        let data = this.props.news_data.slice(0 + this.state.multiplier * pageSize, (this.state.multiplier + 1) * pageSize)
        return (
            <div>
                <RecentNews data={data} />
                <div className="pagination">
                    <ul>
                        {
                            num.map((item, i) => {
                                return <li onClick={() => this.handlePageNumberClick(i)}>
                                    {item}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}