import React from 'react';
import Radium from "radium";
import './Person.css'; // ? import css file


const person = (props) => {
    const style = {
        '@media (min-width: 500px)': { //? radium, still valid js object
            width: '450px'
        }
        //* Main component (App.js) should be wrapped in <StyleRoot>
    };

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I am { props.name } and I am { props.age } years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person);