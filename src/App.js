import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id: 'a001', name: "Joe", age: 28 },
      { id: 'a002', name: "Jack", age: 32 },
      { id: 'a003', name: "Rachel", age: 22 }
    ]
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //? new array from state
    const persons = [...this.state.persons]; //* es6 using spread

    persons.splice(personIndex, 1);   //? splice clicked item
    this.setState({persons: persons}); //? set the state to new array
    //! note: state persons <-- new persons 
  };

  nameChangedHandler = (event, id) => {
    //* to change state of the single person
    //? get the index of person that matches the id
    //? .findIndex()
    const personIndex = this.state.persons.findIndex(human => {
      return human.id === id;
    });
    //? select the person from state array using the person index
    //? spread method to not mutate the original array
    const person = {...this.state.persons[personIndex]};
    
    //? now change the name using the event value
    person.name = event.target.value;
    
    //? grab copy of state array
    const persons = [...this.state.persons];
    //? update the 'copy' array with the updated 'person'
    persons[personIndex] = person;

    //* now update state
    //! note: state persons <-- copy persons
    this.setState( { persons: persons });
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
          {this.state.persons.map((person, index) => { // ? rendering array using .map()
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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
          Show Persons</button> {/* can be inefficient */}
          {persons}

      </div>
    );
  };
}

export default App;
