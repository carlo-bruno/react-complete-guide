import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Udemy Course: React 16 -  Maximilian Schwarzmüller </h1>
        <Person name="Joe" age="28" />
        <Person name="Jack" age ="32">My Hobbies: Lumberjacking </Person>
        <Person name="Rachel" age="22"/>
      </div>
    );
  }
}

export default App;
