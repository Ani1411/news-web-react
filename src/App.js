import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Topic from './pages/Topic'


const App = () => {
    return <div >
        <BrowserRouter>
            <Navbar />
            <Switch>
                <div style={{ margin: '0 5%' }}>
                    <Route exact path="/" component={Home} />
                    <Route path="/:category" component={Topic} />
                </div>
            </Switch>
        </BrowserRouter>
        {/* <Home /> */}
        <Footer />
    </div>
}
export default App