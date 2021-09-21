import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Category from './pages/Category'


const App = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:category/" component={Category} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </>
}
export default App