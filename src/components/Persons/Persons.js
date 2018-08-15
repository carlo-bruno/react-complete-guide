import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => props.persons.map((person, index) => {
    return <ErrorBoundary key={person.id}>
      <Person
        click={() => props.clicked(index)}
        name={person.name}  //! create props that is then called in the App.js
        age={person.age}    //! using {this.} 
        changed={(event) => props.changed(event, person.id)} /> 
      </ErrorBoundary>
  })

export default persons;