import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

      <div className="logo">
      	Hobby App
      </div>

      <nav>
      	<ul>
      		<li><a href="/">Home</a></li>
      		<li><a href="/login">Login</a></li>
      		<li><a href="/register">SignUp</a></li>
      	</ul>
      </nav>
      </header>
    );
  }
}

export default Header;
