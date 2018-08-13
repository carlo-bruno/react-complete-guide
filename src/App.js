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
    // ? inline style
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid gray',
      borderRadius: '3px',
      boxShadow: '3px 5px 5px #ccc',
      padding: '8px',
      cursor: 'pointer'
    };

    //* conditional rendering
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
      style.backgroundColor = 'red'; //? dynamically changing color of button when toggled
    }

    //* adding css class dynamically
    let classes =[];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //? 2 person cards, class = 'red'
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //? 1 or less person card, class = 'red bold'
    }

    return (
      <div className="App">
        <h1>React 16 -  Maximilian Schwarzmüller </h1>
        <p className={classes.join(' ')}>Udemy Course</p>
        {/* since 'classes is an array, use join(' ') */}
        
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
