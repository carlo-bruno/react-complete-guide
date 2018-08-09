import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: "Joe", age: 28 },
      { name: "Jack", age: 32 },
      { name: "Rachel", age: 22 }
    ]
  };

  switchNameHandler = () => {
    // console.log('button clicked');
    // ! WRONG: this.state.persons[0].name = "Joseph";
    // * RIGHT: use setState()
    this.setState( { persons: [ 
      { name: "Joseph", age: 28 },
      { name: "Jack", age: 32 },
      { name: "Rachel", age: 23 }
    ]
  } )
  };

  render() {
    return (
      <div className="App">
        <h1>Udemy Course: React 16 -  Maximilian Schwarzmüller </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age ={ this.state.persons[1].age }>My Hobbies: Lumberjacking </Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
      </div>
    );
  };
}

export default App;
