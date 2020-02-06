import React, { Component } from 'react'
import { login } from './UserFunctions'
import './login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            type: 'password',
        }
        this.onChange = this.onChange.bind(this);
        this.eyeClick = this.eyeClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        console.log("onsubmit");
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (!res.error) {
                this.props.history.push(`/profile`)
            } else {
                this.setState({ error: res.error })
            }
        })


    }

    eyeClick = () => this.setState(({ type }) => ({
        type: type === 'text' ? 'password' : 'text'
    }))

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form  onSubmit={this.onSubmit}>
                            <h3>Producer Tool Box</h3>
                            <h2 className="title center-limit-width">Registered Brokers Log in Here</h2>
                            <p className="para">Not signed up? <a href="/Register">Register now</a></p>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type={this.state.type}
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} required/>
                                <span className="p-viewer2" onClick={this.eyeClick}>
                                    <i className="fa fa-eye"></i>
                                </span>
                            </div>

                            <div className="alert alert-danger"
                                style={{ visibility: this.state.error !== '' ? 'visible' : 'hidden' }}>{this.state.error}</div>
                            <button type="submit" className="btn ">
                                Log in
                            </button>
                        </form>
                        <p className="para"><a href="#">Forgot Username</a> or <a href="#">Forgot Password</a></p>

                        <p className="para">Need information on Anthem products or about doing business with us? <a href="#">Go to the Producer site for your state </a></p>
                        <p className="para"> <a href="#">Contact Us </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#">  Terms & Conditions </a></p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login