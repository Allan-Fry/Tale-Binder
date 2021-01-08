import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home from "./pages/home";
import edit from "./pages/edit";
import manage from "./pages/manage";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Talebinder</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Edit/1" className="nav-link">Edit</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Manage" className="nav-link">Manage</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
        <Route exact path="/" component={home} />
        <Route exact path="/Edit/:id" component={edit} />
        <Route exact path="/Manage" component={manage} />
        </div>
      </Router>
    );
  }
}

export default App;

