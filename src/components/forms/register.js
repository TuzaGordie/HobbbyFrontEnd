import React, { Component } from 'react';
import Header from '../header/Header';
import {Redirect} from 'react-router-dom';
import './register.css';
import login from './login'
import axios from 'axios';

class register extends Component {
  state = {
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    isLoggedIn: false
  };

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  onSubmit = (e) => {
    // console.log(this.state);
    e.preventDefault();
          const user = {
               firstName: this.state.firstName,
               lastName: this.state.lastName,
               username: this.state.username,
               email: this.state.email,
               password: this.state.password,
          }

          axios.post('http://localhost:1337/register', user)
               .then(res=>{
                    console.log(res.data);
                    alert(res.data.message);
                    if(res.data.success === true){
                      this.setState({isLoggedIn: !this.isLoggedIn})
                            const login = document.getElementById('login');
                            this.show(login);
                       //
                }
          });
  };

  render() {
    if(this.state.isLoggedIn){
      return (
        <Redirect to={"/login"} component={login}/>
      )
    }
    return (
      <div>
      <Header />
    	<form className="formr" onSubmit={this.onSubmit}>
        <input
          id="inputr"
          name="firstName"
          placeholder="Firstname"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          />
          <br/>
        <input
          id="inputr"
          name="lastName"
          placeholder="Lastname"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          />
          <br/>
        <input
          id="inputr"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          />
          <br/>
        <input
          id="inputr"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          />
          <br/>
        <input
          id="inputr"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          />
          <br/>
          <button id="buttonr" type="submit" >Submit</button>
          <br/>
          <p id="pr">Already a member?  <a href="/login">Login</a> </p>
      </form>
      </div>
    );
  }
}

export default register;
