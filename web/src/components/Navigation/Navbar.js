import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
            </div>
        )
    }
}

export default Navbar;