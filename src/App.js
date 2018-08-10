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

  switchNameHandler = (newName) => {
    // console.log('button clicked');
    // ! WRONG: this.state.persons[0].name = "Joseph";
    // * RIGHT: use setState()
    this.setState( { 
      persons: [ 
        { name: newName, age: 28 },
        { name: "Jack", age: 32 },
        { name: "Rachel", age: 23 }
      ]
    } )
  };

  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [ 
        { name: "Joe", age: 28 },
        { name: event.target.value, age: 32 },
        { name: "Rachel", age: 22 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Udemy Course: React 16 -  Maximilian Schwarzmüller </h1>
        <button onClick={() => this.switchNameHandler('Joseph!')}>
          Switch Name</button> {/* can be inefficient */}
        <Person 
          name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age } />
        <Person 
          name={ this.state.persons[1].name } 
          age ={ this.state.persons[1].age }
          click={this.switchNameHandler.bind(this, 'Jo-Jo!!!')}
          changed={this.nameChangedHandler} 
          > My Hobbies: Lumberjacking
        </Person>
        <Person 
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age }/>
      </div>
    );
  };
}

export default App;
