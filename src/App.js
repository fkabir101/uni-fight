import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/form/form'
import './App.css';
import Header from "./compnents/header/headerMaine"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/create" component={Form}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
