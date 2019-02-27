import React, { Component } from 'react';
import Form from './components/form/form'
import './App.css';
import Header from "./components/header/headerMaine"

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Form/>
      </div>
    );
  }
}

export default App;
