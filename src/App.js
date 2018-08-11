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
      ],
      otherState: 'some other value',
      showPersons: false
    } )
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    this.setState({ showPersons: !this.state.showPersons});
  }

  render() {
    // ? inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null; // ? default output of return

    if ( this.state.showPersons ) { // ? check before returning
      persons = (
        <div>
          {this.state.persons.map(person => { // ? rendering array using .map()
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Udemy Course: React 16 -  Maximilian Schwarzmüller </h1>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>
          Switch Name</button> {/* can be inefficient */}
          {persons}

      </div>
    );
  };
}

export default App;
