import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons : [
      { id: 'a001', name: "Joe", age: 28 },
      { id: 'a002', name: "Jack", age: 32 },
      { id: 'a003', name: "Rachel", age: 22 },
      { id: 'a004', name: "Jill", age: 27 },
      { id: 'a005', name: "Rock", age: 21 }
      
    ]
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //? new array from state
    const persons = [...this.state.persons]; //* es6 using spread, copy array

    persons.splice(personIndex, 1);   //? splice clicked item
    this.setState({persons: persons}); //? set the state to new array
    //! note: state persons <-- copy persons 
  };

  nameChangedHandler = (event, id) => {
    //* to change state of the single person
    //? get the index of person that matches the id
    //? .findIndex()
    const personIndex = this.state.persons.findIndex(human => {
      return human.id === id;
    });
    //? select the person from state array using the person index
    //? create person copy using spread method to not mutate the original array
    const person = {...this.state.persons[personIndex]};
    
    //? now change the name using the event value
    person.name = event.target.value;
    
    //? grab copy of state array
    const persons = [...this.state.persons];
    //? update the 'copy' array with the updated 'person'
    persons[personIndex] = person;

    //* now update state
    this.setState( { persons: persons });
    //! note: state persons <-- copy persons
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    this.setState({ showPersons: !this.state.showPersons});
  }

  render() {
    //* conditional rendering
    let persons = null; // ? default output of return

    if ( this.state.showPersons ) { // ? check before returning
      persons = (
        <Persons
          persons ={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title} //! using this.props, built-in props from {Components}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons} {/* See ln 59 */}
      </div>
    );
  };
}

export default App;
