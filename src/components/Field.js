import React, { Component } from 'react';
import languageContext from './context/languageContext';

class Field extends Component {
  static contextType = languageContext;
  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
