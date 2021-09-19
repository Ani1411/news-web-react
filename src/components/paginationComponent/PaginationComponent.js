import React, { Component } from 'react'
import RecentNews from '../RecentNews'
import './paginationComponent.css'


export default class PaginationComponent extends Component {
    constructor() {
        super();
        this.state = {
            multiplier: 0,
        }

    }

    handlePageNumberClick = (index) => {
        window.scrollTo(0, 0)
        setTimeout(() => this.setState({ multiplier: index }), 500)
    }

    render() {
        let pageSize = 10
        let total_pages = (this.props.news_data.length) / pageSize
        let num = Array(Math.ceil(total_pages)).fill().map((v, i) => i + 1);

        let data = this.props.news_data.slice(0 + this.state.multiplier * pageSize, (this.state.multiplier + 1) * pageSize)

        let multiplier = this.state.multiplier
        let slice_fr = multiplier === 0 || multiplier === 1 ? 0 : multiplier - 2
        let slice_to = multiplier === 0 || multiplier === 1 ? 5 : multiplier + 3

        console.log(' ')
        console.log('from', slice_fr)
        console.log('to', slice_to)
        console.log('multiplier', multiplier)
        return (
            <div>
                <RecentNews data={data} />
                <div className="pagination">
                    <ul>
                        <li>
                            {
                                multiplier !== 0 ?
                                    <button onClick={() => this.handlePageNumberClick(multiplier - 1)}>{'<'}</button>
                                    :
                                    <button disabled>{'<'}</button>
                            }
                        </li>
                        {
                            num.slice(slice_fr, slice_to).map((item, idx) => {

                                return <li key={idx}
                                    onClick={() => this.handlePageNumberClick(item - 1)}
                                    className={this.state.multiplier === item - 1 ? 'pagination-li active-page' : 'pagination-li'}
                                >
                                    {item}
                                </li>
                            })
                        }
                        <li>
                            {
                                (multiplier + 1) !== total_pages ?
                                    <button onClick={() => this.handlePageNumberClick(multiplier + 1)}>{'>'}</button>
                                    :
                                    <button disabled>{'>'}</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}