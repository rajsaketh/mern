import React, { Component } from 'react'
import { register } from './UserFunctions'
import './css/Register.css'


class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            error: '',
            email_error: '',
            password_error: '',
            status: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,


        }
        const errors = {}
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        errors.email = !user.email.match(emailformat) ?
            "Invalid Email" : ""
        this.setState({ email_error: errors.email })
        if (errors.email!=="") {
            alert(errors.email)
        }
        errors.password = user.password.length < 6 ?
            "Password should be more than 6 characters" : ""
            if (errors.password!=="") {
                alert(errors.password)
            }
        
        console.log(errors)

        if (errors.email === "" && errors.password === "") {

            register(user).then(res => {
                if (!res.error) {
                    this.setState({ status: res.status })
                    alert(this.state.status);
                    this.props.history.push(`/`)
                } else {
                    this.setState({ error: res.error })
                    alert(this.state.error);
                }

            })
        }
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={this.onSubmit}>
                            <h3>Producer Tool Box</h3>
                            <h2 className="title center-limit-width">Register</h2>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} required />
                            </div>
                            {/* <div className="alert alert-danger"
                                style={{visibility: this.state.email_error !== '' ? 'visible' : 'hidden' }}>{this.state.email_error}</div>
                            */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} required />
                            </div>
                            <button type="submit" className=" btn1  btn-block">
                                Register
                            </button>
                            <p className="para1">Alredy registred? <a href="/">Login</a></p>
                            <p className="para1"> <a href="#">Contact Us </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#">  Terms & Conditions </a></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register