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
        <Route exact path="/" component={home} />
        <Route exact path="/Edit" component={edit} />
        <Route exact path="/Manage" component={manage} />
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div>
      </Router>
    );
  }
}

export default App;

