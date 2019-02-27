import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/form/form';
import Header from "./components/header/headerMaine";
import MainPage from "./components/mainPage/mainPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/create" component={Form}/>
            <Route exact path="/" component={MainPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
