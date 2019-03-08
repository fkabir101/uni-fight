import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/form/form';
import Header from "./components/header/headerMaine";
import MainPage from "./components/mainPage/mainPage";
import Footer from "./components/footer/footerMaine"
import Login from "./components/login/loginMaine"
import EventsPage from "./components/Events/eventspage";
import UserPage from "./components/userPage/userMaine"
import SingleEventPage from "./pages/singleEventPage";

import API from './utils/api';

class App extends Component {
  state = {
    isLoggedIn: false
  }
  componentDidMount() {
    this.loginCheck();
  }
 
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => {
        console.log(res.data);
        this.setState({
          isLoggedIn: res.data.isLoggedIn, username: res.data.username, email: res.data.email 
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoggedIn: false })
      })
  }
  render() {

    if (null) {
      return (
      <Router>
        <div>
          <Header isLoggedIn={this.state.isLoggedIn} loginCheck={this.loginCheck}/>
          <Switch>
            <Route exact path="/" render={() => <MainPage isLoggedIn={this.state.isLogged}/>}/>
            <Route exact path="/login" render={() => <Login loginCheck={this.loginCheck}/>}/>
            <Route exact path="/events" render={() => <EventsPage isLoggedIn={this.state.isLogged}/>}/>
            <Route exact path="/events/:id" component={SingleEventPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
      )
    }
    else {
    return (
      <Router>
        <div>
          <Header isLoggedIn={this.state.isLoggedIn} loginCheck={this.loginCheck}/>
          <Switch>
            <Route exact path="/" render={() => <MainPage isLoggedIn={this.state.isLogged}/>}/>
            <Route exact path="/create" render={() => <Form isLoggedIn={this.state.isLogged}/>}/>
            <Route exact path="/login" render={() => <Login loginCheck={this.loginCheck}/>}/>
            <Route exact path="/events" render={() => <EventsPage isLoggedIn={this.state.isLogged}/>}/>
            <Route exact path="/user" render={() => <UserPage isLoggedIn={this.state.isLogged}/>}/>
            <Route exact path="/events/:id" component={SingleEventPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }//else
  }
}

export default App;
