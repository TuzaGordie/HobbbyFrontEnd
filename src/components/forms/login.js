import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../header/Header';
import dashboard from '../pages/dashboard';
import axios from 'axios';
import './login.css';

class login extends Component {
  state = {
    username:"",
    password:"",
    isLoggedIn:false
  };

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
          const user = {
               username: this.state.username,
               password: this.state.password,
          }
          //const self = this;
          axios.post('http://localhost:1337/login', user)
               .then(res=>{
                    console.log(res.data);
                    alert(res.data.message);
                    if(res.data.status === "OK"){
                         localStorage.setItem('username', this.state.username);
                         console.log(localStorage.getItem('username'));
                          this.setState({isLoggedIn: !this.state.isLoggedIn});
                    }else{
                      alert(res.data.message);
                    }
                    console.log('current state '+this.state.isLoggedIn);
               },
          );
  };

  render() {
    if(this.state.isLoggedIn){
      return (
        <Redirect to={"/dashboard"} component={dashboard}/>
      )
    }

    return (
      <div>
      <Header />
    	<form className="forml" onSubmit={this.onSubmit}>
        <input
          id="inputl"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          />
          <br/>
        <input
          id="inputl"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          />
          <br/>
          <button id="buttonl" type="submit">Submit</button>
          <p id="pl">Not yet a member?  <a href="/register">SignUp</a> </p>
      </form>
      </div>
    );
  }
}

export default login;
