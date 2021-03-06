import React, { Component }from 'react';
import classes from './Person.css'; // ? import css file


class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[>>>Person.js] Inside Constructor', props );
    // this.state = {
       //! This works too
    // }
  }

  componentWillMount() {
    console.log('[>>>Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[>>>Person.js] Inside componentDidMount');
  }

  render () {
    console.log('[>>>Person.js] Inside render()')
    return (
      <div className={classes.Person}>
        <p onClick={ this.props.click }>I am { this.props.name } and I am { this.props.age } years old!!</p>
        <p>{ this.props.children }</p>
        <input type="text" onChange={ this.props.changed } value={ this.props.name } />
      </div>
    )
    }
}


export default Person;