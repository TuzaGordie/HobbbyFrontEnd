import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
    	<div>
        <nav>
          <ul>
            <li> <a href="/">Home</a></li>
            <li> <a href="/login">Login</a></li>
            <li> <a href="/register">SignUp</a></li>
          </ul>
        </nav>
	      <header>
            <h3>Hobby App</h3>
	      </header>
	    </div>
    );
  }
}

export default Header;
