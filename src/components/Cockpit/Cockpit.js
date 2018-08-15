import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    //* adding css class dynamically
    //! Show/Hide Button

    let btnClass='';
    if (props.showPersons) {
      btnClass= classes.Red
    }


    //! Person Cards
    let assignedClasses =[];

    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


  return (
    <div className={classes.Cockpit}>
      <h2>{props.appTitle}</h2>
      <h1>React 16 -  Maximilian Schwarzmüller </h1>
      <p className={assignedClasses.join(' ')}>Udemy Course</p>
      {/* since 'classes is an array, use join(' ') */}
      
      <button
      className={btnClass}
      onClick={props.clicked}>
      Show Persons</button>
    </div>
  )
};

export default cockpit;