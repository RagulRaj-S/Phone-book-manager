import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      
      <nav class="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
        <a class="navbar-brand" style={{color:"black"}} href="#">Phone Book</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item" >
            <Link to="/" style={{color:"black"}} className="nav-link">Contacts</Link>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
            <Link to="/create" style={{color:"black"}} className="nav-link">Create-Contact</Link>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
            <Link to="/search" style={{color:"black"}} className="nav-link">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}