import React, { Component } from 'react'
import MainHighlights from '../components/MainSection/MainHighlights/MainHighlights'
import Navbar from '../components/Navbar/Navbar'
import './../css/home.css'
import { sample } from './../sample'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="main-container">
                    <section>
                        <MainHighlights sample={sample.slice(0, 10)} />
                    </section>
                </div>
            </div>
        )
    }
}