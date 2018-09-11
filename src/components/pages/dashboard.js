import React, { Component } from 'react';
import Showhobbies from '../hobbytable/Showhobbies';
import './dashboard.css';
import axios from 'axios';


class dashboard extends Component {
  state = {
    hobby:"",
    description:"",
    username:"",
    isLoggedIn: false
  };

  change  = e=> {
    this.setState({
    [e.target.name]:e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
      const userinfo = localStorage.getItem('username');
          //console.log(userinfo);
          this.setState({
               usename:userinfo

          })
          // console.log('ha!!!');
          // console.log(userinfo);
          // console.log(this.state.hobby);
          // console.log(this.state.description);

          axios.post('http://localhost:1337/hobbies/create', {
              hobbies : {
                   username: userinfo,
                   hobby: this.state.hobby,
                   description:this.state.description,
                   message:' Hobby created '
                   }
              })
                   .then(res=>{
                        console.log(res.data);
                        alert(res.data.message);
                        this.setState({
                             isLoggedIn: true,
                        });
                   },
              );
                window.location.reload();
  }
  render() {
    return (
    	<div>
      <nav>
        <ul>
          <li> <a href="/">Logout</a></li>
        </ul>
      </nav>
      <header>
          <h3>Hobby App</h3>
      </header>

        <div className="text-center">
          <h1>Something New .</h1>
          <h4> Let us keep track of your hobbies.</h4>
          <h4>Add Hobbies</h4>

          <form className="formd" onSubmit={this.onSubmit}>
            <div>
              <label value="Hobby"/>
              <br/>
              <input
                id="inputd"
                type="text"
                name="hobby"
                placeholder="Hobby"
                value={this.state.hobby}
                onChange={e => this.change(e)}
              />
            </div>

            <div>
              <label value="Description"/>
              <br/>
              <textarea
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={e => this.change(e)}
              />
            </div>
            <button id="buttond" type="submit">Send</button>
          </form>
        </div>
        <Showhobbies />
	      <footer>
	          <p>Hobby App. @Delivery Science</p>
	      </footer>
	    </div>
    );
  }
}

export default dashboard;
