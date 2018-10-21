import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/SearchAppBar';


class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {};
  }

  render() {
    return (
      <TopBar />
    );
  }
}

export default App;
