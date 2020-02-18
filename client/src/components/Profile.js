import React, { Component } from 'react'
import { getProfile, registerRating } from './UserFunctions'
import './css/profile.css'
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      email:'',
      first_name: '',
      errors: {},
      rating: '',
      message: ''
    };

    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    
  }

  componentWillMount() {
    const token = localStorage.usertoken;
    getProfile(token).then(res => {
      this.setState({
        first_name: res.first_name,
        email:res.email,
      });
    });
  }


  onSubmit(e) {
    e.preventDefault()
    
    const user = {
      
      email: this.state.email,
      message:this.state.message,
      rating: this.state.rating,
    }
    
    registerRating(user).then(res => {
      console.log("onsubmit2");
      localStorage.removeItem('usertoken')
      this.props.history.push(`/`)
      console.log("push complete");
   })
  }
    
 
// handleClick(){
//  // console.log(this.state);
//   // this.setState({rating});
//   console.log(this.state.rating);
// }
  

  // logOut() {
  //   localStorage.removeItem('usertoken');
  //   this.props.history.push(`/`);
  // }      
    
     


  



  render() {
    return (

      <div className="container">

        <h1 className="text-center">Hi {this.state.first_name} </h1>
        <button type="button" className="btn2 " data-toggle="modal" data-target="#myModal">Log out</button>


        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
          <form onSubmit={this.onSubmit}>
            
              <div className="modal-content">
              
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <h4>How was your experiance</h4>
                  <h4>with our website ?</h4>

                  <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" onClick={this.onChange} /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" onClick={this.onChange}/><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" onClick={this.onChange}/><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" onClick={this.onChange}/><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" onClick={this.onChange}/><label className="full" htmlFor="star1" title="bad - 1 star"></label>
                  </fieldset>
                  <textarea  rows="2" cols="50" name="message" onChange={this.onChange}  placeholder="Type your feedback here....">
                  {/* style={{visibility: this.state.rating <= '3' ? 'visible' : 'hidden' }} */}
                  </textarea>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-default" >Submit</button>
                </div>
                
              </div>
              </form>
          </div>
        </div>
        {/* onClick={this.logOut.bind(this)} */}



      </div>
    )
  }
}

export default Profile