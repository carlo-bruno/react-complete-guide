import React, { Component } from 'react';
import classes from './App.css';
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
    //* conditional rendering
    let persons = null; // ? default output of return
    let btnClass = ''; //? create var to assign inside if condition

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
      );
      btnClass = classes.Red;
      //? when button is toggled, change value
      //! classes.Red is tied to the App.css selectors, will generate a class name that is scoped only to this file
    }

    //* adding css class dynamically
    //! css module: renamed classes to assignedClasses
    let assignedClasses =[];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red ); //? 2 person cards, class = 'red'
      //! css module: instead of passing css selector, use classes object, see ln 2
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //? 1 or less person card, class = 'red bold'
    }

    return (
      <div className={classes.App}>
        <h1>React 16 -  Maximilian Schwarzmüller </h1>
        <p className={assignedClasses.join(' ')}>Udemy Course</p>
        {/* since 'classes is an array, use join(' ') */}
        
        <button
          className={btnClass} //! see ln 70
          onClick={this.togglePersonsHandler}>
          Show Persons</button> {/* can be inefficient */}
          {persons}
      </div>
    );
  };
}

export default App;
