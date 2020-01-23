import React, { Component } from 'react'
import { getProfile } from './UserFunctions'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    getProfile(token).then(res => {
      this.setState({
        first_name: res.first_name,
        last_name: res.last_name,
        email: res.email
      })
    })
  }

  render() {
    return (
      <div className="container">
          <h1 className="text-center">Hi {this.state.first_name}</h1>
      </div>
    )
  }
}

export default Profile