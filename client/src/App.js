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



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/create" component={Form}/>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/events" component={EventsPage}/>
            <Route exact path="/user" component={UserPage}/>
            <Route exact path="/events/:id" component={SingleEventPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
