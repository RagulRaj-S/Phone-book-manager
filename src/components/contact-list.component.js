import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.contactname}</td>
    <td>{props.exercise.phone}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>
      <i class='fas fa-edit'></i>  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link><a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>
      <i class='fas fa-trash'></i>
      </a>
    </td>
  </tr>
)

export default class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Contacts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Contact-Name</th>
              <th>Phone Number</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}