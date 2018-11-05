import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Signup from './components/Signup';
import Navbar from './components/Navigation/Navbar';

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <div>
                <Route component={App} exact path="/" />
                <Route component={Signup} exact path="/signup" />
            </div>
        </div>
    </Router>
    , document.getElementById('root'));
