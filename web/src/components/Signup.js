import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="core-container">
                <h1>Signup</h1>
                <p>Please fill out the information below: </p>
                <form>
                    <label>Name: </label>
                    <input type="text" placeholder="name"></input>
                    <label>Email: </label>
                    <input type="email" placeholder="email"></input>
                    <label>Phone: </label>
                    <input type="tel" placeholder="phone"></input>
                    <label>Username: </label>
                    <input type="text" placeholder="username"></input>
                    <label>Password: </label>
                    <input type="password" placeholder="password"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup;