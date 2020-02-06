import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
      return response.data
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = token => {
  return axios
    .get('users/profile', {
      headers: { Authorization: ` ${token}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    
    
    .catch(err => {
      console.log(err)
    })
}
export const registerRating = existingUser => {
  return axios
    .post('users/rating', {
     
      email: existingUser.email,
      message:existingUser.message,
      rating:existingUser.rating,
    })
    .then(response => {
      console.log('added star rating');
      //console.log(response);
      
    })
    .catch(err => {
      console.log(err)
    })
}