import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/navbar.component"
import ContactsList from "./components/contact-list.component";
import EditContact from "./components/edit-contact.component";
import CreateContact from "./components/create-contact.component";
import SearchContact from "./components/search.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Nav />
      <br/>
      <Route path="/" exact component={ContactsList} />
      <Route path="/edit/:id" component={EditContact} />
      <Route path="/create" component={CreateContact} />
      <br/><br/><br/>
      <Route path="/search" component={SearchContact} />
      </div>
    </Router>
  );
}

export default App;
