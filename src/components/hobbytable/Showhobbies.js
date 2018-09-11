import React, { Component } from 'react';
import axios from 'axios';
import './Showhobbies.css';


class Showhobbies extends Component {
  state = {
    hobby:[],
    description:"",
    username:""
  }
  delete = (id) => (e) =>{
    axios.post(`http://localhost:1337/hobbies/delete`,{id})
    console.log(id)
    window.location.reload();
  }

  componentWillMount() {

        const userinfo = localStorage.getItem('username');
        //console.log('here');
        //console.log(userinfo);

        axios.post('http://localhost:1337/hobbies/showhobbies', {
            body:{
                username:userinfo
            }
        } )
            .then(res =>{
                 this.setState({
                     hobby:res.data.hobby,
                 });
            });
            console.log(this.state.hobby)
    }

  render() {
    return (
    	<div className="contained">
        <table>
          <thead>
            <tr>
              <th>Hobby</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.state.hobby.map(item=>(
                <tr >
                  <td>{item.hobby}</td>
                  <td>{item.description}</td>
                  <td>
                      <button onClick={this.delete(item.id)} className="btn-danger">Delete</button>
                 </td>
                </tr>
                ))}
          </tbody>
        </table>
	    </div>
    );
  }
}

export default Showhobbies;
