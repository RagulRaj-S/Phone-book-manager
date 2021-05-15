import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditContact extends Component {

  constructor(props) {
    super(props);
    this.onChangeContactname = this.onChangeContactname.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      contactname: '',
      phone: '',
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          contactname: response.data.contactname,
          phone: response.data.phone,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeContactname(e) {
    this.setState({
      contactname: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      contactname: this.state.contactname,
      phone: this.state.phone,
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Contact Number</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Contact name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.contactname}
              onChange={this.onChangeContactname}
              />
        </div>
        <div className="form-group"> 
          <label>Phone Number: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Contact" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}