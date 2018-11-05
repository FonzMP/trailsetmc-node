import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './App'

ReactDOM.render(
    <Router>
        <div>
            <Route component={App} exact path="/" />
        </div>
    </Router>
    , document.getElementById('root'));
