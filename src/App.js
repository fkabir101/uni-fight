import React, { Component } from 'react';
import Form from './components/form/form'
import './App.css';
import Header from "./compnents/header/headerMaine"

class App extends Component {
  render() {
    return (
      <Header />
      <Form/>
    );
  }
}

export default App;
