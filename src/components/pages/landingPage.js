import React, { Component } from 'react';
import './landingPage.css';
import Header from '../header/Header';

class Landingpage extends Component {
  render() {
    return (
    	<div>
	      <Header />

	      	<div className="text-center">
		        <h1>Something New .</h1>
		        <h4> Let us keep track of your hobbies.</h4>
		        <p>Hobbies are regular activities that are done for enjoyment, typically during one''s leisure time. Hobbies
		        can include collecting themed items and objects, engaging in creative and artistic pursuit, playing sports, or
		        pursuing other amusement.</p>
		        <p className="lead">
		          <a href="" className="btn btn-lg btn-secondary">Learn more</a>
		        </p>
	        </div>
	      <footer>
	          <p>Hobby App. @Delivery Science</p>
	      </footer>
	    </div>
    );
  }
}

export default Landingpage;
