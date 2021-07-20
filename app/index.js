import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
                <Routes/>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))